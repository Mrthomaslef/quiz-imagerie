import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageViewer from './ImageViewer.jsx';
import { REGIONS, DIAGNOSIS_DICTIONARY } from '../data/cases.js';
import { evaluateDiagnosis, getAutocompleteSuggestions } from '../data/matcher.js';
import {
  readBookmarks,
  readProgress,
  saveCaseAttempt,
  toggleBookmark,
  clearCaseAttempt,
} from '../data/storage.js';

const DIFFICULTY_LABELS = {
  1: { label: 'Classique', stars: '★☆☆', cls: 'diff-1' },
  2: { label: 'Intermédiaire', stars: '★★☆', cls: 'diff-2' },
  3: { label: 'Expert', stars: '★★★', cls: 'diff-3' },
};

function buildQcmOptions(caseItem) {
  const correct = caseItem.diagnosis;
  const pool =
    Array.isArray(caseItem.distractors) && caseItem.distractors.length >= 3
      ? caseItem.distractors.slice(0, 3)
      : DIAGNOSIS_DICTIONARY.filter((d) => d !== correct).slice(0, 3);

  const items = [correct, ...pool];
  // Deterministic shuffle based on case id
  let seed = 0;
  for (let i = 0; i < caseItem.id.length; i++) {
    seed = (seed * 31 + caseItem.id.charCodeAt(i)) >>> 0;
  }
  for (let i = items.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

export default function CaseQuizPlayer({
  caseItem,
  allCases,
  caseIndex,
  totalCases,
  onPrev,
  onNext,
  onEditCase,
}) {
  const [inputVal, setInputVal] = useState('');
  const [activeSuggestionIdx, setActiveSuggestionIdx] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [qcmMode, setQcmMode] = useState(false);
  const [result, setResult] = useState(null); // { status: 'exact'|'partial'|'wrong'|'revealed', title, detail, userAnswer }
  const [showCorrection, setShowCorrection] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [corrLightbox, setCorrLightbox] = useState(false);

  const inputRef = useRef(null);
  const suggestionsWrapRef = useRef(null);

  // Sync state when caseItem changes
  useEffect(() => {
    if (!caseItem) return;
    const prog = readProgress()[caseItem.id];
    const bms = readBookmarks();
    setBookmarked(bms.has(caseItem.id));
    setShowHint(false);
    setQcmMode(false);
    setActiveSuggestionIdx(-1);
    setShowSuggestions(false);
    setCorrLightbox(false);

    if (prog && prog.status) {
      setInputVal(prog.userAnswer || '');
      if (prog.status === 'revealed') {
        setResult({
          status: 'revealed',
          title: 'Diagnostic révélé',
          detail: `Diagnostic attendu : « ${caseItem.diagnosis} »`,
          userAnswer: '',
        });
      } else {
        const evalRes = evaluateDiagnosis(prog.userAnswer || caseItem.diagnosis, caseItem);
        setResult({
          ...evalRes,
          status: prog.status,
          userAnswer: prog.userAnswer || '',
        });
      }
      setShowCorrection(true);
    } else {
      setInputVal('');
      setResult(null);
      setShowCorrection(false);
    }
  }, [caseItem]);

  const suggestions = useMemo(() => {
    if (!showSuggestions || showCorrection) return [];
    return getAutocompleteSuggestions(inputVal, allCases, 6);
  }, [inputVal, showSuggestions, showCorrection, allCases]);

  const qcmOptions = useMemo(() => {
    if (!caseItem) return [];
    return buildQcmOptions(caseItem);
  }, [caseItem]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (suggestionsWrapRef.current && !suggestionsWrapRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  if (!caseItem) return null;

  const regionObj = REGIONS.find((r) => r.id === caseItem.region) || REGIONS[1];
  const diffObj = DIFFICULTY_LABELS[caseItem.difficulty] || DIFFICULTY_LABELS[2];

  const submitAnswer = (rawText) => {
    const clean = String(rawText ?? inputVal).trim();
    if (!clean) return;
    setShowSuggestions(false);
    const evalRes = evaluateDiagnosis(clean, caseItem);
    setResult({ ...evalRes, userAnswer: clean });
    saveCaseAttempt(caseItem.id, {
      status: evalRes.status,
      score: evalRes.score,
      userAnswer: clean,
    });
    if (evalRes.status === 'exact') {
      setShowCorrection(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (activeSuggestionIdx >= 0 && suggestions[activeSuggestionIdx]) {
      const picked = suggestions[activeSuggestionIdx];
      setInputVal(picked);
      setActiveSuggestionIdx(-1);
      submitAnswer(picked);
      return;
    }
    submitAnswer(inputVal);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIdx((idx) => (idx + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIdx((idx) => (idx <= 0 ? suggestions.length - 1 : idx - 1));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestionIdx(-1);
    }
  };

  const handleRevealDiagnosis = () => {
    setShowSuggestions(false);
    setResult({
      status: 'revealed',
      score: 0,
      title: 'Correction affichée',
      detail: `Diagnostic attendu : « ${caseItem.diagnosis} »`,
      userAnswer: inputVal,
    });
    saveCaseAttempt(caseItem.id, {
      status: 'revealed',
      score: 0,
      userAnswer: inputVal,
    });
    setShowCorrection(true);
  };

  const handleResetCurrentCase = () => {
    clearCaseAttempt(caseItem.id);
    setInputVal('');
    setResult(null);
    setShowCorrection(false);
    setShowHint(false);
    setQcmMode(false);
    setTimeout(() => inputRef.current?.focus(), 60);
  };

  const handleToggleBookmark = () => {
    const next = toggleBookmark(caseItem.id);
    setBookmarked(next);
  };

  return (
    <motion.section
      key={caseItem.id}
      className="case-player-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Top Meta Bar */}
      <div className="case-meta-bar">
        <div className="case-meta-left">
          <span className="case-index-badge">
            Cas {caseIndex + 1}/{totalCases}
          </span>
          <span className="case-region-chip">
            {regionObj.logo && <img src={regionObj.logo} alt="" className="chip-region-icon" />}
            {regionObj.shortTitle}
          </span>
          <span className="case-modality-chip">{caseItem.modality}</span>
          <span className={`case-diff-chip ${diffObj.cls}`} title={`Niveau : ${diffObj.label}`}>
            {diffObj.stars} <span className="hide-xs">{diffObj.label}</span>
          </span>
        </div>

        <div className="case-meta-right">
          <button
            type="button"
            className={`icon-action-btn ${bookmarked ? 'is-bookmarked' : ''}`}
            onClick={handleToggleBookmark}
            title={bookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            {bookmarked ? '★ Favori' : '☆ Favori'}
          </button>
          {onEditCase && (
            <button
              type="button"
              className="icon-action-btn"
              onClick={() => onEditCase(caseItem)}
              title="Modifier ce cas dans le Studio"
            >
              ✏️ Éditer
            </button>
          )}
        </div>
      </div>

      {/* Main Split or Stacked Layout: Image on Left/Top, Quiz Interaction on Right/Bottom */}
      <div className="case-player-grid">
        {/* Left column: Radiology Image Viewer */}
        <div className="case-image-col">
          <ImageViewer
            src={caseItem.image}
            alt={caseItem.clinicalContext || 'Imagerie du cas'}
            badgeText={caseItem.modality}
          />
        </div>

        {/* Right column: Clinical Context + Free Diagnosis Input + Correction */}
        <div className="case-interaction-col">
          <div className="clinical-context-box">
            <div className="clinical-context-label">Contexte clinique & Question</div>
            <p className="clinical-context-text">{caseItem.clinicalContext}</p>
          </div>

          {/* Hint Box if toggled */}
          <AnimatePresence>
            {showHint && caseItem.hint && (
              <motion.div
                className="hint-banner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <strong>💡 Indice sémiologique :</strong> {caseItem.hint}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Diagnosis Input or QCM Helper */}
          {!showCorrection && (
            <div className="diagnosis-input-section" ref={suggestionsWrapRef}>
              {!qcmMode ? (
                <form onSubmit={handleFormSubmit} className="diagnosis-form" autoComplete="off">
                  <label htmlFor="diag-input" className="diagnosis-label">
                    Quel est votre diagnostic ?
                    <span className="diagnosis-label-sub">
                      Saisie libre (synonymes & mots-clés acceptés) ou autocomplétion
                    </span>
                  </label>

                  <div className="diagnosis-input-row">
                    <div className="autocomplete-wrap">
                      <input
                        id="diag-input"
                        ref={inputRef}
                        type="text"
                        className="diagnosis-text-input"
                        placeholder="Ex. Complexe de Buford, Rupture du supra-épineux…"
                        value={inputVal}
                        onChange={(e) => {
                          setInputVal(e.target.value);
                          setShowSuggestions(true);
                          setActiveSuggestionIdx(-1);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onKeyDown={handleKeyDown}
                      />

                      {suggestions.length > 0 && (
                        <ul className="autocomplete-list" role="listbox">
                          {suggestions.map((sug, i) => (
                            <li
                              key={sug}
                              role="option"
                              aria-selected={i === activeSuggestionIdx}
                              className={`autocomplete-item ${
                                i === activeSuggestionIdx ? 'is-active' : ''
                              }`}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setInputVal(sug);
                                setShowSuggestions(false);
                                submitAnswer(sug);
                              }}
                            >
                              <span className="autocomplete-icon">⌕</span>
                              <span>{sug}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary diagnosis-submit-btn"
                      disabled={!inputVal.trim()}
                    >
                      Valider
                    </button>
                  </div>
                </form>
              ) : (
                <div className="qcm-helper-box">
                  <div className="qcm-helper-head">
                    <span>🎯 Mode QCM (4 propositions)</span>
                    <button
                      type="button"
                      className="link-btn"
                      onClick={() => setQcmMode(false)}
                    >
                      Revenir à la saisie libre
                    </button>
                  </div>
                  <div className="qcm-options-grid">
                    {qcmOptions.map((opt, idx) => (
                      <button
                        key={opt}
                        type="button"
                        className="qcm-option-btn"
                        onClick={() => {
                          setInputVal(opt);
                          submitAnswer(opt);
                        }}
                      >
                        <span className="qcm-letter">{String.fromCharCode(65 + idx)}</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Intermediate feedback if partial or wrong before revealing full correction */}
              {result && (result.status === 'partial' || result.status === 'wrong') && (
                <div className={`attempt-feedback-box is-${result.status}`}>
                  <div className="attempt-feedback-head">
                    <strong>
                      {result.status === 'partial' ? '🟠 ' : '🔴 '}
                      {result.title}
                    </strong>
                    <span>Votre réponse : « {result.userAnswer} »</span>
                  </div>
                  <p className="attempt-feedback-detail">
                    {result.status === 'partial'
                      ? 'Vous avez identifié une partie du diagnostic ! Vous pouvez affiner votre réponse ci-dessus ou afficher directement la correction complète.'
                      : 'Ce n’est pas le diagnostic attendu. Essayez une autre hypothèse, utilisez un indice, ou affichez la correction.'}
                  </p>
                  <div className="attempt-feedback-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-small"
                      onClick={() => setShowCorrection(true)}
                    >
                      Voir la réponse & l’explication →
                    </button>
                  </div>
                </div>
              )}

              {/* Helper Tools Row */}
              <div className="quiz-helper-bar">
                {caseItem.hint && (
                  <button
                    type="button"
                    className={`helper-pill-btn ${showHint ? 'is-active' : ''}`}
                    onClick={() => setShowHint((v) => !v)}
                  >
                    💡 {showHint ? 'Masquer l’indice' : 'Indice'}
                  </button>
                )}
                <button
                  type="button"
                  className={`helper-pill-btn ${qcmMode ? 'is-active' : ''}`}
                  onClick={() => setQcmMode((v) => !v)}
                >
                  🎯 {qcmMode ? 'Saisie libre' : 'Aide 4 choix'}
                </button>
                <button
                  type="button"
                  className="helper-pill-btn helper-reveal-btn"
                  onClick={handleRevealDiagnosis}
                >
                  👁️ Voir la réponse
                </button>
              </div>
            </div>
          )}

          {/* Full Correction & Semiological Explanation Panel */}
          {showCorrection && (
            <motion.div
              className="correction-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`correction-status-banner is-${result?.status || 'revealed'}`}>
                <div className="correction-status-icon">
                  {result?.status === 'exact'
                    ? '✓'
                    : result?.status === 'partial'
                    ? '≈'
                    : 'ℹ'}
                </div>
                <div className="correction-status-body">
                  <div className="correction-status-tag">
                    {result?.status === 'exact'
                      ? 'Diagnostic exact'
                      : result?.status === 'partial'
                      ? 'Diagnostic partiellement validé'
                      : 'Correction du cas'}
                  </div>
                  <h3 className="correction-diagnosis-title">{caseItem.diagnosis}</h3>
                  {result?.userAnswer && (
                    <p className="correction-user-answer">
                      Votre saisie : <span>« {result.userAnswer} »</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Key Semiological Signs */}
              {Array.isArray(caseItem.keySigns) && caseItem.keySigns.length > 0 && (
                <div className="correction-signs-box">
                  <h4>Signes sémiologiques clés</h4>
                  <ul className="correction-signs-list">
                    {caseItem.keySigns.map((sign, i) => (
                      <li key={i}>{sign}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Explanation */}
              {caseItem.explanation && (
                <div className="correction-explanation-box">
                  <h4>Explication & Points d’enseignement</h4>
                  <p>{caseItem.explanation}</p>
                </div>
              )}

              {/* Optional Correction Figure / Schema */}
              {caseItem.correctionImage && (
                <div className="correction-figure-box">
                  <div className="correction-figure-head">
                    <span>Schéma / Imagerie complémentaire</span>
                    <button
                      type="button"
                      className="link-btn"
                      onClick={() => setCorrLightbox(true)}
                    >
                      Agrandir ⛶
                    </button>
                  </div>
                  <img
                    src={caseItem.correctionImage}
                    alt={caseItem.correctionCaption || 'Figure de correction'}
                    className="correction-figure-img"
                    onClick={() => setCorrLightbox(true)}
                  />
                  {caseItem.correctionCaption && (
                    <p className="correction-figure-caption">{caseItem.correctionCaption}</p>
                  )}
                </div>
              )}

              {/* Accepted Synonyms Info */}
              {Array.isArray(caseItem.synonyms) && caseItem.synonyms.length > 1 && (
                <div className="correction-synonyms-line">
                  <span>Termes acceptés :</span>{' '}
                  {caseItem.synonyms.join(' · ')}
                </div>
              )}

              {/* Footer Navigation inside Correction */}
              <div className="correction-nav-actions">
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  onClick={handleResetCurrentCase}
                >
                  ↺ Refaire ce cas
                </button>
                <div className="correction-nav-right">
                  {onPrev && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-small"
                      onClick={onPrev}
                    >
                      ← Précédent
                    </button>
                  )}
                  {onNext && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={onNext}
                    >
                      Cas suivant →
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Case Switcher Strip */}
      <div className="case-QuickNav-footer">
        <button
          type="button"
          className="btn btn-ghost btn-small"
          onClick={onPrev}
          disabled={!onPrev}
        >
          ← Cas précédent
        </button>
        <span className="case-quicknav-center">
          {caseItem.id.toUpperCase()} · {regionObj.shortTitle} · {caseItem.modality}
        </span>
        <button
          type="button"
          className="btn btn-ghost btn-small"
          onClick={onNext}
          disabled={!onNext}
        >
          Cas suivant →
        </button>
      </div>

      {/* Lightbox for Correction Figure */}
      {corrLightbox && caseItem.correctionImage && (
        <div
          className="pacs-lightbox-backdrop"
          onClick={() => setCorrLightbox(false)}
        >
          <div className="pacs-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="corr-lightbox-card">
              <img
                src={caseItem.correctionImage}
                alt={caseItem.correctionCaption || 'Figure de correction'}
                className="corr-lightbox-img"
              />
              {caseItem.correctionCaption && (
                <p className="corr-lightbox-caption">{caseItem.correctionCaption}</p>
              )}
              <button
                type="button"
                className="btn btn-primary btn-small"
                onClick={() => setCorrLightbox(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
