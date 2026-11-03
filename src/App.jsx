import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import BottomNav from './components/BottomNav.jsx';
import Footer from './components/Footer.jsx';
import CaseFeedPage from './components/CaseFeedPage.jsx';
import CaseStudioPage from './components/CaseStudioPage.jsx';
import ProgressPage from './components/ProgressPage.jsx';
import {
  getAllCases,
  readBookmarks,
  readProgress,
  subscribeStore,
} from './data/storage.js';

function parseHash() {
  const h = window.location.hash || '#/';
  if (h.startsWith('#/studio')) return { route: 'studio', caseId: null };
  if (h.startsWith('#/progression')) return { route: 'progression', caseId: null };
  if (h.startsWith('#/quiz')) {
    const m = h.match(/^#\/quiz\/([\w-]+)$/);
    return { route: 'quiz', caseId: m ? m[1] : null };
  }
  const mCas = h.match(/^#\/cas\/([\w-]+)$/);
  if (mCas) {
    return { route: 'feed', caseId: mCas[1] };
  }
  return { route: 'feed', caseId: null };
}

export default function App() {
  const [navState, setNavState] = useState(parseHash);
  const [allCases, setAllCases] = useState(() => getAllCases());
  const [progress, setProgress] = useState(() => readProgress());
  const [bookmarks, setBookmarks] = useState(() => readBookmarks());
  const [selectedCaseId, setSelectedCaseId] = useState(() => {
    const initial = parseHash().caseId;
    const list = getAllCases();
    return initial || (list[0] ? list[0].id : null);
  });
  const [caseToEdit, setCaseToEdit] = useState(null);

  useEffect(() => {
    const sync = () => {
      setAllCases(getAllCases());
      setProgress(readProgress());
      setBookmarks(readBookmarks());
    };
    return subscribeStore(sync);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHash();
      setNavState(parsed);
      if (parsed.caseId) {
        setSelectedCaseId(parsed.caseId);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectCaseId = (id) => {
    setSelectedCaseId(id);
  };

  const handleRandomCase = () => {
    if (!allCases.length) return;
    const unanswered = allCases.filter((c) => !progress[c.id]?.status);
    const pool = unanswered.length > 0 ? unanswered : allCases;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelectedCaseId(pick.id);
    if (navState.route !== 'feed' && navState.route !== 'quiz') {
      window.location.hash = `#/cas/${pick.id}`;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEditCase = (caseObj) => {
    setCaseToEdit(caseObj);
    window.location.hash = '#/studio';
  };

  const handleOpenCaseInQuiz = (id) => {
    setSelectedCaseId(id);
    window.location.hash = `#/cas/${id}`;
  };

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Navbar onRandomCase={handleRandomCase} />

      <main className="main-with-bottom-nav">
        {navState.route === 'studio' ? (
          <CaseStudioPage
            allCases={allCases}
            initialCaseToEdit={caseToEdit}
            onClearInitialEdit={() => setCaseToEdit(null)}
            onOpenCaseInQuiz={handleOpenCaseInQuiz}
          />
        ) : navState.route === 'progression' ? (
          <ProgressPage
            allCases={allCases}
            progress={progress}
            bookmarks={bookmarks}
            onOpenCaseInQuiz={handleOpenCaseInQuiz}
          />
        ) : (
          <CaseFeedPage
            key={navState.route === 'quiz' ? 'focus-quiz' : 'feed-split'}
            allCases={allCases}
            progress={progress}
            bookmarks={bookmarks}
            selectedCaseId={selectedCaseId}
            onSelectCaseId={handleSelectCaseId}
            onEditCase={handleEditCase}
            defaultViewMode={navState.route === 'quiz' ? 'player-only' : 'split'}
          />
        )}
      </main>

      <Footer />
      <BottomNav currentRoute={navState.route} />
    </>
  );
}
