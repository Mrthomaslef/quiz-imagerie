import { DIAGNOSIS_DICTIONARY } from './cases.js';

const STOP_WORDS = new Set([
  'de',
  'du',
  'des',
  'la',
  'le',
  'les',
  'un',
  'une',
  'au',
  'aux',
  'en',
  'et',
  'ou',
  'sur',
  'dans',
  'avec',
  'sans',
  'par',
  'type',
  'stade',
]);

export function normalizeText(str = '') {
  return String(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’`()-/.,:;!?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(str = '') {
  const norm = normalizeText(str);
  if (!norm) return [];
  return norm.split(' ').filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

function wordMatchesFuzzy(userWord, targetWord) {
  if (userWord === targetWord) return true;
  if (targetWord.length >= 4 && userWord.startsWith(targetWord.slice(0, -1))) return true;
  if (userWord.length >= 4 && targetWord.startsWith(userWord)) return true;
  const maxDist = targetWord.length >= 7 ? 2 : targetWord.length >= 4 ? 1 : 0;
  if (maxDist === 0) return false;
  return levenshtein(userWord, targetWord) <= maxDist;
}

function phraseMatchesFuzzy(userNorm, candidateNorm) {
  if (!userNorm || !candidateNorm) return false;
  if (userNorm === candidateNorm) return true;
  if (userNorm.includes(candidateNorm) || candidateNorm.includes(userNorm)) {
    const shorter = Math.min(userNorm.length, candidateNorm.length);
    const longer = Math.max(userNorm.length, candidateNorm.length);
    if (shorter >= 6 && shorter / longer >= 0.55) return true;
  }

  const userTokens = tokenize(userNorm);
  const candTokens = tokenize(candidateNorm);
  if (!userTokens.length || !candTokens.length) return false;

  const matchedCand = candTokens.filter((ct) =>
    userTokens.some((ut) => wordMatchesFuzzy(ut, ct))
  );

  const ratio = matchedCand.length / candTokens.length;
  return ratio >= 0.8;
}

/**
 * Évalue la réponse libre saisie par l'utilisateur par rapport au cas d'imagerie.
 * Retourne { status: 'exact' | 'partial' | 'wrong', score: 1 | 0.5 | 0, title, detail }
 */
export function evaluateDiagnosis(userInput, caseItem) {
  const userNorm = normalizeText(userInput);
  if (!userNorm) {
    return {
      status: 'wrong',
      score: 0,
      title: 'Aucune réponse saisie',
      detail: 'Saisissez un diagnostic avant de valider.',
    };
  }

  const candidates = [
    caseItem.diagnosis,
    ...(Array.isArray(caseItem.synonyms) ? caseItem.synonyms : []),
  ].filter(Boolean);

  // 1. Exact or fuzzy match against primary diagnosis or any accepted synonym
  for (const cand of candidates) {
    const candNorm = normalizeText(cand);
    if (phraseMatchesFuzzy(userNorm, candNorm)) {
      return {
        status: 'exact',
        score: 1,
        title: 'Diagnostic exact !',
        detail: `Parfait : « ${caseItem.diagnosis} » est bien le diagnostic attendu.`,
      };
    }
  }

  // 2. Check flexible keyword groups if defined
  const userTokens = tokenize(userNorm);
  const kwGroups = Array.isArray(caseItem.requiredKeywords) && caseItem.requiredKeywords.length > 0
    ? caseItem.requiredKeywords
    : [tokenize(caseItem.diagnosis)];

  let matchedGroups = 0;
  for (const group of kwGroups) {
    const groupVariants = Array.isArray(group) ? group : [group];
    const groupHit = groupVariants.some((variant) => {
      const vTokens = tokenize(variant);
      if (!vTokens.length) return false;
      return vTokens.every((vt) =>
        userTokens.some((ut) => wordMatchesFuzzy(ut, vt))
      );
    });
    if (groupHit) matchedGroups++;
  }

  if (kwGroups.length > 0 && matchedGroups === kwGroups.length) {
    return {
      status: 'exact',
      score: 1,
      title: 'Diagnostic validé !',
      detail: `Mots-clés essentiels reconnus pour « ${caseItem.diagnosis} ».`,
    };
  }

  // 3. Check partial match (e.g. 1 out of 2 keyword groups or >= 45% of primary diagnosis tokens)
  const primaryTokens = tokenize(caseItem.diagnosis);
  const matchedPrimaryCount = primaryTokens.filter((pt) =>
    userTokens.some((ut) => wordMatchesFuzzy(ut, pt))
  ).length;
  const primaryRatio = primaryTokens.length > 0 ? matchedPrimaryCount / primaryTokens.length : 0;

  if (
    (kwGroups.length > 1 && matchedGroups >= Math.ceil(kwGroups.length / 2)) ||
    primaryRatio >= 0.45
  ) {
    return {
      status: 'partial',
      score: 0.5,
      title: 'Diagnostic partiel / incomplet',
      detail: `Vous êtes sur la bonne piste ! Le diagnostic complet était : « ${caseItem.diagnosis} ».`,
    };
  }

  return {
    status: 'wrong',
    score: 0,
    title: 'Diagnostic différent',
    detail: `Le diagnostic attendu était : « ${caseItem.diagnosis} ».`,
  };
}

/**
 * Retourne jusqu'à `limit` suggestions d'autocomplétion pertinentes.
 */
export function getAutocompleteSuggestions(query, allCases = [], limit = 7) {
  const qNorm = normalizeText(query);
  if (!qNorm || qNorm.length < 2) return [];

  const poolSet = new Set(DIAGNOSIS_DICTIONARY);
  for (const c of allCases) {
    if (c?.diagnosis) poolSet.add(c.diagnosis);
    if (Array.isArray(c?.synonyms)) {
      for (const s of c.synonyms) {
        if (s && s.length > 4) poolSet.add(s);
      }
    }
  }

  const qTokens = tokenize(qNorm);
  const scored = [];

  for (const label of poolSet) {
    const lNorm = normalizeText(label);
    if (!lNorm) continue;

    let rank = 0;
    if (lNorm.startsWith(qNorm)) {
      rank = 100;
    } else if (lNorm.split(' ').some((w) => w.startsWith(qNorm))) {
      rank = 80;
    } else if (lNorm.includes(qNorm)) {
      rank = 65;
    } else if (qTokens.length > 0) {
      const lTokens = tokenize(lNorm);
      const hits = qTokens.filter((qt) =>
        lTokens.some((lt) => lt.startsWith(qt) || wordMatchesFuzzy(qt, lt))
      ).length;
      if (hits === qTokens.length) {
        rank = 55;
      } else if (hits > 0 && hits / qTokens.length >= 0.5) {
        rank = 30;
      }
    }

    if (rank > 0) {
      scored.push({ label, rank });
    }
  }

  scored.sort((a, b) => b.rank - a.rank || a.label.localeCompare(b.label, 'fr'));

  // Deduplicate normalized equivalents
  const seen = new Set();
  const result = [];
  for (const item of scored) {
    const key = normalizeText(item.label);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item.label);
    if (result.length >= limit) break;
  }

  return result;
}
