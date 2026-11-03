import { useEffect, useState } from 'react';
import { getAllCases, readProgress, readPseudo, savePseudo, subscribeStore } from '../data/storage.js';

export default function Navbar({ onRandomCase }) {
  const [scrolled, setScrolled] = useState(false);
  const [pseudo, setPseudo] = useState(readPseudo);
  const [editingPseudo, setEditingPseudo] = useState(false);
  const [draftPseudo, setDraftPseudo] = useState(pseudo);
  const [stats, setStats] = useState({ solved: 0, total: 0 });

  const refresh = () => {
    const cases = getAllCases();
    const prog = readProgress();
    const solved = cases.filter(
      (c) => prog[c.id]?.status === 'exact' || prog[c.id]?.status === 'partial'
    ).length;
    setStats({ solved, total: cases.length });
    setPseudo(readPseudo());
  };

  useEffect(() => {
    refresh();
    return subscribeStore(refresh);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submitPseudo = (e) => {
    e.preventDefault();
    savePseudo(draftPseudo);
    setEditingPseudo(false);
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-brand-group">
          <a href="#/" className="brand" aria-label="QUIZ Imagerie Cochin — Accueil">
            <img src="./apple-touch-icon.png" alt="" className="brand-logo" />
            <span className="brand-text">
              QUIZ&nbsp;<span className="brand-accent">Imagerie</span>
            </span>
          </a>
          <span className="nav-beta-badge" title="1 Image = 1 Diagnostic">
            1 Image · 1 Quiz
          </span>
        </div>

        <div className="nav-right">
          <a
            href="#/progression"
            className="nav-score-pill"
            title="Cas validés sur le total disponible"
          >
            <span className="nav-score-dot" />
            <span>
              {stats.solved}/{stats.total} cas
            </span>
          </a>

          <button
            type="button"
            className="btn btn-ghost btn-small nav-random-btn"
            onClick={onRandomCase}
            title="Tirer un cas d'imagerie au hasard"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
              <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
              <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
            </svg>
            <span className="hide-xs">Aléatoire</span>
          </button>

          <a href="#/studio" className="btn btn-primary btn-small nav-add-btn">
            <span>+ Cas</span>
          </a>

          <button
            type="button"
            className="nav-user-btn"
            onClick={() => {
              setDraftPseudo(pseudo);
              setEditingPseudo(true);
            }}
            title="Modifier mon pseudo"
          >
            {pseudo ? pseudo : 'Pseudo'}
          </button>
        </div>
      </header>

      {editingPseudo && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setEditingPseudo(false)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Votre pseudo</h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setEditingPseudo(false)}
              >
                ✕
              </button>
            </div>
            <p className="modal-sub">
              Utilisé pour personnaliser votre session d’entraînement et signer les cas que vous ajoutez.
            </p>
            <form onSubmit={submitPseudo} className="modal-form">
              <input
                type="text"
                className="text-input"
                placeholder="Ex. Thomas, Interne Cochin…"
                value={draftPseudo}
                onChange={(e) => setDraftPseudo(e.target.value)}
                autoFocus
              />
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  onClick={() => setEditingPseudo(false)}
                >
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary btn-small">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
