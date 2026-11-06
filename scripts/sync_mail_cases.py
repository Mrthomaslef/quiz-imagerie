#!/usr/bin/env python3
"""
Synchronisation et anonymisation automatique des nouvelles images radiologiques
reçues ou envoyées par mail (Hippolyte, Macil, Marie-Pauline, Yazid, Stefano, Thomas).
Format strict : 1 image = 1 diagnostic, 0 information patient, 0 date.
"""
import email
import hashlib
import json
import os
import re
import sqlite3
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
STATE_FILE = ROOT / "scripts" / "processed_state.json"
OCR_SWIFT = ROOT / "scripts" / "ocr_redact.swift"
CASES_JS = ROOT / "src" / "data" / "cases.js"
MAILS_IMG_DIR = ROOT / "public" / "figures" / "mails"
MAIL_DIR = Path("/Users/thomaslefevre/Library/Mail/V10")
ENVELOPE_DB = MAIL_DIR / "MailData" / "Envelope Index"

COLLEAGUE_FILTERS = (
    "hippolyte.monnier",
    "macil.hamadouche",
    "marie.talabard",
    "yazid.allel",
    "stefano.lusi",
    "thomas-jean.lefevre",
    "thomaslefevre18",
    "gregoire.attane",
)


def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    return {"last_rowid": 105711, "seen_md5": []}


def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def is_radiology_image(im: Image.Image) -> bool:
    w, h = im.size
    if w < 220 or h < 220:
        return False
    gray = im.convert("L")
    hist = gray.histogram()
    tot = float(sum(hist))
    dark_frac = sum(hist[:55]) / tot
    white_frac = sum(hist[215:]) / tot
    # Exclude white text/document/administrative screenshots
    if white_frac > 0.55 or dark_frac < 0.05:
        return False
    return True


def crop_pacs_chrome(im: Image.Image) -> Image.Image:
    w, h = im.size
    if (w, h) == (1920, 1080):
        return im.crop((10, 170, 1885, 935))
    if (w, h) == (1680, 1050):
        return im.crop((10, 165, 1650, 915))
    return im


def redact_all_text(image_path: Path):
    for pass_num in range(1, 5):
        out = subprocess.check_output(
            ["swift", str(OCR_SWIFT), str(image_path)],
            text=True,
        ).strip()
        boxes = json.loads(out) if out else []
        if not boxes:
            break
        im = Image.open(image_path).convert("RGB")
        w, h = im.size
        draw = ImageDraw.Draw(im)
        pad = 6 + pass_num * 2
        for b in boxes:
            x0 = max(0, int(b["x"] * w) - pad)
            y0 = max(0, int(b["y"] * h) - pad)
            x1 = min(w, int((b["x"] + b["w"]) * w) + pad)
            y1 = min(h, int((b["y"] + b["h"]) * h) + pad)
            draw.rectangle([x0, y0, x1, y1], fill=(0, 0, 0))
        im.save(image_path, "JPEG", quality=95)


def extract_email_text(rowid: int, att_path: Path) -> str:
    msg_dir = str(att_path).split(f"/Attachments/{rowid}/")[0] + "/Messages"
    for ext in (".partial.emlx", ".emlx"):
        emlx = Path(msg_dir) / f"{rowid}{ext}"
        if emlx.exists():
            raw = emlx.read_bytes()
            msg = email.message_from_bytes(raw[raw.find(b"\n") + 1 :])
            for part in msg.walk():
                if part.get_content_type() in ("text/plain", "text/html"):
                    pl = part.get_payload(decode=True)
                    if pl:
                        txt = pl.decode(part.get_content_charset() or "utf-8", errors="replace")
                        txt = re.sub(r"<style.*?</style>", " ", txt, flags=re.S | re.I)
                        txt = re.sub(r"<[^>]+>", " ", txt)
                        return re.sub(r"\s+", " ", txt).strip()
    return ""


def infer_metadata(body: str, subject: str):
    combined = f"{subject} {body}".lower()
    # Infer region
    region = "hanche"
    if any(w in combined for w in ("épaule", "epaule", "coiffe", "supra-épineux", "infra-épineux", "glène", "butée", "clavicule", "humér")):
        region = "epaule"
    elif any(w in combined for w in ("coude", " olécrane", "épicondyl")):
        region = "coude"
    elif any(w in combined for w in ("poignet", "main", "carpe", "métacarp", "doigt", "pouce", "poulie", "ecu", "lombrical")):
        region = "main-poignet"
    elif any(w in combined for w in ("genou", "tibia", "ménisque", "condyle", "patella", "rotule", "croisé")):
        region = "genou"
    elif any(w in combined for w in ("cheville", "pied", "talus", "astragale", "calcan", "métatars", "orteil", "hallux", "morton", "fibulaire", "plantaire", "jambe")):
        region = "jambe-cheville-pied"
    elif any(w in combined for w in ("rachis", "vertèbre", "vertebr", "lombaire", "dorsal", "cervical", "sacrum", "sacré", "foraminal", "l1", "l2", "l3", "l4", "l5", "t12")):
        region = "rachis"

    # Infer modality
    modality = "IRM"
    if any(w in combined for w in ("scanner", "tdm", "arthroscanner", "cimentoplastie")):
        modality = "Arthroscanner / TDM"
    elif any(w in combined for w in ("échographie", "echographie", "écho", "us ")):
        modality = "Échographie"
    elif any(w in combined for w in ("radiographie", "cliché", "rx")):
        modality = "Radiographie"

    # Infer clean radiological diagnosis (strictly without patient name or date)
    DIAG_PATTERNS = [
        (r"schwannome|tbgnp|tumeur bénigne des gaines", "Tumeur bénigne des gaines des nerfs périphériques (schwannome)"),
        (r"mpnst|tumeur maligne des gaines", "Tumeur maligne des gaines des nerfs périphériques (MPNST)"),
        (r"ostéome ostéoïde|osteome osteoide|\boo\b", "Ostéome ostéoïde"),
        (r"morton", "Névrome de Morton"),
        (r"desmoïde|desmoide|fibromatose", "Tumeur desmoïde (fibromatose profonde)"),
        (r"myxome", "Myxome intramusculaire"),
        (r"tumeur à cellules géantes|\btcg\b", "Tumeur à cellules géantes (TCG)"),
        (r"chondrosarcome", "Chondrosarcome"),
        (r"infarctus osseux|ostéonécrose", "Infarctus osseux (ostéonécrose)"),
        (r"malformation vasculaire|malformation artério-veineuse", "Malformation vasculaire des parties molles"),
        (r"malformation lymphatique|lymphangiome", "Malformation lymphatique macrokystique"),
        (r"myélome|plasmocytome", "Localisation osseuse de myélome multiple / plasmocytome"),
        (r"métastase|lésion secondaire|ostéolyse", "Lésion osseuse ostéolytique secondaire (métastase)"),
        (r"de quervain", "Ténosynovite sténosante de De Quervain (1er compartiment des extenseurs)"),
        (r"doigt à ressaut|pouce à ressaut|poulie a1", "Doigt à ressaut (ténosynovite sténosante sur poulie A1)"),
        (r"capsulite", "Capsulite rétractile de l'épaule"),
        (r"kyste essentiel|kyste unicaméral", "Kyste osseux essentiel (unicaméral)"),
    ]
    diagnosis = None
    for pat, label in DIAG_PATTERNS:
        if re.search(pat, combined):
            diagnosis = label
            break
    return region, modality, diagnosis


def main():
    state = load_state()
    last_rowid = state.get("last_rowid", 105711)
    seen_md5 = set(state.get("seen_md5", []))

    conn = sqlite3.connect(f"file:{ENVELOPE_DB}?mode=ro", uri=True)
    cur = conn.cursor()
    where_clauses = " OR ".join([f"lower(a.address) LIKE '%{col}%'" for col in COLLEAGUE_FILTERS])
    cur.execute(
        f"""
        SELECT m.ROWID, a.address, s.subject
        FROM messages m
        LEFT JOIN addresses a ON m.sender = a.ROWID
        LEFT JOIN subjects s ON m.subject = s.ROWID
        WHERE m.ROWID > ? AND ({where_clauses})
        ORDER BY m.ROWID ASC
        """,
        (last_rowid,),
    )
    rows = cur.fetchall()
    if not rows:
        print(f"No new colleague emails since ROWID={last_rowid}.")
        return

    # Find next case number in cases.js
    cases_content = CASES_JS.read_text(encoding="utf-8")
    existing_nums = [int(x) for x in re.findall(r'"id":\s*"mail-(\d+)"', cases_content)]
    next_num = (max(existing_nums) if existing_nums else 46) + 1
    added_cases = []

    for rowid, sender, subject in rows:
        last_rowid = max(last_rowid, rowid)
        cur.execute("SELECT attachment_id, name FROM attachments WHERE message = ?", (rowid,))
        if not cur.fetchall():
            continue

        # Locate attachment files on disk for this ROWID
        for att_file in MAIL_DIR.rglob(f"Attachments/{rowid}/*/*"):
            if not att_file.is_file():
                continue
            if att_file.suffix.lower() not in (".png", ".jpg", ".jpeg", ".webp"):
                continue
            if att_file.stat().st_size < 35000 or "OutlookEmoji" in att_file.name:
                continue

            md5 = hashlib.md5(att_file.read_bytes()).hexdigest()[:12]
            if md5 in seen_md5:
                continue
            seen_md5.add(md5)

            try:
                im = Image.open(att_file).convert("RGB")
            except Exception:
                continue
            if not is_radiology_image(im):
                continue

            body = extract_email_text(rowid, att_file)
            region, modality, diagnosis = infer_metadata(body, subject or "")
            if not diagnosis:
                continue

            cid = f"mail-{next_num:02d}"
            dst_img = MAILS_IMG_DIR / f"{cid}.jpg"
            cropped = crop_pacs_chrome(im)
            cropped.save(dst_img, "JPEG", quality=95)
            redact_all_text(dst_img)

            words = [w for w in re.findall(r"[a-zàâçéèêëîïôûùüÿñæœ]{4,}", diagnosis.lower()) if w not in ("avec", "dans", "pour", "sans", "tumeur", "lesion")]
            new_case = {
                "id": cid,
                "title": f"Cas Imagerie #{next_num:02d}",
                "region": region,
                "modality": modality,
                "difficulty": 2,
                "image": f"./figures/mails/{cid}.jpg",
                "clinicalContext": "",
                "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
                "hint": f"Imagerie ({modality}) — analysez la sémiologie lésionnelle.",
                "diagnosis": diagnosis,
                "synonyms": [diagnosis],
                "requiredKeywords": [words[:3] or [diagnosis.lower()]],
                "distractors": [],
                "keySigns": [f"Sémiologie caractéristique de : {diagnosis}"],
                "explanation": f"Diagnostic retenu : {diagnosis}.",
            }
            added_cases.append(new_case)
            next_num += 1
            print(f"Added {cid}: {diagnosis} ({region}, {modality})")

    state["last_rowid"] = last_rowid
    state["seen_md5"] = sorted(seen_md5)
    save_state(state)

    if added_cases:
        entries_str = ",\n".join(
            "  " + json.dumps(c, ensure_ascii=False, indent=4).replace("\n", "\n  ")
            for c in added_cases
        ) + ",\n"
        marker = "export const INITIAL_CASES = [\n"
        cases_content = cases_content.replace(marker, marker + entries_str, 1)
        CASES_JS.write_text(cases_content, encoding="utf-8")
        print(f"Updated src/data/cases.js with {len(added_cases)} new case(s).")


if __name__ == "__main__":
    main()
