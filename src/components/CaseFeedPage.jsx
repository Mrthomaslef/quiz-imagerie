import { useMemo, useState } from 'react';
import { REGIONS, MODALITIES } from '../data/cases.js';
import CaseQuizPlayer from './CaseQuizPlayer.jsx';

export default function CaseFeedPage({
  allCases,
  progress,
  bookmarks,
  selectedCaseId,
  onSelectCaseId,
  onEditCase,
  defaultViewMode = 'split', // 'split' (filters + player + grid) or 'player-only'
}) {
  const [regionFilter, setRegionFilter] = useState('all');
  const [modalityFilter, setModalityFilter] = useState('Toutes');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'todo' | 'done' | 'review' | 'fav'
  const [viewMode, setViewMode] = useState(
    defaultViewMode === 'player-only' ? 'quiz' : 'both'
  ); // 'both' | 'quiz' | 'grid'

  const filteredCases = useMemo(() => {
    return allCases.filter((c) => {
      if (regionFilter !== 'all' && c.region !== regionFilter) return false;
      if (modalityFilter !== 'Toutes' && c.modality !== modalityFilter) return false;

      const p = progress[c.id];
      if (statusFilter === 'todo' && p?.status) return false;
      if (
        statusFilter === 'done' &&
        p?.status !== 'exact' &&
        p?.status !== 'partial'
      ) {
        return false;
      }
      if (
        statusFilter === 'review' &&
        p?.status !== 'wrong' &&
        p?.status !== 'revealed' &&
        p?.status !== 'partial'
      ) {
        return false;
      }
      if (statusFilter === 'fav' && !bookmarks.has(c.id)) return false;

      return true;
    });
  }, [allCases, regionFilter, modalityFilter, statusFilter, progress, bookmarks]);

  const currentIdx = useMemo(() => {
    if (!filteredCases.length) return -1;
    const found = filteredCases.findIndex((c) => c.id === selectedCaseId);
    return found >= 0 ? found : 0;
  }, [filteredCases, selectedCaseId]);

  const activeCase = currentIdx >= 0 ? filteredCases[currentIdx] : null;

  const stats = useMemo(() => {
    let exact = 0;
    let partial = 0;
    let attempted = 0;
    for (const c of allCases) {
      const st = progress[c.id]?.status;
      if (st) {
        attempted++;
        if (st === 'exact') exact++;
        else if (st === 'partial') partial++;
      }
    }
    return {
      total: allCases.length,
      attempted,
      exact,
      partial,
      todo: Math.max(0, allCases.length - attempted),
    };
  }, [allCases, progress]);

  const handlePrev =
    currentIdx > 0
      ? () => onSelectCaseId(filteredCases[currentIdx - 1].id)
      : null;

  const handleNext =
    currentIdx >= 0 && currentIdx < filteredCases.length - 1
      ? () => onSelectCaseId(filteredCases[currentIdx + 1].id)
      : filteredCases.length > 1
      ? () => onSelectCaseId(filteredCases[0].id)
      : null;

  const handleDrawUnanswered = () => {
    const pool = filteredCases.filter((c) => !progress[c.id]?.status);
    const list = pool.length > 0 ? pool : filteredCases;
    if (!list.length) return;
    const pick = list[Math.floor(Math.random() * list.length)];
    onSelectCaseId(pick.id);
  };

  return (
    <div className="feed-container">
      {/* Compact Hero / Dashboard Bar */}
      <section className="hero-banner">
        <div className="hero-banner-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Entraînement Radiologique · Architecture Quiz Cochin
          </div>
          <h1 className="hero-title">
            Une image, <span className="text-gradient">un diagnostic.</span>
          </h1>
          <p className="hero-subtitle">
            Analysez le cliché, saisissez votre diagnostic en texte libre (avec autocomplétion et validation souple) et accédez immédiatement aux clés sémiologiques.
          </p>
        </div>

        <div className="hero-stats-card">
          <div className="hero-stat-item">
            <span className="hero-stat-val text-cyan">{stats.exact + stats.partial}</span>
            <span className="hero-stat-lbl">Résolus</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-val">{stats.todo}</span>
            <span className="hero-stat-lbl">À faire</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-val">{stats.total}</span>
            <span className="hero-stat-lbl">Cas</span>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-small hero-random-cta"
            onClick={handleDrawUnanswered}
          >
            ▶ Cas non fait au hasard
          </button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-panel" aria-label="Filtres de cas d'imagerie">
        {/* Region filter strip */}
        <div className="filter-group">
          <span className="filter-group-label">Région</span>
          <div className="filter-chips-scroll">
            {REGIONS.map((r) => {
              const count =
                r.id === 'all'
                  ? allCases.length
                  : allCases.filter((c) => c.region === r.id).length;
              if (r.id !== 'all' && count === 0) return null;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`filter-chip ${regionFilter === r.id ? 'is-active' : ''}`}
                  onClick={() => setRegionFilter(r.id)}
                >
                  {r.logo && <img src={r.logo} alt="" className="filter-chip-logo" />}
                  <span>{r.shortTitle}</span>
                  <span className="filter-chip-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modality & Status & View Mode row */}
        <div className="filter-subrow">
          <div className="filter-group">
            <span className="filter-group-label">Modalité</span>
            <div className="filter-chips-wrap">
              {MODALITIES.map((mod) => (
                <button
                  key={mod}
                  type="button"
                  className={`filter-chip filter-chip-sm ${
                    modalityFilter === mod ? 'is-active' : ''
                  }`}
                  onClick={() => setModalityFilter(mod)}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-group-label">Statut</span>
            <div className="filter-chips-wrap">
              {[
                { id: 'all', label: 'Tous' },
                { id: 'todo', label: 'À faire' },
                { id: 'done', label: '✓ Réussis' },
                { id: 'review', label: '↺ À revoir' },
                { id: 'fav', label: '★ Favoris' },
              ].map((st) => (
                <button
                  key={st.id}
                  type="button"
                  className={`filter-chip filter-chip-sm ${
                    statusFilter === st.id ? 'is-active' : ''
                  }`}
                  onClick={() => setStatusFilter(st.id)}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          <div className="view-toggle-group">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'both' ? 'is-active' : ''}`}
              onClick={() => setViewMode('both')}
              title="Afficher le lecteur de cas et la galerie"
            >
              Mixte
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'quiz' ? 'is-active' : ''}`}
              onClick={() => setViewMode('quiz')}
              title="Focus sur le quiz actif"
            >
              Focus Quiz
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Galerie d'images uniquement"
            >
              Galerie ({filteredCases.length})
            </button>
          </div>
        </div>
      </section>

      {/* Numbered Case Strip for Instant Navigation */}
      {filteredCases.length > 0 && viewMode !== 'grid' && (
        <div className="case-pills-strip" role="navigation" aria-label="Sélection rapide du cas">
          {filteredCases.map((c, idx) => {
            const st = progress[c.id]?.status;
            const isCurrent = c.id === activeCase?.id;
            return (
              <button
                key={c.id}
                type="button"
                className={`case-num-pill ${isCurrent ? 'is-current' : ''} ${
                  st ? `st-${st}` : ''
                }`}
                onClick={() => onSelectCaseId(c.id)}
                title={`Cas #${idx + 1} (${c.modality})`}
              >
                <span>#{idx + 1}</span>
                {bookmarks.has(c.id) && <span className="pill-star">★</span>}
              </button>
            );
          })}
        </div>
      )}

      {/* Empty State if filters match nothing */}
      {filteredCases.length === 0 ? (
        <div className="empty-state-card">
          <h3>Aucun cas ne correspond à ces filtres</h3>
          <p>Modifiez la région, la modalité ou le statut, ou ajoutez un nouveau cas d’imagerie.</p>
          <div className="empty-state-actions">
            <button
              type="button"
              className="btn btn-ghost btn-small"
              onClick={() => {
                setRegionFilter('all');
                setModalityFilter('Toutes');
                setStatusFilter('all');
              }}
            >
              Réinitialiser les filtres
            </button>
            <a href="#/studio" className="btn btn-primary btn-small">
              + Ajouter un cas
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Active 1-Image 1-Quiz Player */}
          {viewMode !== 'grid' && activeCase && (
            <CaseQuizPlayer
              caseItem={activeCase}
              allCases={allCases}
              caseIndex={currentIdx}
              totalCases={filteredCases.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onEditCase={onEditCase}
            />
          )}

          {/* Visual Case Gallery Grid */}
          {viewMode !== 'quiz' && (
            <section className="gallery-section">
              <div className="gallery-header">
                <h2>
                  Banque de cas d’imagerie{' '}
                  <span className="gallery-count">({filteredCases.length})</span>
                </h2>
                <p className="gallery-sub">
                  Cliquez sur une vignette pour charger le cas dans la visionneuse. Les diagnostics restent masqués tant que le cas n’est pas résolu.
                </p>
              </div>

              <div className="case-gallery-grid">
                {filteredCases.map((c, idx) => {
                  const p = progress[c.id];
                  const isSolved = Boolean(p?.status);
                  const isSelected = c.id === activeCase?.id && viewMode !== 'grid';
                  const regionObj = REGIONS.find((r) => r.id === c.region) || REGIONS[1];

                  return (
                    <article
                      key={c.id}
                      className={`gallery-case-card ${isSelected ? 'is-selected' : ''} ${
                        p?.status ? `card-status-${p.status}` : ''
                      }`}
                      onClick={() => {
                        onSelectCaseId(c.id);
                        if (viewMode === 'grid') {
                          setViewMode('both');
                        }
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="gallery-thumb-wrap">
                        <img
                          src={c.image}
                          alt={`Cas #${idx + 1}`}
                          className="gallery-thumb-img"
                          loading="lazy"
                        />
                        <span className="gallery-thumb-modality">{c.modality}</span>
                        {bookmarks.has(c.id) && (
                          <span className="gallery-thumb-fav" title="Favori">
                            ★
                          </span>
                        )}
                        {p?.status && (
                          <span className={`gallery-status-badge is-${p.status}`}>
                            {p.status === 'exact'
                              ? '✓ Exact'
                              : p.status === 'partial'
                              ? '≈ Partiel'
                              : 'À revoir'}
                          </span>
                        )}
                      </div>

                      <div className="gallery-card-body">
                        <div className="gallery-card-meta">
                          <span>Cas #{String(idx + 1).padStart(2, '0')}</span>
                          <span>·</span>
                          <span>{regionObj.shortTitle}</span>
                        </div>

                        <h3 className="gallery-card-title">
                          {isSolved ? c.diagnosis : 'Diagnostic masqué — Cliquez pour jouer'}
                        </h3>

                        <p className="gallery-card-context">{c.clinicalContext}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
