export default function BottomNav({ currentRoute }) {
  const isHome = currentRoute === 'home';
  const isQuiz = currentRoute === 'quiz';
  const isStudio = currentRoute === 'studio';
  const isProgress = currentRoute === 'progression';

  return (
    <nav className="bottom-nav-wrap" aria-label="Navigation principale">
      <div className="bottom-nav">
        <a
          href="#/"
          className={`bottom-nav-item ${isHome ? 'is-active' : ''}`}
          aria-current={isHome ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isHome ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1v-9.5Z" />
          </svg>
          <span className="bottom-nav-label">Accueil</span>
        </a>

        <a
          href="#/quiz"
          className={`bottom-nav-item ${isQuiz ? 'is-active' : ''}`}
          aria-current={isQuiz ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="20"
            height="20"
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
          <span className="bottom-nav-label">Quiz</span>
        </a>

        <a
          href="#/studio"
          className={`bottom-nav-item ${isStudio ? 'is-active' : ''}`}
          aria-current={isStudio ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="20"
            height="20"
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
          <span className="bottom-nav-label">Ajouter</span>
        </a>

        <a
          href="#/progression"
          className={`bottom-nav-item ${isProgress ? 'is-active' : ''}`}
          aria-current={isProgress ? 'page' : undefined}
        >
          <svg
            className="bottom-nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
          <span className="bottom-nav-label">Scores</span>
        </a>
      </div>
    </nav>
  );
}
