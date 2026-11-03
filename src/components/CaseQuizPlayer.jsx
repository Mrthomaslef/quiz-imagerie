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

function buildQcmOptions(caseItem) {
  const correct = caseItem.diagnosis;
  const pool =
    Array.isArray(caseItem.distractors) && caseItem.distractors.length >= 3
      ? caseItem.distractors.slice(0, 3)
      : DIAGNOSIS_DICTIONARY.filter((d) => d !== correct).slice(0, 3);

  const items = [correct, ...pool];
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
  onBackHome,
  onEditCase,
  activeFilterLabel,
}) {
  const [inputVal, setInputVal] = useState('');
  const [activeSuggestionIdx, setActiveSuggestionIdx] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [qcmMode, setQcmMode] = useState(false);
  const [result, setResult] = useState(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [corrLightbox, setCorrLightbox] = useState(false);

  const inputRef = useRef(null);
  const suggestionsWrapRef = useRef(null);
  const correctionRef = useRef(null);

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
    return getAutocompleteSuggestions(inputVal, allCases, 5);
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
  const progressPct = totalCases > 0 ? Math.round(((caseIndex + 1) / totalCases) * 100) : 100;

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

  const goNext = () => {
    if (!onNext) return;
    onNext();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goPrev = () => {
    if (!onPrev) return;
    onPrev();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      key={caseItem.id}
      className="single-question-page"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top Question Header Bar */}
      <div className="question-top-bar">
        <button
          type="button"
          className="back-home-btn"
          onClick={onBackHome}
        >
          ← Accueil
        </button>

        <div className="question-progress-center">
          <div className="question-progress-label">
            <strong>
              Question {caseIndex + 1} / {totalCases}
            </strong>
            {activeFilterLabel && <span>· {activeFilterLabel}</span>}
          </div>
          <div className="question-progress-track">
            <div
              className="question-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="question-top-actions">
          <button
            type="button"
            className={`fav-icon-btn ${bookmarked ? 'is-bookmarked' : ''}`}
            onClick={handleToggleBookmark}
            title={bookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            {bookmarked ? '★' : '☆'}
          </button>
          {onEditCase && (
            <button
              type="button"
              className="fav-icon-btn"
              onClick={() => onEditCase(caseItem)}
              title="Modifier ce cas"
            >
              ✏️
            </button>
          )}
        </div>
      </div>

      {/* Main Question Card */}
      <section className="case-player-card">
        {/* Badges Row */}
        <div className="question-badges-row">
          <span className="case-region-chip">
            {regionObj.logo && <img src={regionObj.logo} alt="" className="chip-region-icon" />}
            {regionObj.shortTitle}
          </span>
          <span className="case-modality-chip">{caseItem.modality}</span>
        </div>

        <div className="case-player-grid">
          {/* 1. Radiology Image */}
          <div className="case-image-col">
            <ImageViewer
              src={caseItem.image}
              alt={caseItem.clinicalContext || 'Imagerie du cas'}
              badgeText={caseItem.modality}
            />
          </div>

          {/* 2. Clinical Prompt (optional) + Answer Input / Correction */}
          <div className="case-interaction-col">
            {caseItem.clinicalContext && (
              <div className="clinical-context-box">
                <div className="clinical-context-label">Énoncé</div>
                <p className="clinical-context-text">{caseItem.clinicalContext}</p>
              </div>
            )}

            <AnimatePresence>
              {showHint && caseItem.hint && (
                <motion.div
                  className="hint-banner"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <strong>💡 Indice :</strong> {caseItem.hint}
                </motion.div>
              )}
            </AnimatePresence>

            {!showCorrection ? (
              <div className="diagnosis-input-section" ref={suggestionsWrapRef}>
                {!qcmMode ? (
                  <form onSubmit={handleFormSubmit} className="diagnosis-form" autoComplete="off">
                    <label htmlFor="diag-input" className="diagnosis-label">
                      Votre diagnostic :
                    </label>

                    <div className="diagnosis-input-row">
                      <div className="autocomplete-wrap">
                        <input
                          id="diag-input"
                          ref={inputRef}
                          type="text"
                          className="diagnosis-text-input"
                          placeholder="Tapez le diagnostic (ex. Buford, Rupture coiffe…)"
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
                      <span>🎯 Choisissez parmi les 4 propositions</span>
                      <button
                        type="button"
                        className="link-btn"
                        onClick={() => setQcmMode(false)}
                      >
                        Saisie libre
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

                {/* Feedback when partial or wrong */}
                {result && (result.status === 'partial' || result.status === 'wrong') && (
                  <div className={`attempt-feedback-box is-${result.status}`}>
                    <div className="attempt-feedback-head">
                      <strong>
                        {result.status === 'partial' ? '🟠 ' : '🔴 '}
                        {result.title}
                      </strong>
                      <span>« {result.userAnswer} »</span>
                    </div>
                    <p className="attempt-feedback-detail">
                      {result.status === 'partial'
                        ? 'Vous êtes très proche ! Précisez votre réponse ou affichez la correction.'
                        : 'Essayez une autre hypothèse, utilisez l’aide 4 choix, ou affichez la réponse.'}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-small"
                      onClick={() => setShowCorrection(true)}
                    >
                      Afficher la réponse complète →
                    </button>
                  </div>
                )}

                {/* Helper Buttons */}
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
                    🎯 {qcmMode ? 'Mode texte' : 'Aide 4 choix'}
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
            ) : (
              /* Correction Panel */
              <motion.div
                ref={correctionRef}
                className="correction-panel"
                initial={{ opacity: 0, y: 6 }}
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
                        : 'Diagnostic attendu'}
                    </div>
                    <h3 className="correction-diagnosis-title">{caseItem.diagnosis}</h3>
                    {result?.userAnswer && (
                      <p className="correction-user-answer">
                        Votre réponse : <span>« {result.userAnswer} »</span>
                      </p>
                    )}
                  </div>
                </div>

                {Array.isArray(caseItem.keySigns) && caseItem.keySigns.length > 0 && (
                  <div className="correction-signs-box">
                    <h4>Signes clés à retenir</h4>
                    <ul className="correction-signs-list">
                      {caseItem.keySigns.map((sign, i) => (
                        <li key={i}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {caseItem.explanation && (
                  <div className="correction-explanation-box">
                    <h4>Explication</h4>
                    <p>{caseItem.explanation}</p>
                  </div>
                )}

                {caseItem.correctionImage && (
                  <div className="correction-figure-box">
                    <div className="correction-figure-head">
                      <span>Schéma / Figure de correction</span>
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

                <div className="correction-retry-row">
                  <button
                    type="button"
                    className="link-btn"
                    onClick={handleResetCurrentCase}
                  >
                    ↺ Refaire cette question
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Prominent Bottom Navigation Bar ("Suivant en bas") */}
        <div className="question-bottom-action-bar">
          <button
            type="button"
            className="btn btn-ghost question-prev-btn"
            onClick={goPrev}
            disabled={!onPrev}
          >
            ← Précédent
          </button>

          <button
            type="button"
            className="btn btn-primary question-next-btn"
            onClick={goNext}
            disabled={!onNext}
          >
            <span>Question suivante</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

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
    </motion.div>
  );
}
