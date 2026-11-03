import { INITIAL_CASES } from './cases.js';

const CUSTOM_CASES_KEY = 'quiz-imagerie:custom-cases:v1';
const DELETED_IDS_KEY = 'quiz-imagerie:deleted-ids:v1';
const PROGRESS_KEY = 'quiz-imagerie:progress:v1';
const BOOKMARKS_KEY = 'quiz-imagerie:bookmarks:v1';
const PSEUDO_KEY = 'quiz-imagerie:pseudo:v1';

const listeners = new Set();

function notify() {
  for (const fn of listeners) {
    try {
      fn();
    } catch {
      // ignore listener errors
    }
  }
}

export function subscribeStore(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function safeReadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeWriteJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('localStorage write failed:', err);
    throw new Error('Stockage local saturé. Essayez de réduire la taille des images ou d’exporter vos cas.');
  }
}

// ---------- Pseudo ----------
export function readPseudo() {
  try {
    return localStorage.getItem(PSEUDO_KEY) || '';
  } catch {
    return '';
  }
}

export function savePseudo(name) {
  try {
    const clean = String(name || '').trim().slice(0, 40);
    if (clean) localStorage.setItem(PSEUDO_KEY, clean);
    else localStorage.removeItem(PSEUDO_KEY);
    notify();
  } catch {
    // ignore
  }
}

// ---------- Cases (Bundled + Custom Overrides) ----------
export function readCustomCases() {
  const list = safeReadJson(CUSTOM_CASES_KEY, []);
  return Array.isArray(list) ? list : [];
}

export function readDeletedIds() {
  const list = safeReadJson(DELETED_IDS_KEY, []);
  return new Set(Array.isArray(list) ? list : []);
}

export function getAllCases() {
  const deleted = readDeletedIds();
  const customList = readCustomCases();
  const customById = new Map(customList.map((c) => [c.id, c]));

  const merged = [];

  for (const baseCase of INITIAL_CASES) {
    if (deleted.has(baseCase.id)) continue;
    if (customById.has(baseCase.id)) {
      merged.push({ ...baseCase, ...customById.get(baseCase.id), isEdited: true });
      customById.delete(baseCase.id);
    } else {
      merged.push(baseCase);
    }
  }

  // Prepend newly added custom cases so they appear right away at the top or in order
  const newCustomCases = Array.from(customById.values())
    .filter((c) => !deleted.has(c.id))
    .map((c) => ({ ...c, isCustom: true }));

  return [...newCustomCases, ...merged];
}

export function saveCase(caseData) {
  const customList = readCustomCases();
  const deleted = readDeletedIds();

  const id =
    caseData.id && String(caseData.id).trim()
      ? String(caseData.id).trim()
      : `cas-${Date.now().toString(36)}`;

  const cleanSynonyms = Array.isArray(caseData.synonyms)
    ? caseData.synonyms.map((s) => String(s).trim()).filter(Boolean)
    : String(caseData.synonyms || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

  const cleanKeySigns = Array.isArray(caseData.keySigns)
    ? caseData.keySigns.map((s) => String(s).trim()).filter(Boolean)
    : String(caseData.keySigns || '')
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);

  const normalizedCase = {
    id,
    title: String(caseData.title || `Cas — ${caseData.diagnosis || 'Imagerie'}`).trim(),
    region: caseData.region || 'epaule',
    modality: caseData.modality || 'IRM',
    difficulty: Number(caseData.difficulty) || 2,
    clinicalContext: String(
      caseData.clinicalContext || 'Quel est votre diagnostic sur cette image ?'
    ).trim(),
    image: caseData.image || '',
    diagnosis: String(caseData.diagnosis || '').trim(),
    synonyms: cleanSynonyms.length ? cleanSynonyms : [String(caseData.diagnosis || '').trim()],
    hint: String(caseData.hint || '').trim(),
    keySigns: cleanKeySigns,
    explanation: String(caseData.explanation || '').trim(),
    correctionImage: caseData.correctionImage || '',
    correctionCaption: String(caseData.correctionCaption || '').trim(),
    updatedAt: new Date().toISOString(),
  };

  if (!normalizedCase.image) {
    throw new Error('Une image radiologique est obligatoire pour enregistrer le cas.');
  }
  if (!normalizedCase.diagnosis) {
    throw new Error('Le diagnostic principal est obligatoire.');
  }

  const idx = customList.findIndex((c) => c.id === id);
  if (idx >= 0) {
    customList[idx] = normalizedCase;
  } else {
    customList.unshift(normalizedCase);
  }

  if (deleted.has(id)) {
    deleted.delete(id);
    safeWriteJson(DELETED_IDS_KEY, Array.from(deleted));
  }

  safeWriteJson(CUSTOM_CASES_KEY, customList);
  notify();
  return normalizedCase;
}

export function deleteCase(id) {
  const customList = readCustomCases().filter((c) => c.id !== id);
  safeWriteJson(CUSTOM_CASES_KEY, customList);

  const isInitial = INITIAL_CASES.some((c) => c.id === id);
  if (isInitial) {
    const deleted = readDeletedIds();
    deleted.add(id);
    safeWriteJson(DELETED_IDS_KEY, Array.from(deleted));
  }
  notify();
}

export function resetAllCasesToDefault() {
  localStorage.removeItem(CUSTOM_CASES_KEY);
  localStorage.removeItem(DELETED_IDS_KEY);
  notify();
}

export function importCasesFromJson(jsonArray) {
  if (!Array.isArray(jsonArray)) {
    throw new Error('Le fichier JSON doit contenir un tableau de cas.');
  }
  const current = readCustomCases();
  const byId = new Map(current.map((c) => [c.id, c]));
  let count = 0;

  for (const item of jsonArray) {
    if (!item || !item.diagnosis || !item.image) continue;
    const id = item.id || `import-${Date.now().toString(36)}-${count}`;
    byId.set(id, { ...item, id });
    count++;
  }

  safeWriteJson(CUSTOM_CASES_KEY, Array.from(byId.values()));
  notify();
  return count;
}

// ---------- Progress & Bookmarks ----------
export function readProgress() {
  const obj = safeReadJson(PROGRESS_KEY, {});
  return obj && typeof obj === 'object' ? obj : {};
}

export function saveCaseAttempt(caseId, { status, score, userAnswer }) {
  const all = readProgress();
  const prev = all[caseId] || { attempts: 0, bestScore: 0 };
  all[caseId] = {
    status, // 'exact' | 'partial' | 'wrong' | 'revealed'
    score,
    bestScore: Math.max(prev.bestScore ?? 0, score ?? 0),
    userAnswer: String(userAnswer || ''),
    attempts: (prev.attempts || 0) + 1,
    updatedAt: new Date().toISOString(),
  };
  safeWriteJson(PROGRESS_KEY, all);
  notify();
  return all[caseId];
}

export function clearCaseAttempt(caseId) {
  const all = readProgress();
  delete all[caseId];
  safeWriteJson(PROGRESS_KEY, all);
  notify();
}

export function clearAllProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  notify();
}

export function readBookmarks() {
  const arr = safeReadJson(BOOKMARKS_KEY, []);
  return new Set(Array.isArray(arr) ? arr : []);
}

export function toggleBookmark(caseId) {
  const set = readBookmarks();
  if (set.has(caseId)) set.delete(caseId);
  else set.add(caseId);
  safeWriteJson(BOOKMARKS_KEY, Array.from(set));
  notify();
  return set.has(caseId);
}

// ---------- Image Compression Utility (like Quiz Cochin ProposeQuestionPage) ----------
export function compressImageFile(file, maxSideTarget = 1100) {
  return new Promise((resolve, reject) => {
    if (!file || !/^image\/(png|jpeg|jpg|webp|gif)$/i.test(file.type)) {
      reject(new Error('Format non pris en charge : utilisez une image PNG, JPEG ou WebP.'));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      let maxSide = maxSideTarget;
      let quality = 0.82;
      let dataUrl = '';

      for (let attempt = 0; attempt < 6; attempt++) {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#05090f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        dataUrl = canvas.toDataURL('image/jpeg', quality);
        if (dataUrl.length <= 240000) break;
        maxSide = Math.max(480, Math.round(maxSide * 0.82));
        quality = Math.max(0.55, quality - 0.08);
      }
      resolve(dataUrl);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Impossible de lire ce fichier image.'));
    };
    img.src = url;
  });
}
