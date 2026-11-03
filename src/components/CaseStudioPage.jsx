import { useEffect, useRef, useState } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';
import {
  compressImageFile,
  deleteCase,
  importCasesFromJson,
  resetAllCasesToDefault,
  saveCase,
} from '../data/storage.js';
import { evaluateDiagnosis } from '../data/matcher.js';

const EMPTY_FORM = {
  id: '',
  title: '',
  region: 'epaule',
  modality: 'IRM',
  difficulty: 2,
  clinicalContext: 'Quel est votre diagnostic sur cette image ?',
  image: '',
  diagnosis: '',
  synonymsText: '',
  hint: '',
  keySignsText: '',
  explanation: '',
  correctionImage: '',
  correctionCaption: '',
};

function caseToForm(c) {
  if (!c) return { ...EMPTY_FORM };
  return {
    id: c.id || '',
    title: c.title || '',
    region: c.region || 'epaule',
    modality: c.modality || 'IRM',
    difficulty: c.difficulty || 2,
    clinicalContext: c.clinicalContext || '',
    image: c.image || '',
    diagnosis: c.diagnosis || '',
    synonymsText: Array.isArray(c.synonyms) ? c.synonyms.join(', ') : '',
    hint: c.hint || '',
    keySignsText: Array.isArray(c.keySigns) ? c.keySigns.join('\n') : '',
    explanation: c.explanation || '',
    correctionImage: c.correctionImage || '',
    correctionCaption: c.correctionCaption || '',
  };
}

export default function CaseStudioPage({
  allCases,
  initialCaseToEdit,
  onClearInitialEdit,
  onOpenCaseInQuiz,
}) {
  const [form, setForm] = useState(() => caseToForm(initialCaseToEdit));
  const [busyImg, setBusyImg] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'ok' | 'err', msg }
  const [searchQuery, setSearchQuery] = useState('');
  const [testInput, setTestInput] = useState('');

  const fileInputRef = useRef(null);
  const corrFileInputRef = useRef(null);
  const importInputRef = useRef(null);

  useEffect(() => {
    if (initialCaseToEdit) {
      setForm(caseToForm(initialCaseToEdit));
      setFeedback(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialCaseToEdit]);

  // Support Cmd+V / Ctrl+V image paste anywhere on the Studio page
  useEffect(() => {
    const onPaste = async (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            await handleMainImageFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);

  const updateField = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const handleMainImageFile = async (file) => {
    if (!file) return;
    setBusyImg(true);
    setFeedback(null);
    try {
      const dataUrl = await compressImageFile(file);
      updateField('image', dataUrl);
      setFeedback({
        type: 'ok',
        msg: 'Image radiologique chargée et optimisée avec succès.',
      });
    } catch (err) {
      setFeedback({ type: 'err', msg: err.message });
    } finally {
      setBusyImg(false);
    }
  };

  const handleCorrectionImageFile = async (file) => {
    if (!file) return;
    setBusyImg(true);
    setFeedback(null);
    try {
      const dataUrl = await compressImageFile(file);
      updateField('correctionImage', dataUrl);
    } catch (err) {
      setFeedback({ type: 'err', msg: err.message });
    } finally {
      setBusyImg(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setFeedback(null);
    try {
      const saved = saveCase({
        id: form.id,
        title: form.title || `Cas — ${form.diagnosis}`,
        region: form.region,
        modality: form.modality,
        difficulty: Number(form.difficulty) || 2,
        clinicalContext: form.clinicalContext,
        image: form.image,
        diagnosis: form.diagnosis,
        synonyms: form.synonymsText
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        hint: form.hint,
        keySigns: form.keySignsText
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean),
        explanation: form.explanation,
        correctionImage: form.correctionImage,
        correctionCaption: form.correctionCaption,
      });

      setForm(caseToForm(saved));
      setFeedback({
        type: 'ok',
        msg: `Cas « ${saved.diagnosis} » enregistré ! Il est immédiatement disponible dans le flux.`,
      });
    } catch (err) {
      setFeedback({ type: 'err', msg: err.message });
    }
  };

  const handleNewBlank = () => {
    if (onClearInitialEdit) onClearInitialEdit();
    setForm({ ...EMPTY_FORM });
    setTestInput('');
    setFeedback(null);
  };

  const handleDelete = (c) => {
    if (!window.confirm(`Supprimer le cas « ${c.diagnosis} » ?`)) return;
    deleteCase(c.id);
    if (form.id === c.id) {
      handleNewBlank();
    }
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(allCases, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-imagerie-cochin-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const count = importCasesFromJson(parsed);
      setFeedback({
        type: 'ok',
        msg: `${count} cas importés avec succès dans la banque locale.`,
      });
    } catch (err) {
      setFeedback({
        type: 'err',
        msg: `Erreur d'import JSON : ${err.message}`,
      });
    } finally {
      e.target.value = '';
    }
  };

  const testEvaluation = testInput.trim()
    ? evaluateDiagnosis(testInput, {
        diagnosis: form.diagnosis || 'Diagnostic',
        synonyms: form.synonymsText
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
      })
    : null;

  const filteredList = allCases.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.diagnosis?.toLowerCase().includes(q) ||
      c.clinicalContext?.toLowerCase().includes(q) ||
      c.modality?.toLowerCase().includes(q) ||
      c.region?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="studio-container">
      <div className="studio-header">
        <div>
          <span className="hero-eyebrow">Studio d’enseignement · Quiz Imagerie</span>
          <h1>{form.id ? `Modifier le cas (${form.id})` : 'Ajouter un nouveau cas d’imagerie'}</h1>
          <p className="studio-sub">
            Glissez une image ou collez directement une capture d’écran (<code>Cmd+V</code> /{' '}
            <code>Ctrl+V</code>), indiquez le diagnostic attendu et l’explication.
          </p>
        </div>

        <div className="studio-header-actions">
          <button type="button" className="btn btn-ghost btn-small" onClick={handleNewBlank}>
            + Nouveau cas vierge
          </button>
          <button type="button" className="btn btn-ghost btn-small" onClick={handleExportJson}>
            ↓ Exporter JSON ({allCases.length})
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-small"
            onClick={() => importInputRef.current?.click()}
          >
            ↑ Importer JSON
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={handleImportJson}
          />
        </div>
      </div>

      {feedback && (
        <div className={`studio-alert is-${feedback.type}`}>
          <span>{feedback.type === 'ok' ? '✓' : '⚠'}</span>
          <span>{feedback.msg}</span>
          {feedback.type === 'ok' && form.id && onOpenCaseInQuiz && (
            <button
              type="button"
              className="btn btn-primary btn-small"
              onClick={() => onOpenCaseInQuiz(form.id)}
            >
              Tester ce cas dans le Quiz →
            </button>
          )}
        </div>
      )}

      <div className="studio-grid">
        {/* Left: Case Creation / Edit Form */}
        <form onSubmit={handleSave} className="studio-form-card">
          {/* 1. Image Upload Dropzone */}
          <div className="form-section">
            <label className="form-label">
              1. Image radiologique du cas *{' '}
              <span className="form-label-hint">
                (PNG, JPEG, WebP ou <code>Cmd+V</code> depuis le presse-papiers)
              </span>
            </label>

            <div
              className={`image-dropzone ${dragging ? 'is-dragging' : ''} ${
                form.image ? 'has-image' : ''
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={async (e) => {
                e.preventDefault();
                setDragging(false);
                const file = e.dataTransfer?.files?.[0];
                if (file) await handleMainImageFile(file);
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                style={{ display: 'none' }}
                onChange={(e) => handleMainImageFile(e.target.files?.[0])}
              />

              {form.image ? (
                <div className="dropzone-preview-wrap" onClick={(e) => e.stopPropagation()}>
                  <img src={form.image} alt="Aperçu du cas" className="dropzone-preview-img" />
                  <div className="dropzone-preview-actions">
                    <button
                      type="button"
                      className="btn btn-ghost btn-small"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Remplacer l’image
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-small"
                      onClick={() => updateField('image', '')}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="dropzone-empty">
                  <div className="dropzone-icon">🖼️</div>
                  <p>
                    <strong>Cliquez pour choisir une image</strong>, glissez-déposez un fichier, ou appuyez sur <code>Cmd+V</code>
                  </p>
                  <span>Compression automatique haute définition côté navigateur</span>
                </div>
              )}
            </div>
            {busyImg && <p className="form-help">Optimisation de l’image en cours…</p>}
          </div>

          {/* 2. Classification (Region, Modality, Difficulty) */}
          <div className="form-row-3">
            <div className="form-field">
              <label className="form-label">Région anatomique</label>
              <select
                className="select-input"
                value={form.region}
                onChange={(e) => updateField('region', e.target.value)}
              >
                {REGIONS.filter((r) => r.id !== 'all').map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">Modalité</label>
              <select
                className="select-input"
                value={form.modality}
                onChange={(e) => updateField('modality', e.target.value)}
              >
                {MODALITIES.filter((m) => m !== 'Toutes').map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">Difficulté</label>
              <select
                className="select-input"
                value={form.difficulty}
                onChange={(e) => updateField('difficulty', Number(e.target.value))}
              >
                <option value={1}>★☆☆ Classique (1)</option>
                <option value={2}>★★☆ Intermédiaire (2)</option>
                <option value={3}>★★★ Expert (3)</option>
              </select>
            </div>
          </div>

          {/* 3. Diagnosis & Synonyms */}
          <div className="form-field">
            <label className="form-label">
              2. Diagnostic principal attendu *
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Ex. Complexe de Buford, Rupture transfixiante du supra-épineux…"
              value={form.diagnosis}
              onChange={(e) => updateField('diagnosis', e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Synonymes & variantes acceptées{' '}
              <span className="form-label-hint">(séparés par des virgules)</span>
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Ex. Variante de Buford, Buford, LGHM en corde"
              value={form.synonymsText}
              onChange={(e) => updateField('synonymsText', e.target.value)}
            />
          </div>

          {/* Live Matcher Sandbox */}
          {form.diagnosis && (
            <div className="matcher-sandbox">
              <label className="form-label">
                Simulateur de validation souple (testez une réponse d’interne) :
              </label>
              <div className="matcher-sandbox-row">
                <input
                  type="text"
                  className="text-input"
                  placeholder="Tapez une variante ou une faute de frappe pour tester…"
                  value={testInput}
                  onChange={(e) => setTestInput(e.target.value)}
                />
                {testEvaluation && (
                  <span className={`sandbox-badge is-${testEvaluation.status}`}>
                    {testEvaluation.status === 'exact'
                      ? '✓ Accepté (Exact)'
                      : testEvaluation.status === 'partial'
                      ? '≈ Partiel'
                      : '✕ Refusé'}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 4. Clinical Context & Hint */}
          <div className="form-field">
            <label className="form-label">
              3. Contexte clinique & Question posée
            </label>
            <textarea
              rows={2}
              className="textarea-input"
              placeholder="Ex. Homme de 28 ans, instabilité antérieure d’épaule. Quel est votre diagnostic sur cette coupe axiale ?"
              value={form.clinicalContext}
              onChange={(e) => updateField('clinicalContext', e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Indice optionnel{' '}
              <span className="form-label-hint">(affiché si le joueur clique sur « Indice »)</span>
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Ex. Regardez le quadrant antéro-supérieur du labrum et l'épaisseur du LGHM…"
              value={form.hint}
              onChange={(e) => updateField('hint', e.target.value)}
            />
          </div>

          {/* 5. Key Signs & Detailed Explanation */}
          <div className="form-field">
            <label className="form-label">
              4. Signes radiologiques clés{' '}
              <span className="form-label-hint">(1 signe par ligne)</span>
            </label>
            <textarea
              rows={3}
              className="textarea-input"
              placeholder={
                'Absence de labrum antéro-supérieur\nLigament glénohuméral moyen épaissi en corde'
              }
              value={form.keySignsText}
              onChange={(e) => updateField('keySignsText', e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="form-label">5. Explication sémiologique complète</label>
            <textarea
              rows={4}
              className="textarea-input"
              placeholder="Explication détaillée affichée après la réponse…"
              value={form.explanation}
              onChange={(e) => updateField('explanation', e.target.value)}
            />
          </div>

          {/* 6. Optional Correction Image */}
          <div className="form-field">
            <label className="form-label">
              Schéma ou image annotée de correction{' '}
              <span className="form-label-hint">(optionnel)</span>
            </label>
            <div className="corr-upload-row">
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => corrFileInputRef.current?.click()}
              >
                {form.correctionImage ? 'Changer le schéma' : '+ Joindre une figure de correction'}
              </button>
              <input
                ref={corrFileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                style={{ display: 'none' }}
                onChange={(e) => handleCorrectionImageFile(e.target.files?.[0])}
              />
              {form.correctionImage && (
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  onClick={() => updateField('correctionImage', '')}
                >
                  Retirer
                </button>
              )}
            </div>
            {form.correctionImage && (
              <div className="corr-preview-mini">
                <img src={form.correctionImage} alt="Correction" />
                <input
                  type="text"
                  className="text-input"
                  placeholder="Légende de la figure de correction…"
                  value={form.correctionCaption}
                  onChange={(e) => updateField('correctionCaption', e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="studio-submit-bar">
            <button type="submit" className="btn btn-primary">
              💾 {form.id ? 'Enregistrer les modifications' : 'Créer ce cas d’imagerie'}
            </button>
            {form.id && (
              <button type="button" className="btn btn-ghost" onClick={handleNewBlank}>
                Annuler l’édition
              </button>
            )}
          </div>
        </form>

        {/* Right: Existing Cases Bank List */}
        <aside className="studio-bank-card">
          <div className="studio-bank-head">
            <h3>Banque de cas ({allCases.length})</h3>
            <input
              type="search"
              className="text-input"
              placeholder="Rechercher un diagnostic, une modalité…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="studio-bank-list">
            {filteredList.map((c, idx) => (
              <div
                key={c.id}
                className={`studio-bank-item ${form.id === c.id ? 'is-editing' : ''}`}
              >
                <img src={c.image} alt="" className="studio-bank-thumb" loading="lazy" />
                <div className="studio-bank-info">
                  <div className="studio-bank-meta">
                    <span>#{idx + 1}</span>
                    <span>·</span>
                    <span>{c.modality}</span>
                    {(c.isCustom || c.isEdited) && (
                      <span className="studio-custom-tag">
                        {c.isCustom ? 'Ajouté' : 'Modifié'}
                      </span>
                    )}
                  </div>
                  <strong className="studio-bank-diag">{c.diagnosis}</strong>
                </div>
                <div className="studio-bank-actions">
                  <button
                    type="button"
                    className="icon-action-btn"
                    onClick={() => onOpenCaseInQuiz && onOpenCaseInQuiz(c.id)}
                    title="Jouer ce cas"
                  >
                    ▶
                  </button>
                  <button
                    type="button"
                    className="icon-action-btn"
                    onClick={() => {
                      setForm(caseToForm(c));
                      setFeedback(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    title="Modifier ce cas"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    className="icon-action-btn is-danger"
                    onClick={() => handleDelete(c)}
                    title="Supprimer ce cas"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="studio-bank-footer">
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                if (
                  window.confirm(
                    'Réinitialiser la banque par défaut ? Vos modifications sur les cas d’origine seront restaurées.'
                  )
                ) {
                  resetAllCasesToDefault();
                  handleNewBlank();
                }
              }}
            >
              Restaurer les cas d’origine Quiz Cochin
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
