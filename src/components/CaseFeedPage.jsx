import { useMemo, useState } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';

const MODALITY_ICONS = {
  Radiographie: '🦴',
  IRM: '🧲',
  'Arthroscanner / TDM': '💿',
  Échographie: '📡',
};

export default function CaseFeedPage({
  allCases,
  progress,
  bookmarks,
  onStartQuiz,
  onStartRandom,
}) {
  const [modalityFilter, setModalityFilter] = useState('Toutes');

  const stats = useMemo(() => {
    let solved = 0;
    let attempted = 0;
    for (const c of allCases) {
      const st = progress[c.id]?.status;
      if (st) {
        attempted++;
        if (st === 'exact' || st === 'partial') solved++;
      }
    }
    const pct = allCases.length > 0 ? Math.round((solved / allCases.length) * 100) : 0;
    return {
      total: allCases.length,
      solved,
      attempted,
      todo: Math.max(0, allCases.length - attempted),
      pct,
    };
  }, [allCases, progress]);

  const filteredCases = useMemo(() => {
    if (modalityFilter === 'Toutes') return allCases;
    return allCases.filter((c) => c.modality === modalityFilter);
  }, [allCases, modalityFilter]);

  const handleContinueQuiz = () => {
    const nextUnanswered = allCases.find((c) => !progress[c.id]?.status);
    const target = nextUnanswered || allCases[0];
    if (target) {
      onStartQuiz(target.id, 'Toutes');
    }
  };

  const handleLaunchModality = (mod) => {
    const pool = mod === 'Toutes' ? allCases : allCases.filter((c) => c.modality === mod);
    if (!pool.length) return;
    const nextUnanswered = pool.find((c) => !progress[c.id]?.status) || pool[0];
    onStartQuiz(nextUnanswered.id, mod);
  };

  return (
    <div className="home-clean-container">
      {/* 1. Clean Hero Card */}
      <section className="home-hero-card">
        <div className="home-hero-top">
          <div className="home-brand-badge">
            <img src="./apple-touch-icon.png" alt="" className="home-hero-logo" />
            <div>
              <span className="home-eyebrow">QUIZ Imagerie Cochin</span>
              <h1 className="home-title">1 Image, 1 Diagnostic</h1>
            </div>
          </div>
          <span className="home-score-pill">
            {stats.solved} / {stats.total} validés
          </span>
        </div>

        <p className="home-lead">
          Observez le cliché radiologique, saisissez votre diagnostic (avec autocomplétion) et passez à la question suivante.
        </p>

        {/* Progress Bar */}
        <div className="home-progress-wrap">
          <div className="home-progress-track">
            <div className="home-progress-fill" style={{ width: `${stats.pct}%` }} />
          </div>
          <div className="home-progress-labels">
            <span>{stats.pct}% complété</span>
            <span>{stats.todo} restant{stats.todo > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Big Mobile-Friendly Primary CTA Buttons */}
        <div className="home-cta-group">
          <button
            type="button"
            className="btn btn-primary home-main-cta"
            onClick={handleContinueQuiz}
          >
            <span>▶ {stats.attempted > 0 ? 'Continuer le Quiz' : 'Commencer le Quiz'}</span>
          </button>
          <button
            type="button"
            className="btn btn-ghost home-secondary-cta"
            onClick={onStartRandom}
          >
            🎲 Question au hasard
          </button>
        </div>
      </section>

      {/* 2. Quick Launch by Modality (2x2 Grid on Mobile) */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Lancer par modalité</h2>
          <span>1 page par question</span>
        </div>

        <div className="home-modality-grid">
          {MODALITIES.filter((m) => m !== 'Toutes').map((mod) => {
            const list = allCases.filter((c) => c.modality === mod);
            const done = list.filter(
              (c) =>
                progress[c.id]?.status === 'exact' ||
                progress[c.id]?.status === 'partial'
            ).length;
            return (
              <button
                key={mod}
                type="button"
                className="home-modality-card"
                onClick={() => handleLaunchModality(mod)}
              >
                <div className="home-modality-icon">{MODALITY_ICONS[mod] || '🩻'}</div>
                <div className="home-modality-info">
                  <strong>{mod}</strong>
                  <span>
                    {done}/{list.length} cas
                  </span>
                </div>
                <span className="home-modality-arrow">→</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Clean List of Questions */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Toutes les questions ({filteredCases.length})</h2>
          <div className="home-mini-filters">
            {MODALITIES.map((mod) => (
              <button
                key={mod}
                type="button"
                className={`home-mini-chip ${modalityFilter === mod ? 'is-active' : ''}`}
                onClick={() => setModalityFilter(mod)}
              >
                {mod === 'Arthroscanner / TDM' ? 'TDM' : mod}
              </button>
            ))}
          </div>
        </div>

        <div className="home-questions-list">
          {filteredCases.map((c, idx) => {
            const p = progress[c.id];
            const isSolved = p?.status === 'exact' || p?.status === 'partial';
            const isReviewed = p?.status === 'wrong' || p?.status === 'revealed';
            const regionObj = REGIONS.find((r) => r.id === c.region) || REGIONS[1];

            return (
              <button
                key={c.id}
                type="button"
                className={`home-question-row ${
                  isSolved ? 'is-solved' : isReviewed ? 'is-review' : ''
                }`}
                onClick={() => onStartQuiz(c.id, modalityFilter)}
              >
                <img
                  src={c.image}
                  alt=""
                  className="home-question-thumb"
                  loading="lazy"
                />

                <div className="home-question-body">
                  <div className="home-question-top">
                    <span className="home-question-num">
                      Question #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="home-question-mod">{c.modality}</span>
                    {bookmarks.has(c.id) && <span className="pill-star">★</span>}
                  </div>

                  <strong className="home-question-title">
                    {p?.status ? c.diagnosis : `${regionObj.shortTitle} — Cliquez pour diagnostiquer`}
                  </strong>
                </div>

                <div className="home-question-right">
                  {isSolved ? (
                    <span className="row-status-pill is-exact">✓ Validé</span>
                  ) : isReviewed ? (
                    <span className="row-status-pill is-review">À revoir</span>
                  ) : (
                    <span className="row-status-pill is-todo">Jouer →</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
