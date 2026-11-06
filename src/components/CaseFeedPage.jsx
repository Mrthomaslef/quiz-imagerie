import { useMemo, useState } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';

export default function CaseFeedPage({
  allCases,
  progress,
  onStartQuiz,
}) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedModality, setSelectedModality] = useState('Toutes');

  const matchingCases = useMemo(() => {
    return allCases.filter((c) => {
      if (selectedRegion !== 'all' && c.region !== selectedRegion) return false;
      if (selectedModality !== 'Toutes' && c.modality !== selectedModality) return false;
      return true;
    });
  }, [allCases, selectedRegion, selectedModality]);

  const stats = useMemo(() => {
    let solved = 0;
    for (const c of matchingCases) {
      const st = progress[c.id]?.status;
      if (st === 'exact' || st === 'partial') solved++;
    }
    const pct = matchingCases.length > 0 ? Math.round((solved / matchingCases.length) * 100) : 0;
    return {
      total: matchingCases.length,
      solved,
      pct,
    };
  }, [matchingCases, progress]);

  const handleStart = () => {
    const pool = matchingCases.length > 0 ? matchingCases : allCases;
    if (!pool.length) return;
    const nextUnanswered = pool.find((c) => !progress[c.id]?.status) || pool[0];
    onStartQuiz(nextUnanswered.id, selectedModality, selectedRegion);
  };

  const handleRandom = () => {
    const pool = matchingCases.length > 0 ? matchingCases : allCases;
    if (!pool.length) return;
    const unanswered = pool.filter((c) => !progress[c.id]?.status);
    const list = unanswered.length > 0 ? unanswered : pool;
    const pick = list[Math.floor(Math.random() * list.length)];
    onStartQuiz(pick.id, selectedModality, selectedRegion);
  };

  return (
    <div className="home-mobile-screen">
      <section className="home-card">
        {/* Brand Header */}
        <div className="home-header-row">
          <div className="home-brand">
            <img src="./apple-touch-icon.png" alt="" className="home-logo" />
            <div>
              <span className="home-tag">QUIZ Imagerie Cochin</span>
              <h1 className="home-heading">1 Image · 1 Diagnostic</h1>
            </div>
          </div>
          <div className="home-counter-badge">
            <strong>{stats.solved}</strong>/{stats.total}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="home-bar-wrap">
          <div className="home-bar-track">
            <div className="home-bar-fill" style={{ width: `${stats.pct}%` }} />
          </div>
          <div className="home-bar-meta">
            <span>Progression : {stats.pct}%</span>
            <span>{stats.total} question{stats.total > 1 ? 's' : ''} disponible{stats.total > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Region Selection */}
        <div className="home-filter-block">
          <label className="home-filter-title">Région</label>
          <div className="home-chips-grid">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`home-chip-btn ${selectedRegion === r.id ? 'is-active' : ''}`}
                onClick={() => setSelectedRegion(r.id)}
              >
                {r.logo && <img src={r.logo} alt="" className="home-chip-icon" />}
                <span>{r.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modality Selection */}
        <div className="home-filter-block">
          <label className="home-filter-title">Modalité</label>
          <div className="home-modality-pills">
            {MODALITIES.map((mod) => (
              <button
                key={mod}
                type="button"
                className={`home-chip-btn ${selectedModality === mod ? 'is-active' : ''}`}
                onClick={() => setSelectedModality(mod)}
              >
                <span>{mod === 'Arthroscanner / TDM' ? 'Scanner / TDM' : mod}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Primary Actions */}
        <div className="home-actions-stack">
          <button
            type="button"
            className="btn btn-primary home-start-btn"
            onClick={handleStart}
            disabled={matchingCases.length === 0}
          >
            ▶ Lancer le Quiz ({matchingCases.length} cas)
          </button>

          <div className="home-secondary-row">
            <button
              type="button"
              className="btn btn-ghost home-sec-btn"
              onClick={handleRandom}
              disabled={matchingCases.length === 0}
            >
              🎲 Aléatoire
            </button>

            <a href="#/studio" className="btn btn-ghost home-sec-btn home-propose-btn">
              ➕ Proposer une question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
