export default function BottomNav({ currentRoute }) {
  const isFeed = currentRoute === 'feed';
  const isQuiz = currentRoute === 'quiz';
  const isStudio = currentRoute === 'studio';
  const isProgress = currentRoute === 'progression';

  return (
    <nav className="bottom-nav-wrap" aria-label="Navigation principale">
      <div className="bottom-nav">
        <a
          href="#/"
          className={`bottom-nav-item ${isFeed ? 'is-active' : ''}`}
          aria-current={isFeed ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <span className="bottom-nav-label">Flux & Filtres</span>
        </a>

        <a
          href="#/quiz"
          className={`bottom-nav-item ${isQuiz ? 'is-active' : ''}`}
          aria-current={isQuiz ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
          <span className="bottom-nav-label">1 Image · 1 Quiz</span>
        </a>

        <a
          href="#/studio"
          className={`bottom-nav-item ${isStudio ? 'is-active' : ''}`}
          aria-current={isStudio ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <span className="bottom-nav-label">Ajouter / Gérer</span>
        </a>

        <a
          href="#/progression"
          className={`bottom-nav-item ${isProgress ? 'is-active' : ''}`}
          aria-current={isProgress ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
          <span className="bottom-nav-label">Progression</span>
        </a>
      </div>
    </nav>
  );
}
