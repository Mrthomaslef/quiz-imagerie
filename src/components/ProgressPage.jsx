import { useMemo } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';
import { clearAllProgress, readPseudo } from '../data/storage.js';

export default function ProgressPage({
  allCases,
  progress,
  bookmarks,
  onOpenCaseInQuiz,
}) {
  const pseudo = readPseudo();

  const summary = useMemo(() => {
    let exact = 0;
    let partial = 0;
    let wrongOrRevealed = 0;

    for (const c of allCases) {
      const st = progress[c.id]?.status;
      if (st === 'exact') exact++;
      else if (st === 'partial') partial++;
      else if (st === 'wrong' || st === 'revealed') wrongOrRevealed++;
    }

    const attempted = exact + partial + wrongOrRevealed;
    const scorePoints = exact + partial * 0.5;
    const accuracy =
      attempted > 0 ? Math.round((scorePoints / attempted) * 100) : 0;

    return {
      total: allCases.length,
      attempted,
      exact,
      partial,
      wrongOrRevealed,
      accuracy,
    };
  }, [allCases, progress]);

  const byModality = useMemo(() => {
    return MODALITIES.filter((m) => m !== 'Toutes').map((mod) => {
      const list = allCases.filter((c) => c.modality === mod);
      const solved = list.filter(
        (c) =>
          progress[c.id]?.status === 'exact' ||
          progress[c.id]?.status === 'partial'
      ).length;
      return {
        modality: mod,
        total: list.length,
        solved,
        pct: list.length ? Math.round((solved / list.length) * 100) : 0,
      };
    });
  }, [allCases, progress]);

  const reviewCases = useMemo(() => {
    return allCases.filter((c) => {
      const st = progress[c.id]?.status;
      return st === 'wrong' || st === 'revealed' || st === 'partial';
    });
  }, [allCases, progress]);

  const favCases = useMemo(() => {
    return allCases.filter((c) => bookmarks.has(c.id));
  }, [allCases, bookmarks]);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <div>
          <span className="hero-eyebrow">Tableau de bord · {pseudo || 'Session locale'}</span>
          <h1>Ma progression en imagerie</h1>
          <p className="studio-sub">
            Suivez votre maîtrise diagnostique par modalité et retrouvez vos cas favoris ou à revoir.
          </p>
        </div>
        {summary.attempted > 0 && (
          <button
            type="button"
            className="btn btn-ghost btn-small"
            onClick={() => {
              if (window.confirm('Réinitialiser tout votre historique de réponses ?')) {
                clearAllProgress();
              }
            }}
          >
            ↺ Réinitialiser mes scores
          </button>
        )}
      </div>

      {/* KPI Cards */}
      <div className="progress-kpi-grid">
        <div className="kpi-card">
          <span className="kpi-val text-cyan">
            {summary.exact + summary.partial} / {summary.total}
          </span>
          <span className="kpi-lbl">Diagnostics validés</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-val text-good">{summary.exact}</span>
          <span className="kpi-lbl">Diagnostics exacts</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-val">{summary.accuracy}%</span>
          <span className="kpi-lbl">Taux de réussite</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-val text-amber">{favCases.length}</span>
          <span className="kpi-lbl">Cas favoris (★)</span>
        </div>
      </div>

      {/* Breakdown by Modality */}
      <section className="progress-block">
        <h2>Progression par modalité d’imagerie</h2>
        <div className="modality-bars-grid">
          {byModality.map((m) => (
            <div key={m.modality} className="modality-bar-card">
              <div className="modality-bar-head">
                <strong>{m.modality}</strong>
                <span>
                  {m.solved}/{m.total} cas ({m.pct}%)
                </span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases to Review */}
      <div className="progress-lists-grid">
        <section className="progress-block">
          <h2>Cas à revoir ({reviewCases.length})</h2>
          {reviewCases.length === 0 ? (
            <p className="muted-empty">Aucun cas en échec ou partiel pour le moment.</p>
          ) : (
            <div className="mini-case-list">
              {reviewCases.map((c) => {
                const regionObj = REGIONS.find((r) => r.id === c.region) || REGIONS[1];
                return (
                  <div
                    key={c.id}
                    className="mini-case-row"
                    onClick={() => onOpenCaseInQuiz(c.id)}
                  >
                    <img src={c.image} alt="" className="mini-case-thumb" />
                    <div className="mini-case-text">
                      <strong>{c.diagnosis}</strong>
                      <span>
                        {regionObj.shortTitle} · {c.modality}
                      </span>
                    </div>
                    <span className="btn btn-ghost btn-small">Rejouer →</span>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Bookmarked Cases */}
        <section className="progress-block">
          <h2>Mes cas favoris ★ ({favCases.length})</h2>
          {favCases.length === 0 ? (
            <p className="muted-empty">
              Cliquez sur « ☆ Favori » sur un cas d’imagerie pour l’épingler ici.
            </p>
          ) : (
            <div className="mini-case-list">
              {favCases.map((c) => {
                const regionObj = REGIONS.find((r) => r.id === c.region) || REGIONS[1];
                return (
                  <div
                    key={c.id}
                    className="mini-case-row"
                    onClick={() => onOpenCaseInQuiz(c.id)}
                  >
                    <img src={c.image} alt="" className="mini-case-thumb" />
                    <div className="mini-case-text">
                      <strong>{c.diagnosis}</strong>
                      <span>
                        {regionObj.shortTitle} · {c.modality}
                      </span>
                    </div>
                    <span className="btn btn-ghost btn-small">Ouvrir →</span>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
