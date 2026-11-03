import { useEffect, useMemo, useRef, useState } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';
import { getAutocompleteSuggestions } from '../data/matcher.js';
import {
  compressImageFile,
  deleteCase,
  saveCase,
} from '../data/storage.js';

const EMPTY_FORM = {
  id: '',
  image: '',
  region: 'epaule',
  modality: 'IRM',
  diagnosis: '',
  clinicalContext: '',
};

function caseToForm(c) {
  if (!c) return { ...EMPTY_FORM };
  return {
    id: c.id || '',
    image: c.image || '',
    region: c.region || 'epaule',
    modality: c.modality || 'IRM',
    diagnosis: c.diagnosis || '',
    clinicalContext: c.clinicalContext || '',
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
  const [feedback, setFeedback] = useState(null);
  const [showManageList, setShowManageList] = useState(false);
  const [showDiagSuggestions, setShowDiagSuggestions] = useState(false);
  const [activeSugIdx, setActiveSugIdx] = useState(-1);

  const fileInputRef = useRef(null);
  const diagWrapRef = useRef(null);

  useEffect(() => {
    if (initialCaseToEdit) {
      setForm(caseToForm(initialCaseToEdit));
      setFeedback(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialCaseToEdit]);

  // Support Cmd+V / Ctrl+V paste of an image
  useEffect(() => {
    const onPaste = async (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            await handleImageFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (diagWrapRef.current && !diagWrapRef.current.contains(e.target)) {
        setShowDiagSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const diagSuggestions = useMemo(() => {
    if (!showDiagSuggestions) return [];
    return getAutocompleteSuggestions(form.diagnosis, allCases, 6);
  }, [form.diagnosis, showDiagSuggestions, allCases]);

  const updateField = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const handleImageFile = async (file) => {
    if (!file) return;
    setBusyImg(true);
    setFeedback(null);
    try {
      const dataUrl = await compressImageFile(file);
      updateField('image', dataUrl);
    } catch (err) {
      setFeedback({ type: 'err', msg: err.message });
    } finally {
      setBusyImg(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setFeedback(null);
    setShowDiagSuggestions(false);
    try {
      const existing = form.id ? allCases.find((c) => c.id === form.id) : null;
      const saved = saveCase({
        ...(existing || {}),
        id: form.id,
        image: form.image,
        region: form.region,
        modality: form.modality,
        diagnosis: form.diagnosis,
        clinicalContext: form.clinicalContext,
      });

      setForm({ ...EMPTY_FORM });
      if (onClearInitialEdit) onClearInitialEdit();
      setFeedback({
        type: 'ok',
        msg: `Question « ${saved.diagnosis} » enregistrée !`,
        savedId: saved.id,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setFeedback({ type: 'err', msg: err.message });
    }
  };

  const handleResetForm = () => {
    if (onClearInitialEdit) onClearInitialEdit();
    setForm({ ...EMPTY_FORM });
    setFeedback(null);
  };

  const handleDelete = (c) => {
    if (!window.confirm(`Supprimer « ${c.diagnosis} » ?`)) return;
    deleteCase(c.id);
    if (form.id === c.id) handleResetForm();
  };

  return (
    <div className="propose-simple-container">
      <div className="propose-head">
        <h1>{form.id ? 'Modifier la question' : 'Proposer une question'}</h1>
        <p>Ajoutez une image, choisissez la région et la modalité, et indiquez la réponse.</p>
      </div>

      {feedback && (
        <div className={`studio-alert is-${feedback.type}`}>
          <span>{feedback.type === 'ok' ? '✓' : '⚠'}</span>
          <span style={{ flex: 1 }}>{feedback.msg}</span>
          {feedback.type === 'ok' && feedback.savedId && onOpenCaseInQuiz && (
            <button
              type="button"
              className="btn btn-primary btn-small"
              onClick={() => onOpenCaseInQuiz(feedback.savedId)}
            >
              Voir la question →
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSave} className="propose-card" autoComplete="off">
        {/* 1. IMAGE */}
        <div className="propose-step">
          <label className="propose-label">1. Image *</label>

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
              if (file) await handleImageFile(file);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handleImageFile(e.target.files?.[0])}
            />

            {form.image ? (
              <div className="dropzone-preview-wrap" onClick={(e) => e.stopPropagation()}>
                <img src={form.image} alt="Aperçu" className="dropzone-preview-img" />
                <div className="dropzone-preview-actions">
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Changer l’image
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => updateField('image', '')}
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ) : (
              <div className="dropzone-empty">
                <div className="dropzone-icon">📷</div>
                <p>
                  <strong>Touchez pour ajouter une image</strong>
                </p>
                <span>Photothèque, fichier ou coller (Cmd+V)</span>
              </div>
            )}
          </div>
          {busyImg && <p className="form-help">Chargement de l’image…</p>}
        </div>

        {/* 2. RÉGION (Selectable Pills) */}
        <div className="propose-step">
          <label className="propose-label">2. Région anatomique</label>
          <div className="selectable-pills-grid">
            {REGIONS.filter((r) => r.id !== 'all').map((r) => {
              const active = form.region === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`select-pill-btn ${active ? 'is-selected' : ''}`}
                  onClick={() => updateField('region', r.id)}
                >
                  {r.logo && <img src={r.logo} alt="" className="select-pill-logo" />}
                  <span>{r.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. MODALITÉ (Selectable Pills) */}
        <div className="propose-step">
          <label className="propose-label">3. Modalité</label>
          <div className="selectable-pills-grid modality-pills-grid">
            {MODALITIES.filter((m) => m !== 'Toutes').map((mod) => {
              const active = form.modality === mod;
              return (
                <button
                  key={mod}
                  type="button"
                  className={`select-pill-btn ${active ? 'is-selected' : ''}`}
                  onClick={() => updateField('modality', mod)}
                >
                  <span>{mod}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. LA RÉPONSE (with Cotten Index Autocomplete) */}
        <div className="propose-step" ref={diagWrapRef}>
          <label htmlFor="propose-diag" className="propose-label">
            4. La réponse (Diagnostic) *{' '}
            <span className="propose-optional">(autocomplétion Cotten)</span>
          </label>
          <div className="autocomplete-wrap">
            <input
              id="propose-diag"
              type="text"
              className="text-input"
              placeholder="Ex. Rupture du supra-épineux, Maladie de Kienböck…"
              value={form.diagnosis}
              onChange={(e) => {
                updateField('diagnosis', e.target.value);
                setShowDiagSuggestions(true);
                setActiveSugIdx(-1);
              }}
              onFocus={() => setShowDiagSuggestions(true)}
              onKeyDown={(e) => {
                if (!diagSuggestions.length) return;
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setActiveSugIdx((idx) => (idx + 1) % diagSuggestions.length);
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setActiveSugIdx((idx) =>
                    idx <= 0 ? diagSuggestions.length - 1 : idx - 1
                  );
                } else if (e.key === 'Enter' && activeSugIdx >= 0) {
                  e.preventDefault();
                  updateField('diagnosis', diagSuggestions[activeSugIdx]);
                  setShowDiagSuggestions(false);
                } else if (e.key === 'Escape') {
                  setShowDiagSuggestions(false);
                }
              }}
              required
            />

            {diagSuggestions.length > 0 && (
              <ul className="autocomplete-list" role="listbox">
                {diagSuggestions.map((sug, i) => (
                  <li
                    key={sug}
                    role="option"
                    aria-selected={i === activeSugIdx}
                    className={`autocomplete-item ${i === activeSugIdx ? 'is-active' : ''}`}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      updateField('diagnosis', sug);
                      setShowDiagSuggestions(false);
                    }}
                  >
                    <span className="autocomplete-icon">⌕</span>
                    <span>{sug}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 5. ÉNONCÉ (Optionnel) */}
        <div className="propose-step">
          <label htmlFor="propose-context" className="propose-label">
            5. Énoncé <span className="propose-optional">(pas obligatoire)</span>
          </label>
          <input
            id="propose-context"
            type="text"
            className="text-input"
            placeholder="Ex. Douleur d’épaule après chute chez un patient de 45 ans…"
            value={form.clinicalContext}
            onChange={(e) => updateField('clinicalContext', e.target.value)}
          />
        </div>

        {/* SUBMIT */}
        <div className="propose-submit-row">
          {form.id && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleResetForm}
            >
              Annuler
            </button>
          )}
          <button
            type="submit"
            className="btn btn-primary propose-submit-btn"
            disabled={!form.image || !form.diagnosis.trim()}
          >
            ✓ {form.id ? 'Enregistrer les modifications' : 'Ajouter la question'}
          </button>
        </div>
      </form>

      {/* Collapsible Manage Existing Questions List */}
      <div className="propose-manage-section">
        <button
          type="button"
          className="btn btn-ghost btn-small propose-manage-toggle"
          onClick={() => setShowManageList((v) => !v)}
        >
          {showManageList
            ? '▲ Masquer les questions existantes'
            : `▼ Gérer les questions existantes (${allCases.length})`}
        </button>

        {showManageList && (
          <div className="studio-bank-list">
            {allCases.map((c, idx) => (
              <div key={c.id} className="studio-bank-item">
                <img src={c.image} alt="" className="studio-bank-thumb" loading="lazy" />
                <div className="studio-bank-info">
                  <div className="studio-bank-meta">
                    <span>#{idx + 1}</span>
                    <span>·</span>
                    <span>{c.modality}</span>
                  </div>
                  <strong className="studio-bank-diag">{c.diagnosis}</strong>
                </div>
                <div className="studio-bank-actions">
                  <button
                    type="button"
                    className="icon-action-btn"
                    onClick={() => {
                      setForm(caseToForm(c));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    title="Modifier"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    className="icon-action-btn is-danger"
                    onClick={() => handleDelete(c)}
                    title="Supprimer"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
