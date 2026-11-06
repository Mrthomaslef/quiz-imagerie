import { COTTEN_DIAGNOSIS_INDEX } from './cottenIndex.js';

export const REGIONS = [
  { id: 'all', title: 'Toutes régions', shortTitle: 'Toutes', logo: null },
  { id: 'epaule', title: 'Épaule', shortTitle: 'Épaule', logo: './theme-logos/epaule.png' },
  { id: 'coude', title: 'Coude', shortTitle: 'Coude', logo: './theme-logos/coude.png' },
  { id: 'main-poignet', title: 'Poignet & Main', shortTitle: 'Poignet/Main', logo: './theme-logos/main-poignet.png' },
  { id: 'hanche', title: 'Hanche', shortTitle: 'Hanche', logo: './theme-logos/hanche.png' },
  { id: 'genou', title: 'Genou', shortTitle: 'Genou', logo: './theme-logos/genou.png' },
  { id: 'jambe-cheville-pied', title: 'Cheville & Pied', shortTitle: 'Cheville/Pied', logo: './theme-logos/jambe-cheville-pied.png' },
  { id: 'rachis', title: 'Rachis', shortTitle: 'Rachis', logo: './theme-logos/rachis.png' },
  { id: 'dysostose', title: 'Dysostose & Divers', shortTitle: 'Divers', logo: './theme-logos/dysostose.png' },
];

export const MODALITIES = [
  'Toutes',
  'Radiographie',
  'IRM',
  'Arthroscanner / TDM',
  'Échographie',
];

// Référentiel complet de diagnostics ostéo-articulaires du Cotten (36 chapitres) + classiques pour l'autocomplétion
export const DIAGNOSIS_DICTIONARY = [
  "Tumeur bénigne des gaines des nerfs périphériques (schwannome) foraminale lombaire",
  "Schwannome intermusculaire de la fosse infra-épineuse (tumeur nerveuse bénigne)",
  "Tumeur mésenchymateuse superficielle non graisseuse des parties molles du dos (sarcome superficiel)",
  "Tumeur bénigne des gaines des nerfs périphériques (schwannome) du nerf sciatique",
  "Tumeur lipomateuse profonde intramusculaire glutéale (lipome profond / ALT)",
  "Lésion osseuse ostéolytique de la colonne postérieure de l'acétabulum (métastase / plasmocytome)",
  "Malformation vasculaire artério-veineuse paravertébrale lombaire",
  "Infarctus osseux (ostéonécrose) du condyle fémoral",
  "Tumeur desmoïde (fibromatose profonde) de la paroi abdominale",
  "Myxome intramusculaire de la jambe",
  "Récidive locale de tumeur à cellules géantes (TCG) du tibia proximal",
  "Tumeur maligne des gaines des nerfs périphériques (MPNST) de la racine de la cuisse",
  "Tumeur cartilagineuse de surface du tibia proximal (chondrome / chondrosarcome périosté)",
  "Masse nécrotique des parties molles glutéales à rehaussement annulaire (métastase nécrotique / abcès)",
  "Nodule pulmonaire apical gauche suspect (adénocarcinome / lésion secondaire)",
  "Névrome de Morton du 3e espace intermétatarsien",
  "Ostéome ostéoïde cortical du tibia proximal",
  "Ostéome ostéoïde du col du talus (astragale)",
  "Métastase osseuse ostéolytique de l'aile iliaque (lésion secondaire / plasmocytome)",
  "Localisation vertébrale de myélome multiple avec fracture pathologique de T3 et épidurite",
  "Lésion kystique ou myxoïde profonde des parties molles glutéales (kyste / myxome / schwannome)",
  "Métastase ostéolytique vertébrale avec atteinte pédiculaire droite (L2)",
  "Fracture pathologique de L1 sur métastase ostéolytique vertébrale",
  "Tumeur osseuse de l'aileron sacré gauche (chordome / chondrosarcome / métastase)",
  "Kyste osseux essentiel (unicaméral) du fémur proximal",
  "Thrombose des veines plantaires",
  "Résorption aiguë de calcification péri-articulaire de l'hallux (rhumatisme à hydroxyapatite)",
  "Fracture-pseudarthrose de butée coracoïdienne (intervention de Latarjet)",
  "Chondrosarcome compliqué de fracture pathologique",
  "Instabilité (subluxation) et ténosynovite de l'extenseur ulnaire du carpe (ECU) par rupture du rétinaculum (Inoue type A)",
  "Algodystrophie de hanche (SDRC) / fracture sous-chondrale par insuffisance osseuse de la tête fémorale",
  "Fracture-décollement épiphysaire métacarpienne Salter-Harris type I",
  "Ostéolyse distale de la clavicule (post-traumatique ou microtraumatique)",
  "Doigt à ressaut (ténosynovite sténosante des fléchisseurs sur épaississement de la poulie A1)",
  "Tumeur desmoïde (fibromatose profonde) de la paroi thoracique dorsale",
  "Syndrome douloureux du 2e rayon avec lésion de la plaque plantaire de MTP2",
  "Capsulite rétractile de l'épaule (post-fracture du tubercule majeur)",
  "Déchirure / désinsertion des muscles lombricaux de la main (lésion de grimpeur)",
  "Ténosynovite sténosante des tendons fibulaires sous le rétinaculum inférieur",
  "Rupture du tendon du long biceps sur butée coracoïdienne avec corps étranger intra-articulaire",
  "Ostéome ostéoïde de la phalange distale du 5e orteil",
  "Fracture sacrée en H par insuffisance osseuse",
  "Métastase ostéolytique du toit acétabulaire (cotyle) à haut risque fracturaire",
  "Malformation lymphatique macrokystique des parties molles (lymphangiome kystique)",
  "Pied de Madura (mycétome du pied avec signe du point dans le cercle)",
  "Fractures vertébrales ostéoporotiques thoraco-lombaires (T9 et T12) avec retard de consolidation",
  ...COTTEN_DIAGNOSIS_INDEX,
  'Complexe de Buford',
  'Foramen sous-labral',
  'Lésion de Bankart osseuse',
  'Lésion de Bankart fibreuse',
  'Lésion de Perthes',
  'Lésion ALPSA',
  'Lésion GLAD',
  'Lésion HAGL',
  'Reverse Bankart',
  'Lésion de Kim',
  'SLAP lésion type II',
  'SLAP lésion type IV',
  'Encoche de Hill-Sachs',
  'Encoche de McLaughlin',
  'Instabilité glénohumérale multidirectionnelle',
  'Rupture transfixiante de la coiffe des rotateurs (supra-épineux)',
  'Rupture partielle profonde du supra-épineux',
  'Rupture du tendon subscapulaire',
  'Tendinopathie calcifiante de la coiffe des rotateurs',
  'Bursite sous-acromio-deltoïdienne',
  'Involution graisseuse de la coiffe des rotateurs (Goutallier)',
  'Omarthrose centrée',
  'Omarthrose excentrée (coiffe incontinente)',
  'Ostéonécrose aseptique de la tête humérale',
  'Capsulite rétractile de l’épaule',
  'Kyste arthrosynovial acromio-claviculaire (signe du geyser)',
  'Kyste spino-glénoïdien avec dénervation du nerf suprascapulaire',
  'Syndrome de Parsonage-Turner (névralgie amyotrophiante)',
  'Syndrome de l’espace quadrilatère (nerf axillaire)',
  'Atteinte du nerf thoracique long (Scapula alata)',
  'Atteinte du nerf spinal accessoire (amyotrophie du trapèze)',
  'Lésion du nerf musculocutané (dénervation du coracobrachial)',
  'Scapula à ressaut (tubercule de Luschka)',
  'Contracture fibreuse du deltoïde',
  'Épicondylite latérale (tendinopathie des épicondyliens)',
  'Rupture distale du tendon du biceps brachial',
  'Ostéochondrite disséquante du capitellum (maladie de Panner)',
  'Disjonction scapho-lunaire (SLAC wrist)',
  'Fracture du scaphoïde carpien',
  'Ostéonécrose du lunatum (maladie de Kienböck)',
  'Conflit ulno-carpien',
  'Rupture de poulie digitale (doigt d’escalade)',
  'Tumeur glomique sous-unguéale',
  'Ténosynovite de De Quervain',
  'Coxarthrose destructrice rapide',
  'Ostéonécrose aseptique de la tête fémorale',
  'Conflit fémoro-acétabulaire (type came / tenaille)',
  'Algodystrophie (SDRC type I) de hanche',
  'Fracture sous-chondrale par insuffisance osseuse',
  'Rupture du ligament croisé antérieur (LCA)',
  'Fracture de Segond',
  'Lésion méniscale en anse de seau',
  'Kyste poplité de Baker',
  'Ostéochondrite disséquante du condyle fémoral médial',
  'Tendinopathie patellaire (Jumper’s knee)',
  'Maladie d’Osgood-Schlatter',
  'Rupture du tendon calcanéen (Achille)',
  'Fasciite plantaire (aponévrosite plantaire)',
  'Névrome de Morton',
  'Fracture de fatigue des métatarsiens',
  'Coalition tarsienne (calcanéo-naviculaire / talo-calcanéenne)',
  'Spondylodiscite infectieuse',
  'Hernie discale lombaire conflictuelle',
  'Spondyloarthrite axiale (sacro-iliite)',
  'Fracture-tassement vertébral ostéoporotique',
  'Ostéome ostéoïde',
  'Enchondrome (chondrome)',
  'Exostose ostéogénique (ostéochondrome)',
  'Kyste osseux essentiel',
  'Kyste osseux anévrismal',
  'Tumeur à cellules géantes',
  'Dysplasie fibreuse',
];

export const INITIAL_CASES = [
  {
      "id": "mail-01",
      "title": "Cas Imagerie #01",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-01.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion tissulaire bien limitée en sablier élargissant le foramen intervertébral lombaire avec contingent endocanalaire.",
      "diagnosis": "Tumeur bénigne des gaines des nerfs périphériques (schwannome) foraminale lombaire",
      "synonyms": [
          "Schwannome foraminal lombaire",
          "TBGNP foraminale",
          "Neurinome lombaire",
          "Schwannome rachidien en sablier",
          "Tumeur nerveuse bénigne foraminale",
          "Schwannome",
          "Neurinome"
      ],
      "requiredKeywords": [
          [
              "schwannome",
              "neurinome",
              "tbgnp",
              "gaines des nerfs",
              "tumeur nerveuse"
          ],
          [
              "foraminal",
              "foraminale",
              "lombaire",
              "rachis",
              "endocanalaire",
              "sablier",
              "l4"
          ]
      ],
      "distractors": [
          "Hernie discale foraminale exclue",
          "Kyste synovial articulaire postérieur",
          "Méningiome intradural",
          "Métastase épidurale"
      ],
      "keySigns": [
          "Masse foraminaIe et extra-foraminale bien circonscrite à développement endocanalaire (aspect en sablier)",
          "Remodelage osseux régulier du foramen intervertébral sans ostéolyse agressive",
          "Refoulement du sac dural avec rétrécissement canalaire"
      ],
      "explanation": "Les tumeurs bénignes des gaines des nerfs périphériques (TBGNP : schwannomes, neurofibromes) rachidiennes présentent typiquement une morphologie en sablier à cheval sur le foramen intervertébral, élargissant ses parois osseuses par remodelage lent."
  },
  {
      "id": "mail-02",
      "title": "Cas Imagerie #02",
      "region": "epaule",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-02.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse profonde bien limitée de la fosse infra-épineuse entourée d'un liseré graisseux aux pôles (fat split sign).",
      "diagnosis": "Schwannome intermusculaire de la fosse infra-épineuse (tumeur nerveuse bénigne)",
      "synonyms": [
          "Tumeur bénigne des gaines des nerfs périphériques de l'épaule",
          "Schwannome intramusculaire infra-épineux",
          "TBGNP de l'épaule",
          "Schwannome avec fat split sign",
          "Neurinome de l'épaule",
          "Schwannome"
      ],
      "requiredKeywords": [
          [
              "schwannome",
              "neurinome",
              "tbgnp",
              "tumeur nerveuse",
              "gaines des nerfs"
          ],
          [
              "epaule",
              "infra-epineuse",
              "infra-epineux",
              "intermusculaire",
              "fat split"
          ]
      ],
      "distractors": [
          "Liposarcome myxoïde",
          "Kyste mucoïde de l'échancrure spinoglénoïdienne",
          "Hématome intramusculaire",
          "Fibromatose desmoïde"
      ],
      "keySigns": [
          "Masse ovoïde intermusculaire profonde bien circonscrite",
          "Signe du croissant graisseux polaire (fat split sign) témoignant du développement sur un axe vasculo-nerveux",
          "Franc hypersignal T2 hétérogène sans infiltration des muscles adjacents"
      ],
      "explanation": "La présence d'un liseré graisseux aux pôles supérieur et inférieur d'une masse profonde fusiforme (fat split sign) oriente fortement vers une tumeur bénigne des gaines nerveuses périphériques (schwannome)."
  },
  {
      "id": "mail-03",
      "title": "Cas Imagerie #03",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-03.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse tissulaire sous-cutanée non graisseuse de plus de 5 cm au contact du fascia dorsal.",
      "diagnosis": "Tumeur mésenchymateuse superficielle non graisseuse des parties molles du dos (sarcome superficiel)",
      "synonyms": [
          "Sarcome superficiel des tissus mous du dos",
          "Masse tissulaire sous-cutanée suspecte du dos",
          "Tumeur des parties molles superficielles",
          "Lésion sarcomateuse superficielle"
      ],
      "requiredKeywords": [
          [
              "sarcome",
              "tumeur",
              "masse",
              "lesion"
          ],
          [
              "parties molles",
              "tissus mous",
              "superficiel",
              "superficielle",
              "sous-cutane",
              "sous-cutanee",
              "dos",
              "dorsal"
          ]
      ],
      "distractors": [
          "Lipome sous-cutané simple",
          "Kyste épidermoïde non compliqué",
          "Hémangiome superficiel",
          "Fasciite nodulaire"
      ],
      "keySigns": [
          "Masse sous-cutanée bien individualisée mais de grand axe supérieur à 5 cm",
          "Signal tissulaire non graisseux avec contact étroit avec le fascia superficiel",
          "Critères imposant une microbiopsie percutanée avant tout geste d'exérèse"
      ],
      "explanation": "Toute masse des tissus mous non graisseuse de plus de 5 cm, même superficielle, est suspecte de sarcome des tissus mous jusqu'à preuve histologique du contraire et relève d'une biopsie percutanée."
  },
  {
      "id": "mail-04",
      "title": "Cas Imagerie #04",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-04.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse fusiforme sur le trajet du nerf sciatique à la racine de la cuisse présentant un signe de la cible (target sign) en T2.",
      "diagnosis": "Tumeur bénigne des gaines des nerfs périphériques (schwannome) du nerf sciatique",
      "synonyms": [
          "Schwannome du nerf sciatique",
          "Neurofibrome du nerf sciatique",
          "TBGNP du nerf sciatique",
          "Neurinome du sciatique",
          "Schwannome de la cuisse"
      ],
      "requiredKeywords": [
          [
              "schwannome",
              "neurinome",
              "neurofibrome",
              "tbgnp",
              "tumeur nerveuse",
              "gaines des nerfs"
          ],
          [
              "sciatique",
              "cuisse",
              "cible",
              "target"
          ]
      ],
      "distractors": [
          "Tumeur maligne des gaines nerveuses (MPNST)",
          "Myxome intramusculaire",
          "Sarcome synovial",
          "Kyste synovial intraneural"
      ],
      "keySigns": [
          "Continuité directe avec le tronc du nerf sciatique (entering and exiting nerve sign)",
          "Signe de la cible (target sign) en pondération T2 : centre hypo-intense fibreux et couronne périphérique hyperintense myxoïde",
          "Liseré graisseux périphérique conservé (split fat sign)"
      ],
      "explanation": "Le signe de la cible en T2 associé au raccordement direct avec le nerf sciatique est caractéristique d'une tumeur bénigne des gaines des nerfs périphériques (schwannome ou neurofibrome)."
  },
  {
      "id": "mail-05",
      "title": "Cas Imagerie #05",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 1,
      "image": "./figures/mails/mail-05.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Volumineuse masse profonde intramusculaire de la région glutéale de signal purement graisseux s'effaçant sur les séquences avec saturation de la graisse.",
      "diagnosis": "Tumeur lipomateuse profonde intramusculaire glutéale (lipome profond / ALT)",
      "synonyms": [
          "Lipome profond intramusculaire de la fesse",
          "Tumeur lipomateuse atypique glutéale",
          "Lipome glutéal profond",
          "Tumeur adipeuse profonde de la fesse",
          "Lipome intramusculaire"
      ],
      "requiredKeywords": [
          [
              "lipome",
              "lipomateuse",
              "adipeuse",
              "graisseuse"
          ],
          [
              "profond",
              "profonde",
              "intramusculaire",
              "gluteal",
              "gluteale",
              "fesse",
              "atypique"
          ]
      ],
      "distractors": [
          "Liposarcome dédifférencié",
          "Hématome glutéal chronique",
          "Bursite ischiatique",
          "Hibernome"
      ],
      "keySigns": [
          "Masse intramusculaire profonde de signal identique à la graisse sous-cutanée en T1 et T2",
          "Extinction homogène du signal sur les séquences Fat-Sat / STIR",
          "Fines cloisons internes régulières sans nodule tissulaire charnu"
      ],
      "explanation": "Une lésion adipeuse profonde sous-fasciale de plus de 5 cm impose de discuter entre lipome intramusculaire profond et tumeur lipomateuse atypique (ALT / liposarcome bien différencié) par recherche d'amplification MDM2."
  },
  {
      "id": "mail-06",
      "title": "Cas Imagerie #06",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-06.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion ostéolytique de la colonne postérieure du cotyle avec rupture corticale au scanner et prise de contraste tissulaire en IRM.",
      "diagnosis": "Lésion osseuse ostéolytique de la colonne postérieure de l'acétabulum (métastase / plasmocytome)",
      "synonyms": [
          "Métastase ostéolytique de l'acétabulum",
          "Lésion secondaire du cotyle",
          "Ostéolyse de la colonne postérieure du cotyle",
          "Métastase osseuse acétabulaire"
      ],
      "requiredKeywords": [
          [
              "metastase",
              "osteolytique",
              "osteolyse",
              "lesion osseuse",
              "secondaire",
              "plasmocytome"
          ],
          [
              "acetabulum",
              "acetabulaire",
              "cotyle",
              "colonne posterieure",
              "bassin",
              "iliaque"
          ]
      ],
      "distractors": [
          "Géode d'arthrose coxofémorale",
          "Dysplasie fibreuse",
          "Kyste anévrismal",
          "Enchondrome"
      ],
      "keySigns": [
          "Ostéolyse géographique à bords perméatifs de la colonne postérieure de l'acétabulum",
          "Amincissement et effraction focale de la corticale rétro-acétabulaire",
          "Rehaussement tissulaire franc sur l'IRM couplée"
      ],
      "explanation": "Une lésion ostéolytique tissulaire de la colonne postérieure de l'acétabulum chez l'adulte évoque en premier lieu une localisation secondaire ou un myélome/plasmocytome et nécessite une biopsie osseuse radioguidée."
  },
  {
      "id": "mail-07",
      "title": "Cas Imagerie #07",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-07.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion des muscles paravertébraux lombaires contenant des structures serpigineuses en vide de signal (flow voids) et un rehaussement vasculaire intense.",
      "diagnosis": "Malformation vasculaire artério-veineuse paravertébrale lombaire",
      "synonyms": [
          "Malformation artério-veineuse intramusculaire paravertébrale",
          "Malformation vasculaire des parties molles lombaires",
          "MAV paravertébrale",
          "Hémangiome intramusculaire à haut débit"
      ],
      "requiredKeywords": [
          [
              "malformation",
              "mav",
              "angiome",
              "hemangiome",
              "vasculaire"
          ],
          [
              "arterio-veineuse",
              "vasculaire",
              "paravertebral",
              "paravertebrale",
              "lombaire",
              "intramusculaire"
          ]
      ],
      "distractors": [
          "Schwannome kystique paravertébral",
          "Sarcome alvéolaire des parties molles",
          "Abcès paravertébral",
          "Hématome intramusculaire"
      ],
      "keySigns": [
          "Structures tubulaires serpigineuses en vide de signal (flow voids) traduisant un flux rapide",
          "Prise de contraste intense et précoce du nidus vasculaire intramusculaire",
          "Respect de l'architecture musculaire adjacente sans effet de masse tumoral compact"
      ],
      "explanation": "La présence de vides de flux serpigineux (flow voids) au sein d'une lésion intramusculaire paravertébrale fortement rehaussée signe une malformation vasculaire à flux rapide (malformation artério-veineuse)."
  },
  {
      "id": "mail-08",
      "title": "Cas Imagerie #08",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 1,
      "image": "./figures/mails/mail-08.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion médullaire du condyle fémoral délimitée par un liseré serpigineux en carte de géographie avec signe du double liseré en T2.",
      "diagnosis": "Infarctus osseux (ostéonécrose) du condyle fémoral",
      "synonyms": [
          "Ostéonécrose aseptique du condyle fémoral",
          "Infarctus osseux du genou",
          "Infarctus osseux métaphyso-épiphysaire fémoral",
          "Ostéonécrose du fémur distal"
      ],
      "requiredKeywords": [
          [
              "infarctus",
              "osteonecrose",
              "necrose"
          ],
          [
              "osseux",
              "condyle",
              "femoral",
              "femur",
              "genou"
          ]
      ],
      "distractors": [
          "Enchondrome fémoral distal",
          "Chondrosarcome de bas grade",
          "Ostéochondrite disséquante",
          "Fracture sous-chondrale par insuffisance"
      ],
      "keySigns": [
          "Contour serpigineux en « carte de géographie » typique d'une nécrose ischémique",
          "Signe du double liseré (double line sign) en T2 associant un liseré externe hypo-intense de sclérose et interne hyperintense de granulation",
          "Persistance d'un signal médullaire graisseux au centre de la lésion"
      ],
      "explanation": "L'infarctus osseux se reconnaît immédiatement en IRM par sa bordure serpigineuse en carte de géographie et son centre de signal graisseux préservé, à la différence de l'enchondrome dont la matrice est lobulée en franc hypersignal T2."
  },
  {
      "id": "mail-09",
      "title": "Cas Imagerie #09",
      "region": "dysostose",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-09.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse tissulaire fusiforme développée dans la paroi abdominale antéro-latérale entre les muscles obliques, fortement rehaussée après injection.",
      "diagnosis": "Tumeur desmoïde (fibromatose profonde) de la paroi abdominale",
      "synonyms": [
          "Fibromatose desmoïde de la paroi abdominale",
          "Tumeur desmoïde pariétale",
          "Fibromatose profonde abdominale",
          "Desmoïde de la paroi abdominale"
      ],
      "requiredKeywords": [
          [
              "desmoide",
              "fibromatose"
          ],
          [
              "paroi",
              "abdominale",
              "parietale",
              "oblique",
              "profonde"
          ]
      ],
      "distractors": [
          "Hématome de la gaine des grands droits",
          "Endométriome pariétal",
          "Sarcome des tissus mous",
          "Schwannome intercostal"
      ],
      "keySigns": [
          "Masse intermusculaire bien limitée mais effilée le long des aponévroses des muscles obliques (fascial tail sign)",
          "Rehaussement intense sur la séquence T1 Dixon injectée avec bandes fibreuses internes hypo-intenses",
          "Topographie élective dans la paroi abdominale antéro-latérale"
      ],
      "explanation": "La paroi abdominale est le site de prédilection des tumeurs desmoïdes (fibromatoses profondes), caractérisées en IRM par un rehaussement soutenu, des bandes collagènes hypo-intenses et un raccordement aponévrotique."
  },
  {
      "id": "mail-10",
      "title": "Cas Imagerie #10",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-10.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion intramusculaire bien limitée de la jambe en franc hypersignal T2 pseudo-liquidien mais présentant un rehaussement interne hétérogène après injection.",
      "diagnosis": "Myxome intramusculaire de la jambe",
      "synonyms": [
          "Myxome intramusculaire",
          "Tumeur myxoïde bénigne intramusculaire",
          "Myxome des parties molles de la jambe"
      ],
      "requiredKeywords": [
          [
              "myxome",
              "myxoide"
          ],
          [
              "intramusculaire",
              "jambe",
              "parties molles"
          ]
      ],
      "distractors": [
          "Kyste synovial intramusculaire",
          "Schwannome kystique",
          "Liposarcome myxoïde",
          "Myxofibrosarcome"
      ],
      "keySigns": [
          "Franc hypersignal T2 homogène pseudo-kystique à contours nets sous-aponévrotiques",
          "Fin liseré d'atrophie graisseuse périlésionnelle et œdème musculaire aux pôles",
          "Rehaussement interne nuageux ou septé après injection éliminant un simple kyste"
      ],
      "explanation": "Le myxome intramusculaire simule un kyste en pondération T2 par son hypersignal très marqué lié au stroma myxoïde, mais s'en distingue par son rehaussement interne après injection de gadolinium."
  },
  {
      "id": "mail-11",
      "title": "Cas Imagerie #11",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-11.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion ostéolytique épiphyso-métaphysaire excentrée du tibia proximal récidivant en périphérie d'une cavité de curetage-comblement.",
      "diagnosis": "Récidive locale de tumeur à cellules géantes (TCG) du tibia proximal",
      "synonyms": [
          "Tumeur à cellules géantes du tibia proximal",
          "Récidive de TCG osseuse du genou",
          "TCG épiphyso-métaphysaire tibiale",
          "Tumeur à cellules géantes"
      ],
      "requiredKeywords": [
          [
              "cellules geantes",
              "tcg"
          ],
          [
              "tibia",
              "genou",
              "recidive",
              "epiphyse",
              "epiphysaire"
          ]
      ],
      "distractors": [
          "Chondroblastome épiphysaire",
          "Kyste osseux anévrismal primitif",
          "Ostéosarcome télangiectasique",
          "Granulome réparateur"
      ],
      "keySigns": [
          "Siège épiphyso-métaphysaire excentré au contact direct de l'os sous-chondral du plateau tibial",
          "Plage tissulaire ostéolytique récidivante en bordure du matériel de comblement",
          "Signal intermédiaire T1/T2 avec composantes hémorragiques ou kystiques secondaires"
      ],
      "explanation": "La tumeur à cellules géantes (TCG) siège typiquement en région épiphyso-métaphysaire au contact du cartilage articulaire autour du genou ; la récidive locale après curetage se traduit par une ostéolyse tissulaire évolutive en bordure du comblement."
  },
  {
      "id": "mail-12",
      "title": "Cas Imagerie #12",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-12.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Volumineuse masse profonde hétérogène et nécrotique de la racine de la cuisse à croissance rapide sur trajet nerveux.",
      "diagnosis": "Tumeur maligne des gaines des nerfs périphériques (MPNST) de la racine de la cuisse",
      "synonyms": [
          "MPNST de la cuisse",
          "Schwannome malin",
          "Sarcome neurogène",
          "Neurofibrosarcome",
          "Tumeur maligne des gaines nerveuses"
      ],
      "requiredKeywords": [
          [
              "mpnst",
              "maligne des gaines",
              "schwannome malin",
              "neurofibrosarcome",
              "sarcome neurogene"
          ],
          [
              "nerf",
              "nerfs",
              "cuisse",
              "hanche",
              "mpnst"
          ]
      ],
      "distractors": [
          "Schwannome bénin",
          "Léiomyosarcome profond",
          "Liposarcome pléomorphe",
          "Hématome sous anticoagulants"
      ],
      "keySigns": [
          "Volumineuse masse profonde de plus de 5 cm à contours lobulés et infiltrants",
          "Signal fortement hétérogène avec plages de nécrose centrale et perte du signe de la cible",
          "Œdème périlésionnel et effacement des plans graisseux de clivage"
      ],
      "explanation": "Une grande taille (> 5 cm), l'hétérogénéité nécrotique, l'œdème périlésionnel et la disparition du target sign doivent faire suspecter une transformation en tumeur maligne des gaines des nerfs périphériques (MPNST)."
  },
  {
      "id": "mail-13",
      "title": "Cas Imagerie #13",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-13.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion lobulée en franc hypersignal T2 développée à la surface antérieure du tibia proximal avec extension intra-articulaire dans la cavité synoviale.",
      "diagnosis": "Tumeur cartilagineuse de surface du tibia proximal (chondrome / chondrosarcome périosté)",
      "synonyms": [
          "Chondrosarcome périosté du tibia proximal",
          "Chondrome périosté du tibia",
          "Tumeur cartilagineuse juxta-corticale du genou",
          "Chondrosarcome de surface"
      ],
      "requiredKeywords": [
          [
              "chondrome",
              "chondrosarcome",
              "cartilagineuse"
          ],
          [
              "surface",
              "perioste",
              "juxta-cortical",
              "tibia",
              "genou"
          ]
      ],
      "distractors": [
          "Chondromatose synoviale primitive",
          "Ostéosarcome parostéal",
          "Kyste prétibial",
          "Tumeur à cellules géantes des gaines"
      ],
      "keySigns": [
          "Architecture plurilobulée en franc hypersignal T2 caractéristique d'une matrice hyaline cartilagineuse",
          "Implantation sur la corticale antérieure du tibia proximal avec scalloping cortical",
          "Contiguïté et envahissement du récessus articulaire antérieur du genou"
      ],
      "explanation": "Les tumeurs cartilagineuses de surface (chondrome ou chondrosarcome périosté) forment des masses lobulées en hypersignal T2 adossées à la corticale externe avec érosion en cupule (scalloping)."
  },
  {
      "id": "mail-14",
      "title": "Cas Imagerie #14",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-14.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse arrondie des parties molles glutéales présentant un centre liquidien/nécrotique non rehaussé et une paroi épaisse prenant intensément le contraste.",
      "diagnosis": "Masse nécrotique des parties molles glutéales à rehaussement annulaire (métastase nécrotique / abcès)",
      "synonyms": [
          "Métastase musculaire nécrotique de la fesse",
          "Masse kystisée ou nécrotique glutéale",
          "Lésion secondaire nécrotique des parties molles glutéales",
          "Collection ou tumeur nécrotique de la fesse"
      ],
      "requiredKeywords": [
          [
              "necrotique",
              "metastase",
              "abces",
              "collection",
              "masse"
          ],
          [
              "gluteal",
              "gluteale",
              "fesse",
              "parties molles"
          ]
      ],
      "distractors": [
          "Lipome simple",
          "Bursite trochantérienne",
          "Schwannome bénin",
          "Fibromatose"
      ],
      "keySigns": [
          "Lésion intramusculaire glutéale à centre en hypersignal T2 et hyposignal T1 non rehaussé",
          "Couronne périphérique épaisse et irrégulière prenant fortement le contraste après injection",
          "Infiltration œdémateuse des fibres musculaires adjacentes"
      ],
      "explanation": "Une masse intramusculaire glutéale à rehaussement périphérique annulaire épais peut correspondre à une localisation secondaire nécrotique, un sarcome nécrosé ou un abcès/hématome surinfecté et requiert une ponction-biopsie."
  },
  {
      "id": "mail-15",
      "title": "Cas Imagerie #15",
      "region": "dysostose",
      "modality": "Arthroscanner / TDM",
      "difficulty": 1,
      "image": "./figures/mails/mail-15.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion parenchymateuse focale spiculée du lobe supérieur gauche en fenêtre pulmonaire.",
      "diagnosis": "Nodule pulmonaire apical gauche suspect (adénocarcinome / lésion secondaire)",
      "synonyms": [
          "Nodule pulmonaire spiculé du lobe supérieur gauche",
          "Lésion pulmonaire apicale suspecte",
          "Cancer bronchopulmonaire apical gauche",
          "Nodule pulmonaire suspect"
      ],
      "requiredKeywords": [
          [
              "nodule",
              "masse",
              "lesion",
              "cancer",
              "adenocarcinome",
              "metastase"
          ],
          [
              "pulmonaire",
              "poumon",
              "apical",
              "lobe superieur",
              "thoracique"
          ]
      ],
      "distractors": [
          "Pneumothorax apical",
          "Bulle d'emphysème",
          "Atelectasie par enroulement",
          "Hamartochondrome calcifié"
      ],
      "keySigns": [
          "Nodule tissulaire dense du sommet pulmonaire gauche en fenêtre parenchymateuse",
          "Contours irréguliers et spiculés avec attraction pleurale",
          "Absence de calcification bénigne centrale"
      ],
      "explanation": "En bilan d'extension thoracique, un nodule pulmonaire apical à contours irréguliers et spiculés est suspect de néoplasie primitive ou secondaire."
  },
  {
      "id": "mail-16",
      "title": "Cas Imagerie #16",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 1,
      "image": "./figures/mails/mail-16.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Nodule tissulaire en goutte d'eau en hyposignal T1/T2 situé dans le 3e espace intermétatarsien du côté plantaire.",
      "diagnosis": "Névrome de Morton du 3e espace intermétatarsien",
      "synonyms": [
          "Névrome de Morton",
          "Maladie de Morton",
          "Fibrose périneurale intermétatarsienne",
          "Morton du 3e espace"
      ],
      "requiredKeywords": [
          [
              "morton",
              "nevrome"
          ],
          [
              "morton",
              "intermetatarsien",
              "pied",
              "3e espace",
              "avant-pied"
          ]
      ],
      "distractors": [
          "Bursite intermétatarsienne isolée",
          "Fracture de fatigue métatarsienne",
          "Rupture de la plaque plantaire",
          "Maladie de Freiberg"
      ],
      "keySigns": [
          "Nodule en forme de goutte ou de sablier dans le 3e espace intermétatarsien faisant saillie vers le versant plantaire",
          "Hyposignal T1 et hyposignal à signal intermédiaire T2 lié à la fibrose périneurale",
          "Développement sous le ligament intermétatarsien transverse profond"
      ],
      "explanation": "Le névrome de Morton est une fibrose périneurale non tumorale du nerf digital plantaire commun, siégeant préférentiellement dans le 3e puis le 2e espace intermétatarsien, typiquement en hyposignal T1 et T2 sur les coupes coronales."
  },
  {
      "id": "mail-17",
      "title": "Cas Imagerie #17",
      "region": "genou",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-17.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Petite lacune corticale hyperfixante de moins de 15 mm du tibia proximal entourée d'une ostéosclérose réactionnelle.",
      "diagnosis": "Ostéome ostéoïde cortical du tibia proximal",
      "synonyms": [
          "Ostéome ostéoïde du tibia",
          "Ostéome ostéoïde",
          "Nidus d'ostéome ostéoïde tibial"
      ],
      "requiredKeywords": [
          [
              "osteome"
          ],
          [
              "osteoide"
          ]
      ],
      "distractors": [
          "Abcès de Brodie",
          "Fracture de fatigue tibiale",
          "Ostéoblastome",
          "Enostose (îlot condensant)"
      ],
      "keySigns": [
          "Nidus ostéolytique intracortical rond bien limité de moins de 15 mm",
          "Hyperfixation focale intense en « spot » sur l'imagerie métabolique couplée",
          "Ostéosclérose corticale réactionnelle périlésionnelle"
      ],
      "explanation": "L'ostéome ostéoïde associe un petit nidus radiotransparent (< 15 mm, souvent centré par une calcification) au sein d'une corticale épaissie et condensée, avec hyperfixation intense en scintigraphie ou TEP."
  },
  {
      "id": "mail-18",
      "title": "Cas Imagerie #18",
      "region": "jambe-cheville-pied",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-18.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Petit nidus sous-périosté / cortical du col du talus avec calcification centrale au scanner.",
      "diagnosis": "Ostéome ostéoïde du col du talus (astragale)",
      "synonyms": [
          "Ostéome ostéoïde de l'astragale",
          "Ostéome ostéoïde du talus",
          "Ostéome ostéoïde intra-articulaire de la cheville",
          "Ostéome ostéoïde"
      ],
      "requiredKeywords": [
          [
              "osteome"
          ],
          [
              "osteoide",
              "talus",
              "astragale"
          ]
      ],
      "distractors": [
          "Lésion ostéochondrale du dôme talien",
          "Conflit antérieur de cheville",
          "Fracture parcellaire du col du talus",
          "Chondroblastome du talus"
      ],
      "keySigns": [
          "Nidus arrondi infracentimétrique niché à la face dorsale du col du talus",
          "Calcification centrale punctiforme en cocarde au sein du nidus",
          "Sclérose périphérique modérée typique des localisations intra-articulaires"
      ],
      "explanation": "Le col du talus est la localisation classique de l'ostéome ostéoïde au pied ; sa situation intra-articulaire explique la faible ostéosclérose réactionnelle et la présentation clinique pseudo-arthritique."
  },
  {
      "id": "mail-19",
      "title": "Cas Imagerie #19",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 1,
      "image": "./figures/mails/mail-19.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion ostéolytique pure détruisant les corticales de l'aile iliaque gauche avec masse des parties molles.",
      "diagnosis": "Métastase osseuse ostéolytique de l'aile iliaque (lésion secondaire / plasmocytome)",
      "synonyms": [
          "Lésion ostéolytique secondaire de l'os iliaque",
          "Métastase osseuse du bassin",
          "Plasmocytome de l'aile iliaque",
          "Métastase iliaque"
      ],
      "requiredKeywords": [
          [
              "metastase",
              "secondaire",
              "osteolyse",
              "osteolytique",
              "plasmocytome"
          ],
          [
              "iliaque",
              "bassin",
              "os"
          ]
      ],
      "distractors": [
          "Dysplasie fibreuse iliaque",
          "Enchondrome de l'aile iliaque",
          "Maladie de Paget",
          "Ostéome iliaque"
      ],
      "keySigns": [
          "Destruction ostéolytique de l'aile iliaque gauche avec rupture des deux tables corticales",
          "Contingent tissulaire envahissant les muscles iliaque et glutéaux",
          "Absence de liséré de sclérose périphérique"
      ],
      "explanation": "Une ostéolyse destructrice de l'aile iliaque avec effraction corticale et masse tissulaire chez l'adulte correspond en premier lieu à une métastase osseuse (rein, thyroïde, poumon, sein) ou à un plasmocytome."
  },
  {
      "id": "mail-20",
      "title": "Cas Imagerie #20",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-20.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Tassement vertébral pathologique de T3 avec recul du mur postérieur, épidurite et lésions médullaires focales multiples.",
      "diagnosis": "Localisation vertébrale de myélome multiple avec fracture pathologique de T3 et épidurite",
      "synonyms": [
          "Myélome multiple avec tassement pathologique dorsal",
          "Fracture vertébrale pathologique sur myélome ou métastase",
          "Tassement malin de T3 avec épidurite",
          "Plasmocytome vertébral compliqué de fracture"
      ],
      "requiredKeywords": [
          [
              "myelome",
              "plasmocytome",
              "metastase",
              "pathologique",
              "malin"
          ],
          [
              "fracture",
              "tassement",
              "vertebrale",
              "epidurite",
              "t3",
              "rachis"
          ]
      ],
      "distractors": [
          "Fracture ostéoporotique bénigne",
          "Spondylodiscite infectieuse",
          "Hémangiome vertébral typique",
          "Maladie de Scheuermann"
      ],
      "keySigns": [
          "Perte de hauteur corporéale globale avec bombement convexe du mur postérieur dans le canal",
          "Remplacement complet du signal graisseux médullaire normal et extension aux pédicules",
          "Masse épidurale antérieure réduisant le calibre du canal thoracique"
      ],
      "explanation": "Le bombement convexe du mur postérieur, l'envahissement pédiculaire et l'épidurite tissulaire sont les signes majeurs d'une fracture vertébrale pathologique (myélome multiple ou métastase)."
  },
  {
      "id": "mail-21",
      "title": "Cas Imagerie #21",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-21.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion bien limitée en franc hypersignal T2 et hyposignal T1 située dans les parties molles profondes de la région glutéale.",
      "diagnosis": "Lésion kystique ou myxoïde profonde des parties molles glutéales (kyste / myxome / schwannome)",
      "synonyms": [
          "Masse kystique ou myxoïde de la région glutéale",
          "Myxome intramusculaire glutéal",
          "Kyste profond de la fesse",
          "Lésion myxoïde glutéale"
      ],
      "requiredKeywords": [
          [
              "kyste",
              "kystique",
              "myxome",
              "myxoide",
              "bursite"
          ],
          [
              "gluteal",
              "gluteale",
              "fesse",
              "hanche",
              "parties molles"
          ]
      ],
      "distractors": [
          "Lipome profond",
          "Tumeur desmoïde",
          "Tumeur à cellules géantes",
          "Myosite ossifiante"
      ],
      "keySigns": [
          "Lésion ovoïde bien circonscrite en franc hypersignal T2 et hyposignal T1",
          "Localisation profonde dans la loge glutéale",
          "Nécessité de séquences injectées pour différencier un kyste vrai d'une tumeur myxoïde"
      ],
      "explanation": "Devant une lésion en franc hypersignal T2 pseudo-liquidien des parties molles profondes glutéales, l'injection de gadolinium est indispensable pour distinguer une formation kystique pure (bursite, kyste synovial) d'une tumeur riche en matrice myxoïde."
  },
  {
      "id": "mail-22",
      "title": "Cas Imagerie #22",
      "region": "rachis",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-22.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Ostéolyse du corps vertébral postéro-latéral droit et du pédicule droit de L2 au scanner.",
      "diagnosis": "Métastase ostéolytique vertébrale avec atteinte pédiculaire droite (L2)",
      "synonyms": [
          "Lésion ostéolytique secondaire de L2",
          "Métastase vertébrale lombaire ostéolytique",
          "Ostéolyse corporéo-pédiculaire maligne",
          "Métastase rachidienne"
      ],
      "requiredKeywords": [
          [
              "metastase",
              "secondaire",
              "osteolyse",
              "osteolytique",
              "lytique"
          ],
          [
              "vertebrale",
              "vertebre",
              "pedicule",
              "pediculaire",
              "lombaire",
              "l2",
              "rachis"
          ]
      ],
      "distractors": [
          "Hernie intraspongieuse de Schmorl",
          "Hémangiome vertébral en grille",
          "Ostéome ostéoïde de l'arc postérieur",
          "Spondylolyse isthmique"
      ],
      "keySigns": [
          "Plage d'ostéolyse géographique détruisant la partie postéro-droite du corps vertébral et la base du pédicule droit",
          "Rupture de la corticale postérieure au contact du foramen et du canal rachidien",
          "Signe classique de la vertèbre borgne en radiographie par atteinte pédiculaire"
      ],
      "explanation": "L'envahissement ostéolytique d'un pédicule vertébral est hautement évocateur d'une lésion maligne (métastase ou myélome) car l'arc postérieur est exceptionnellement touché dans les processus bénins."
  },
  {
      "id": "mail-23",
      "title": "Cas Imagerie #23",
      "region": "rachis",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-23.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Reconstruction sagittale TDM montrant une ostéolyse avec fracture-tassement de L1 à risque d'instabilité.",
      "diagnosis": "Fracture pathologique de L1 sur métastase ostéolytique vertébrale",
      "synonyms": [
          "Tassement vertébral pathologique de L1",
          "Métastase ostéolytique de L1 fracturée",
          "Fracture maligne de la charnière thoraco-lombaire",
          "Lésion secondaire de L1"
      ],
      "requiredKeywords": [
          [
              "fracture",
              "tassement",
              "metastase",
              "osteolyse",
              "pathologique"
          ],
          [
              "l1",
              "vertebrale",
              "vertebre",
              "rachis",
              "lombaire"
          ]
      ],
      "distractors": [
          "Spondylodiscite infectieuse",
          "Maladie de Paget vertébrale",
          "Angiome vertébral",
          "Bloc vertébral congénital"
      ],
      "keySigns": [
          "Ostéolyse étendue du corps vertébral de L1 avec effondrement du plateau supérieur",
          "Amincissement du mur postérieur à la charnière thoraco-lombaire",
          "Indication typique de cimentoplastie / vertébroplastie à visée antalgique et consolidatrice"
      ],
      "explanation": "Les métastases ostéolytiques de la charnière thoraco-lombaire (T12-L1) sont soumises à de fortes contraintes mécaniques et relèvent volontiers d'une cimentoplastie percutanée pour prévenir le collapsus vertébral."
  },
  {
      "id": "mail-24",
      "title": "Cas Imagerie #24",
      "region": "rachis",
      "modality": "Arthroscanner / TDM",
      "difficulty": 3,
      "image": "./figures/mails/mail-24.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion expansive de l'aileron sacré gauche au contact des foramens sacrés avec minéralisation matricielle interne.",
      "diagnosis": "Tumeur osseuse de l'aileron sacré gauche (chordome / chondrosarcome / métastase)",
      "synonyms": [
          "Lésion ostéolytique minéralisée de l'aileron sacré",
          "Tumeur sacrée (chordome ou chondrosarcome)",
          "Métastase ou tumeur primitive du sacrum",
          "Lésion osseuse du sacrum"
      ],
      "requiredKeywords": [
          [
              "tumeur",
              "lesion",
              "chordome",
              "chondrosarcome",
              "metastase",
              "osteolyse"
          ],
          [
              "sacre",
              "sacree",
              "sacrum",
              "aileron"
          ]
      ],
      "distractors": [
          "Kyste de Tarlov simple",
          "Fracture en H du sacrum",
          "Sacro-iliite infectieuse",
          "Ostéite condensante iliaque"
      ],
      "keySigns": [
          "Lésion ostéolytique de 36 mm de l'aileron sacré gauche distincte des kystes méningés de Tarlov",
          "Présence de calcifications matricielles internes et soufflure corticale",
          "Indication formelle de biopsie osseuse sous contrôle TDM"
      ],
      "explanation": "Contrairement aux kystes de Tarlov purement liquidiens qui remodèlent les foramens sacrés, une lésion tissulaire de l'aileron sacré contenant des minéralisations matricielles impose une biopsie sous scanner."
  },
  {
      "id": "mail-25",
      "title": "Cas Imagerie #25",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-25.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion centromédullaire bien limitée du col et de la région intertrochantérienne du fémur proximal, remaniée après curetage-biopsie.",
      "diagnosis": "Kyste osseux essentiel (unicaméral) du fémur proximal",
      "synonyms": [
          "Kyste osseux essentiel du col fémoral",
          "Kyste osseux solitaire du fémur proximal",
          "Kyste unicaméral du fémur",
          "Kyste essentiel"
      ],
      "requiredKeywords": [
          [
              "kyste"
          ],
          [
              "essentiel",
              "solitaire",
              "unicameral",
              "femur",
              "femoral",
              "col"
          ]
      ],
      "distractors": [
          "Dysplasie fibreuse monostotique",
          "Tumeur à cellules géantes",
          "Chondrosarcome",
          "Ostéonécrose de la tête fémorale"
      ],
      "keySigns": [
          "Lésion géographique centrale métaphysaire supérieure du fémur à contours nets",
          "Signal kystique remanié avec respect des corticales",
          "Localisation fémorale proximale représentant le 2e site le plus fréquent après l'humérus proximal"
      ],
      "explanation": "Le fémur proximal (col et région intertrochantérienne) est avec l'humérus proximal le siège électif du kyste osseux essentiel (unicaméral), lésion bénigne exposant au risque de fracture pathologique."
  },
  {
      "id": "mail-26",
      "title": "Cas Imagerie #26",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-26.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Structure tubulaire dilatée non réductible de la voûte plantaire présentant un défaut de rehaussement endoluminal et une prise de contraste pariétale en T1 Fat-Sat injecté.",
      "diagnosis": "Thrombose des veines plantaires",
      "synonyms": [
          "Thrombose veineuse plantaire",
          "Phlébite des veines plantaires",
          "Thrombose de veine plantaire latérale",
          "Thrombose veineuse profonde du pied"
      ],
      "requiredKeywords": [
          [
              "thrombose",
              "phlebite"
          ],
          [
              "veine",
              "veines",
              "veineuse",
              "plantaire",
              "plantaires",
              "pied"
          ]
      ],
      "distractors": [
          "Aponévrosite plantaire aiguë",
          "Maladie de Ledderhose (fibromatose plantaire)",
          "Schwannome du nerf plantaire",
          "Déchirure du court fléchisseur des orteils"
      ],
      "keySigns": [
          "Élargissement du calibre des veines plantaires dans le pédicule vasculo-nerveux plantaire",
          "Défaut d'opacification endoluminal (thrombus) entouré d'un rehaussement pariétal en rail ou en cocarde sur le T1 Fat-Sat injecté",
          "Œdème inflammatoire de la graisse et des muscles plantaires périvasculaires"
      ],
      "explanation": "La thrombose des veines plantaires est une cause méconnue de talalgie ou de douleur plantaire aiguë (favorisée par l'effort ou une néoplasie) ; en IRM injectée, la veine thrombosée est élargie avec un thrombus central hypo-intense cerné par une paroi rehaussée."
  },
  {
      "id": "mail-27",
      "title": "Cas Imagerie #27",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-27.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Amas en hyposignal T1/T2 péri-articulaire plantaire et médial de la 1re articulation métatarso-phalangienne entouré d'un œdème inflammatoire intense des tissus mous.",
      "diagnosis": "Résorption aiguë de calcification péri-articulaire de l'hallux (rhumatisme à hydroxyapatite)",
      "synonyms": [
          "Périarthrite calcifiante aiguë de la MTP1 (hallux)",
          "Résorption de calcification de l'hallux",
          "Crise aiguë microcristalline à hydroxyapatite de l'hallux",
          "Tendinopathie ou bursite calcifiante en résorption de l'hallux"
      ],
      "requiredKeywords": [
          [
              "calcification",
              "calcifiante",
              "hydroxyapatite",
              "apatite"
          ],
          [
              "resorption",
              "hallux",
              "mtp1",
              "orteil",
              "peri-articulaire",
              "panniculite"
          ]
      ],
      "distractors": [
          "Arthrite septique de la MTP1",
          "Fracture des sésamoïdes",
          "Névrome de Joplin",
          "Tumeur à cellules géantes des gaines"
      ],
      "keySigns": [
          "Dépôt calcique péri-articulaire en franc hyposignal T1 et T2 auxcontours flous en voie de fragmentation",
          "Œdème inflammatoire locorégional majeur des tissus mous plantaires (pseudo-cellulite / panniculite)",
          "Respect de l'interligne articulaire métatarso-phalangien éliminant une arthrite septique"
      ],
      "explanation": "La résorption aiguë d'un dépôt d'hydroxyapatite péri-articulaire autour de la MTP1 (pseudo-podagre à apatite) provoque une réaction inflammatoire œdémateuse explosive des parties molles pouvant mimer une arthrite septique ou une crise de goutte."
  },
  {
      "id": "mail-28",
      "title": "Cas Imagerie #28",
      "region": "epaule",
      "modality": "Arthroscanner / TDM",
      "difficulty": 1,
      "image": "./figures/mails/mail-28.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Solution de continuité osseuse transversale à travers le greffon coracoïdien fixé à la face antéro-inférieure de la glène par des vis.",
      "diagnosis": "Fracture-pseudarthrose de butée coracoïdienne (intervention de Latarjet)",
      "synonyms": [
          "Fracture de butée d'épaule",
          "Pseudarthrose de butée de Latarjet",
          "Fracture de la butée coracoïdienne",
          "Complication mécanique de butée de Latarjet"
      ],
      "requiredKeywords": [
          [
              "fracture",
              "pseudarthrose",
              "lyse"
          ],
          [
              "butee",
              "latarjet",
              "coracoidienne",
              "coracoide"
          ]
      ],
      "distractors": [
          "Fracture de Bankart osseux native",
          "Fracture de l'acromion",
          "Luxation gléno-humérale postérieure",
          "Ostéonécrose de la tête humérale"
      ],
      "keySigns": [
          "Trait de fracture net séparant le greffon coracoïdien en deux fragments au niveau du passage de la vis",
          "Défaut de fusion osseuse entre la butée et le col antérieur de la glène",
          "Évaluation optimale en TDM multiplanaires avec réduction des artefacts métalliques"
      ],
      "explanation": "Le scanner est l'examen de référence pour analyser les complications des butées coracoïdiennes de Latarjet : fracture du greffon, pseudarthrose fibreuse, ostéolyse ou conflit entre les vis et la tête humérale."
  },
  {
      "id": "mail-29",
      "title": "Cas Imagerie #29",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-29.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Lésion osseuse lytique expansive contenant des calcifications en arcs et anneaux (matrice cartilagineuse) compliquée d'une fracture pathologique avec cal.",
      "diagnosis": "Chondrosarcome compliqué de fracture pathologique",
      "synonyms": [
          "Chondrosarcome",
          "Tumeur cartilagineuse maligne avec fracture pathologique",
          "Chondrosarcome osseux"
      ],
      "requiredKeywords": [
          [
              "chondrosarcome",
              "tumeur cartilagineuse maligne"
          ],
          [
              "chondrosarcome",
              "cartilagineuse",
              "fracture"
          ]
      ],
      "distractors": [
          "Enchondrome bénin non compliqué",
          "Dysplasie fibreuse",
          "Infarctus osseux",
          "Métastase ostéocondensante"
      ],
      "keySigns": [
          "Calcifications matricielles cartilagineuses typiques en arcs, anneaux et flocons (pop-corn)",
          "Érosion endostéale profonde (scalloping > 2/3 de la corticale) et ostéolyse perméative",
          "Solution de continuité corticale avec réaction périostée et cal osseux sur fracture pathologique"
      ],
      "explanation": "L'association d'une matrice minéralisée cartilagineuse (arcs et anneaux) à un scalloping endostéal profond, un élargissement médullaire et une fracture pathologique signe un chondrosarcome."
  },
  {
      "id": "mail-30",
      "title": "Cas Imagerie #30",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-30.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Coupe axiale IRM du poignet montrant le tendon extenseur ulnaire du carpe (ECU) sorti de sa gouttière osseuse ulnaire avec décollement du subsheath.",
      "diagnosis": "Instabilité (subluxation) et ténosynovite de l'extenseur ulnaire du carpe (ECU) par rupture du rétinaculum (Inoue type A)",
      "synonyms": [
          "Luxation ou subluxation du tendon ECU",
          "Instabilité de l'extenseur ulnaire du carpe",
          "Rupture du subsheath de l'ECU (Inoue A)",
          "Ténosynovite et instabilité de l'ECU"
      ],
      "requiredKeywords": [
          [
              "ecu",
              "extenseur ulnaire",
              "cubital posterieur"
          ],
          [
              "instabilite",
              "luxation",
              "subluxation",
              "retinaculum",
              "subsheath",
              "tenosynovite",
              "inoue"
          ]
      ],
      "distractors": [
          "Désinsertion fovéale du TFCC isolée",
          "Ténosynovite de De Quervain (1er compartiment)",
          "Syndrome du canal de Guyon",
          "Conflit ulno-carpien"
      ],
      "keySigns": [
          "Subluxation palmaire et médiale du tendon ECU en dehors de la gouttière dorsale de la tête ulnaire",
          "Rupture / avulsion du bord ulnaire de la gaine propre (subsheath) formant une poche de décollement (Inoue type A)",
          "Épanchement ténosynovial inflammatoire péritendineux"
      ],
      "explanation": "L'instabilité du tendon extenseur ulnaire du carpe (ECU) résulte d'une lésion de sa gaine fibro-osseuse propre (subsheath) ; dans le type A d'Inoue, le subsheath est rompu sur son versant ulnaire et le tendon se luxe sous une poche périostée décollée."
  },
  {
      "id": "mail-31",
      "title": "Cas Imagerie #31",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-31.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Œdème médullaire diffus de la tête et du col fémoral en T2 Fat-Sat avec fine ligne sous-chondrale hypo-intense parallèle au contour céphalique supérieur.",
      "diagnosis": "Algodystrophie de hanche (SDRC) / fracture sous-chondrale par insuffisance osseuse de la tête fémorale",
      "synonyms": [
          "Fracture sous-chondrale par insuffisance de la tête fémorale",
          "Syndrome douloureux régional complexe (SDRC) de la hanche",
          "Ostéoporose transitoire de la hanche",
          "Algodystrophie de la hanche",
          "Œdème médullaire transitoire de la tête fémorale"
      ],
      "requiredKeywords": [
          [
              "algodystrophie",
              "sdrc",
              "osteoporose transitoire",
              "fracture sous-chondrale",
              "insuffisance osseuse",
              "oedeme medullaire"
          ],
          [
              "hanche",
              "tete femorale",
              "femur",
              "sous-chondrale"
          ]
      ],
      "distractors": [
          "Ostéonécrose avasculaire séquellaire en séquestre",
          "Coxarthrose destructrice rapide",
          "Arthrite septique de hanche",
          "Chondromatose synoviale"
      ],
      "keySigns": [
          "Œdème médullaire extensif de la tête et du col fémoral en franc hypersignal T2 Fat-Sat",
          "Fine bande linéaire hypo-intense sous-chondrale parallèle à la lame osseuse sous-chondrale sans perte de sphéricité céphalique",
          "Absence de liseré de démarcation serpigineux en double ligne d'ostéonécrose constituée"
      ],
      "explanation": "Le spectre de l'œdème médullaire transitoire / SDRC (algodystrophie) de hanche et de la fracture sous-chondrale par insuffisance se caractérise par un œdème cervico-céphalique diffus avec sphéricité conservée et fine ligne d'impaction sous-chondrale."
  },
  {
      "id": "mail-32",
      "title": "Cas Imagerie #32",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-32.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Élargissement et hypersignal T2 centré sur le cartilage de croissance (physe) distal d'un métacarpien avec œdème métaphyso-épiphysaire de part et d'autre.",
      "diagnosis": "Fracture-décollement épiphysaire métacarpienne Salter-Harris type I",
      "synonyms": [
          "Salter I de métacarpe",
          "Épiphysiolyse métacarpienne Salter 1",
          "Fracture-décollement épiphysaire Salter I de la main",
          "Lésion physaire de contrainte Salter I"
      ],
      "requiredKeywords": [
          [
              "salter",
              "physe",
              "physaire",
              "epiphysaire",
              "decollement",
              "cartilage de croissance"
          ],
          [
              "metacarpe",
              "metacarpien",
              "metacarpienne",
              "main",
              "salter"
          ]
      ],
      "distractors": [
          "Maladie de Dieterich (ostéonécrose de la tête métacarpienne)",
          "Arthrite juvénile idiopathique",
          "Enchondrome métacarpien",
          "Fracture du col du 5e métacarpien de l'adulte"
      ],
      "keySigns": [
          "Élargissement et hypersignal T2 franc du cartilage de conjugaison (physe) métacarpien",
          "Œdème médullaire en miroir centré sur la physe et réaction périostée/capsulaire adjacente",
          "Absence de trait de refend métaphysaire ou épiphysaire définissant le type I de Salter-Harris"
      ],
      "explanation": "La fracture-décollement épiphysaire Salter-Harris de type I passe purement à travers le cartilage de croissance ; souvent occulte en radiographie standard en l'absence de déplacement, elle est révélée en IRM par un hypersignal T2 élargissant la physe avec œdème péri-physaire."
  },
  {
      "id": "mail-33",
      "title": "Cas Imagerie #33",
      "region": "epaule",
      "modality": "Radiographie",
      "difficulty": 1,
      "image": "./figures/mails/mail-33.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Résorption et irrégularité de l'extrémité latérale de la clavicule avec pseudo-élargissement de l'interligne acromio-claviculaire.",
      "diagnosis": "Ostéolyse distale de la clavicule (post-traumatique ou microtraumatique)",
      "synonyms": [
          "Ostéolyse de l'extrémité distale de la clavicule",
          "Ostéolyse acromio-claviculaire",
          "Arthropathie acromio-claviculaire avec ostéolyse claviculaire distale"
      ],
      "requiredKeywords": [
          [
              "osteolyse",
              "resorption"
          ],
          [
              "clavicule",
              "claviculaire",
              "acromio-claviculaire",
              "distale"
          ]
      ],
      "distractors": [
          "Luxation acromio-claviculaire stade IV",
          "Fracture du quart moyen de la clavicule",
          "Calcification du supra-épineux",
          "Os acromial"
      ],
      "keySigns": [
          "Érosions sous-chondrales, déminéralisation et résorption osseuse du versant claviculaire distal",
          "Pseudo-élargissement de l'espace articulaire acromio-claviculaire",
          "Respect relatif du versant acromial en regard"
      ],
      "explanation": "L'ostéolyse distale de la clavicule survient après un traumatisme acromio-claviculaire ou par microtraumatismes répétés (musculation, développé-couché) et se traduit par une résorption sous-chondrale du bord latéral de la clavicule."
  },
  {
      "id": "mail-34",
      "title": "Cas Imagerie #34",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-34.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Épaississement nodulaire et hypersignal de la poulie A1 en regard de la tête métacarpienne avec ténosynovite des fléchisseurs du doigt.",
      "diagnosis": "Doigt à ressaut (ténosynovite sténosante des fléchisseurs sur épaississement de la poulie A1)",
      "synonyms": [
          "Doigt à ressaut",
          "Ténosynovite sténosante de la poulie A1",
          "Conflit des fléchisseurs sous la poulie A1",
          "Poulie A1 épaissie (doigt à ressaut)"
      ],
      "requiredKeywords": [
          [
              "ressaut",
              "poulie a1",
              "tenosynovite"
          ],
          [
              "doigt",
              "flechisseur",
              "flechisseurs",
              "poulie",
              "ressaut",
              "stenosante"
          ]
      ],
      "distractors": [
          "Rupture de poulie A2 (doigt d'escalade)",
          "Maladie de Dupuytren",
          "Tumeur à cellules géantes de la gaine des fléchisseurs",
          "Arthrite métacarpo-phalangienne"
      ],
      "keySigns": [
          "Épaississement hypo-intense de la poulie annulaire A1 à la face palmaire de l'articulation métacarpo-phalangienne",
          "Infiltrat œdémateux et rehaussement péricapsulaire autour de la poulie A1",
          "Ténosynovite exsudative de la gaine des tendons fléchisseurs superficiel et profond en amont et en aval"
      ],
      "explanation": "Le doigt à ressaut est une ténosynovite sténosante mécanique liée à un épaississement fibrocartilagineux de la poulie A1 en regard de la tête métacarpienne, gênant le coulissement des tendons fléchisseurs."
  },
  {
      "id": "mail-35",
      "title": "Cas Imagerie #35",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-35.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Masse profonde intermusculaire de la paroi thoracique postérieure présentant des bandes hypo-intenses fibreuses et des prolongements aponévrotiques.",
      "diagnosis": "Tumeur desmoïde (fibromatose profonde) de la paroi thoracique dorsale",
      "synonyms": [
          "Fibromatose profonde du dos",
          "Tumeur desmoïde dorsale",
          "Fibromatose desmoïde paravertébrale / thoracique",
          "Tumeur desmoïde"
      ],
      "requiredKeywords": [
          [
              "desmoide",
              "fibromatose"
          ],
          [
              "desmoide",
              "fibromatose",
              "paroi",
              "dorsale",
              "dos",
              "thoracique",
              "profonde"
          ]
      ],
      "distractors": [
          "Élastofibrome dorsal sous-scapulaire",
          "Lipome profond",
          "Schwannome intercostal",
          "Hématome intramusculaire"
      ],
      "keySigns": [
          "Masse tissulaire sous-fasciale infiltrant les plans musculaires dorsaux",
          "Présence de bandes linéaires en franc hyposignal T1 et T2 correspondant aux faisceaux de collagène dense",
          "Prolongements effilés le long des fascias (fascial tail sign)"
      ],
      "explanation": "La fibromatose profonde (tumeur desmoïde) extra-abdominale touche volontiers la ceinture scapulaire et la paroi thoracique postérieure ; l'association de plages cellulaires hyperintenses et de bandes collagènes hypo-intenses en T2 est très évocatrice."
  },
  {
      "id": "mail-36",
      "title": "Cas Imagerie #36",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-36.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Atteinte inflammatoire et fissuraire de la plaque plantaire et du ligament collatéral de la 2e articulation métatarso-phalangienne avec synovite.",
      "diagnosis": "Syndrome douloureux du 2e rayon avec lésion de la plaque plantaire de MTP2",
      "synonyms": [
          "Rupture de la plaque plantaire du 2e rayon",
          "Syndrome d'instabilité de la MTP2 (plaque plantaire)",
          "Syndrome du deuxième rayon (plaque plantaire)",
          "Fissuration de la plaque plantaire de MTP2"
      ],
      "requiredKeywords": [
          [
              "plaque plantaire",
              "2e rayon",
              "deuxieme rayon",
              "mtp2",
              "mtp 2"
          ],
          [
              "plaque",
              "plantaire",
              "rayon",
              "mtp2",
              "mtp 2",
              "synovite"
          ]
      ],
      "distractors": [
          "Maladie de Freiberg (ostéonécrose de la tête de M2)",
          "Fracture de fatigue de la diaphyse de M2",
          "Goutte métatarso-phalangienne",
          "Aponévrosite plantaire"
      ],
      "keySigns": [
          "Hypersignal et défect de l'insertion distale latérale de la plaque plantaire sous la tête du 2e métatarsien",
          "Atteinte associée du ligament collatéral latéral et synovite mécanique de la MTP2",
          "Péricapsulite fibrosante pseudotumorale dans l'espace intermétatarsien adjacent"
      ],
      "explanation": "Le syndrome d'instabilité du 2e rayon (souvent favorisé par une insuffisance du 1er rayon sur hallux valgus) débute par une synovite et une distension/rupture de la plaque plantaire et du ligament collatéral latéral de MTP2."
  },
  {
      "id": "mail-37",
      "title": "Cas Imagerie #37",
      "region": "epaule",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-37.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Épaississement et hypersignal œdémateux du ligament gléno-huméral inférieur (récessus axillaire) et comblement de l'intervalle des rotateurs dans les suites d'une fracture du tubercule majeur.",
      "diagnosis": "Capsulite rétractile de l'épaule (post-fracture du tubercule majeur)",
      "synonyms": [
          "Capsulite rétractile de l'épaule",
          "Épaule gelée",
          "Capsulite adhésive gléno-humérale",
          "Capsulite post-traumatique de l'épaule"
      ],
      "requiredKeywords": [
          [
              "capsulite",
              "epaule gelee"
          ],
          [
              "capsulite",
              "retractile",
              "adhesive",
              "epaule",
              "lgih",
              "intervalle"
          ]
      ],
      "distractors": [
          "Rupture transfixiante du supra-épineux",
          "Arthrite septique gléno-humérale",
          "Luxation gléno-humérale inférieure",
          "Tendinopathie calcifiante"
      ],
      "keySigns": [
          "Épaississement (> 4 mm) et franc hypersignal T2 Fat-Sat de la capsule inférieure (ligament gléno-huméral inférieur au récessus axillaire)",
          "Infiltration inflammatoire oblitérant le triangle graisseux de l'intervalle des rotateurs et l'espace sous-coracoïdien",
          "Remaniements osseux consolidés du tubercule majeur (trochiter)"
      ],
      "explanation": "La capsulite rétractile secondaire se traduit en IRM par la triade : épaississement œdémateux du récessus axillaire (LGHI), oblitération inflammatoire de l'intervalle des rotateurs et rétraction capsulaire."
  },
  {
      "id": "mail-38",
      "title": "Cas Imagerie #38",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-38.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Hypersignal T2 Fat-Sat œdémateux focal au sein des corps musculaires des muscles lombricaux dans la paume de la main.",
      "diagnosis": "Déchirure / désinsertion des muscles lombricaux de la main (lésion de grimpeur)",
      "synonyms": [
          "Rupture des muscles lombricaux de la main",
          "Lésion musculaire des lombricaux (escalade)",
          "Déchirure des lombricaux",
          "Syndrome du quadrige / lésion des lombricaux"
      ],
      "requiredKeywords": [
          [
              "lombrical",
              "lombricaux"
          ],
          [
              "rupture",
              "dechirure",
              "desinsertion",
              "lesion",
              "oedeme",
              "infiltrat",
              "main"
          ]
      ],
      "distractors": [
          "Ténosynovite infectieuse des fléchisseurs",
          "Fracture de fatigue métacarpienne",
          "Thrombose de l'artère ulnaire (syndrome du marteau hypothénar)",
          "Maladie de Dupuytren"
      ],
      "keySigns": [
          "Hypersignal T2 Fat-Sat franc des chefs musculaires des 3e et 4e muscles lombricaux entre les tendons fléchisseurs profonds",
          "Lame d'épanchement péritendineux dans le canal carpien et la loge palmaire moyenne",
          "Intégrité des poulies annulaires digitales"
      ],
      "explanation": "La déchirure des muscles lombricaux bipennés survient typiquement lors d'une préhension à doigts décalés (escalade : un doigt tendu et le doigt adjacent fléchi), créant un cisaillement entre deux tendons fléchisseurs profonds."
  },
  {
      "id": "mail-39",
      "title": "Cas Imagerie #39",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-39.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Épanchement et épaississement de la gaine des tendons court et long fibulaires sous le rétinaculum inférieur des fibulaires à la face latérale du calcanéus.",
      "diagnosis": "Ténosynovite sténosante des tendons fibulaires sous le rétinaculum inférieur",
      "synonyms": [
          "Ténosynovite des fibulaires",
          "Ténosynovite constrictive du rétinaculum inférieur des fibulaires",
          "Conflit des tendons fibulaires au tubercule des fibulaires",
          "Ténosynovite sténosante des péroniers"
      ],
      "requiredKeywords": [
          [
              "fibulaire",
              "fibulaires",
              "peronier",
              "peroniers"
          ],
          [
              "tenosynovite",
              "stenosante",
              "constrictive",
              "retinaculum",
              "conflit"
          ]
      ],
      "distractors": [
          "Rupture du tendon calcanéen (Achille)",
          "Syndrome du sinus du tarse",
          "Rupture du ligament talo-fibulaire antérieur",
          "Maladie de Haglund"
      ],
      "keySigns": [
          "Distension liquidienne et épaississement synovial de la gaine des tendons court et long fibulaires",
          "Épaississement fibreux du rétinaculum inférieur des fibulaires en regard de la trochlée fibulaire du calcanéus",
          "Œdème des tissus mous sous-cutanés rétro- et infra-malléolaires latéraux"
      ],
      "explanation": "La ténosynovite sténosante des tendons fibulaires siège électivement sous le rétinaculum inférieur en regard du tubercule (trochlée) des fibulaires à la face latérale du calcanéus."
  },
  {
      "id": "mail-40",
      "title": "Cas Imagerie #40",
      "region": "epaule",
      "modality": "Arthroscanner / TDM",
      "difficulty": 3,
      "image": "./figures/mails/mail-40.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Épaule opérée d'une butée coracoïdienne : gouttière bicipitale déshabitée avec moignon rétracté du long biceps et fragment calcifié intra-articulaire.",
      "diagnosis": "Rupture du tendon du long biceps sur butée coracoïdienne avec corps étranger intra-articulaire",
      "synonyms": [
          "Rupture du long biceps sur épaule opérée de butée",
          "Rupture de la longue portion du biceps + corps étranger intra-articulaire",
          "Rupture du tendon du long biceps"
      ],
      "requiredKeywords": [
          [
              "biceps",
              "long biceps",
              "longue portion"
          ],
          [
              "rupture",
              "butee",
              "corps etranger"
          ]
      ],
      "distractors": [
          "Luxation médiale du long biceps dans le subscapulaire",
          "Rupture isolée de l'infra-épineux",
          "Descellement de prothèse d'épaule",
          "Arthrite septique"
      ],
      "keySigns": [
          "Absence de la portion intra-articulaire du tendon du long biceps et rétraction distale du tendon",
          "Présence d'une butée coracoïdienne antéro-inférieure fixée par vis",
          "Corps étranger calcifié libre dans le récessus articulaire"
      ],
      "explanation": "En arthroscanner post-opératoire d'une butée de Latarjet, l'absence du tendon du long biceps dans l'articulation gléno-humérale et à la partie haute du sillon intertuberculaire signe sa rupture (ou ténotomie), ici associée à un corps étranger intra-articulaire."
  },
  {
      "id": "mail-41",
      "title": "Cas Imagerie #41",
      "region": "jambe-cheville-pied",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-41.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Petit nidus radiotransparent centré par une calcification dense au sein de la phalange distale du 5e orteil.",
      "diagnosis": "Ostéome ostéoïde de la phalange distale du 5e orteil",
      "synonyms": [
          "Ostéome ostéoïde phalangien d'orteil",
          "Ostéome ostéoïde du 5e orteil",
          "Ostéome ostéoïde de la phalange distale",
          "Ostéome ostéoïde"
      ],
      "requiredKeywords": [
          [
              "osteome"
          ],
          [
              "osteoide",
              "orteil",
              "phalange"
          ]
      ],
      "distractors": [
          "Tumeur glomique sous-unguéale",
          "Exostose sous-unguéale",
          "Enchondrome phalangien",
          "Ostéite infectieuse de la houppe phalangienne"
      ],
      "keySigns": [
          "Lacune arrondie bien limitée de la phalange distale du 5e orteil contenant un séquestre calcique central (aspect en cocarde)",
          "Hypertrophie et condensation osseuse réactionnelle de la phalange",
          "Œdème inflammatoire important des parties molles de l'orteil en IRM (orteil en saucisse)"
      ],
      "explanation": "L'ostéome ostéoïde d'une phalange distale d'orteil se manifeste cliniquement par un gros orteil douloureux inflammatoire nocturne ; le scanner en coupes fines met en évidence le nidus en cocarde pathognomonique."
  },
  {
      "id": "mail-42",
      "title": "Cas Imagerie #42",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-42.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Coupe coronale oblique du sacrum montrant deux traits verticaux dans les ailerons sacrés reliés par une composante horizontale corporéale.",
      "diagnosis": "Fracture sacrée en H par insuffisance osseuse",
      "synonyms": [
          "Fracture par insuffisance osseuse du sacrum",
          "Fracture en H du sacrum",
          "Fracture de fatigue ou d'insuffisance sacrée bilatérale"
      ],
      "requiredKeywords": [
          [
              "fracture"
          ],
          [
              "sacree",
              "sacrum",
              "en h",
              "insuffisance",
              "aileron"
          ]
      ],
      "distractors": [
          "Sacro-iliite bilatérale inflammatoire",
          "Métastases sacrées bilatérales",
          "Chordome sacré",
          "Ostéite condensante iliaque"
      ],
      "keySigns": [
          "Bandes d'œdème médullaire verticales bilatérales dans les ailerons sacrés parallèles aux articulations sacro-iliaques",
          "Trait de fracture hypo-intense horizontal reliant les deux traits verticaux à travers S1/S2 (aspect en H)",
          "Respect des interlignes sacro-iliaques"
      ],
      "explanation": "La fracture en H du sacrum est la forme classique de fracture par insuffisance osseuse pelvienne : les deux traits verticaux alaires sont réunis par un trait transversal corporéal dessinant la lettre H sur les coupes coronales obliques."
  },
  {
      "id": "mail-43",
      "title": "Cas Imagerie #43",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-43.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Volumineuse ostéolyse du toit et de la paroi interne du cotyle sur reconstruction coronale TDM du bassin.",
      "diagnosis": "Métastase ostéolytique du toit acétabulaire (cotyle) à haut risque fracturaire",
      "synonyms": [
          "Lésion secondaire ostéolytique du cotyle",
          "Métastase osseuse acétabulaire",
          "Ostéolyse maligne du toit du cotyle"
      ],
      "requiredKeywords": [
          [
              "metastase",
              "secondaire",
              "osteolyse",
              "osteolytique",
              "plasmocytome"
          ],
          [
              "cotyle",
              "acetabulum",
              "acetabulaire",
              "toit",
              "hanche",
              "bassin"
          ]
      ],
      "distractors": [
          "Géode sous-chondrale de coxarthrose",
          "Protrusion acétabulaire idiopathique",
          "Fracture traumatique sur os sain",
          "Ostéome ostéoïde du cotyle"
      ],
      "keySigns": [
          "Vaste plage d'ostéolyse détruisant la zone portante du toit de l'acétabulum et l'arrière-fond cotyloïdien",
          "Disparition de la lame corticale sous-chondrale supérieure exposant au risque de protrusion céphalique",
          "Indication typique de cimentoplastie acétabulaire (+/- vissage ou reconstruction)"
      ],
      "explanation": "Les lésions ostéolytiques secondaires du dôme acétabulaire (zone portante de Harrington) compromettent la mécanique de la hanche et relèvent d'une consolidation percutanée par cimentoplastie."
  },
  {
      "id": "mail-44",
      "title": "Cas Imagerie #44",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-44.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Formation multiloculaire trans-spatiale en franc hypersignal T2 des parties molles du membre inférieur, cloisonnée par de fins septa sans masse charnue.",
      "diagnosis": "Malformation lymphatique macrokystique des parties molles (lymphangiome kystique)",
      "synonyms": [
          "Malformation lymphatique",
          "Lymphangiome kystique des parties molles",
          "Malformation vasculaire à flux lent lymphatique"
      ],
      "requiredKeywords": [
          [
              "malformation lymphatique",
              "lymphangiome",
              "lymphatique"
          ],
          [
              "lymphatique",
              "lymphangiome",
              "kystique",
              "macrokystique"
          ]
      ],
      "distractors": [
          "Synovialosarcome kystique",
          "Myxome intramusculaire",
          "Abcès des parties molles",
          "Kyste poplité de Baker"
      ],
      "keySigns": [
          "Cavités kystiques confluentes multiloculaires en franc hypersignal T2 insinuées entre les plans musculaires et sous-cutanés",
          "Fines cloisons internes régulières sans bourgeon tissulaire endokystique",
          "Possibles niveaux liquide-liquide intrakystiques en cas d'hémorragie intralésionnelle"
      ],
      "explanation": "Les malformations lymphatiques macrokystiques sont des malformations vasculaires à flux lent formées de logettes liquidiennes multiloculaires infiltrant plusieurs compartiments anatomiques sans effet de masse agressif."
  },
  {
      "id": "mail-45",
      "title": "Cas Imagerie #45",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-45.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Infiltration granulomateuse chronique du pied associant de multiples petites logettes hyperintenses en T2 centrées par un point hypo-intense (dot-in-circle sign).",
      "diagnosis": "Pied de Madura (mycétome du pied avec signe du point dans le cercle)",
      "synonyms": [
          "Pied de Madura",
          "Mycétome fongique ou actinomycosique du pied",
          "Madura foot (dot-in-circle sign)",
          "Mycétome du pied"
      ],
      "requiredKeywords": [
          [
              "madura",
              "mycetome"
          ],
          [
              "madura",
              "mycetome",
              "pied",
              "dot-in-circle"
          ]
      ],
      "distractors": [
          "Pied de Charcot neuropathique",
          "Sarcome à cellules claires du pied",
          "Hémangiome caverneux plantaire",
          "Goutte tophacée chronique"
      ],
      "keySigns": [
          "Signe pathognomonique du « point dans le cercle » (dot-in-circle sign) en T2",
          "Multiples petites lésions nodulaires hyperintenses (granulomes inflammatoires) centrées par un grain fongique/actinomycosique en franc hyposignal",
          "Infiltration trans-compartimentale des parties molles et des os du tarse/métatarse"
      ],
      "explanation": "Le pied de Madura (mycétome eumycotique ou actinomycosique) présente en IRM un aspect pathognomonique dit « dot-in-circle sign » : le cercle hyperintense correspond au granulome inflammatoire et le point central hypo-intense correspond au grain mycélien."
  },
  {
      "id": "mail-46",
      "title": "Cas Imagerie #46",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 1,
      "image": "./figures/mails/mail-46.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Tassements cunéiformes de T9 et T12 sur une coupe sagittale IRM du rachis thoraco-lombaire avec fente sous-chondrale et recul respecté de l'arc postérieur.",
      "diagnosis": "Fractures vertébrales ostéoporotiques thoraco-lombaires (T9 et T12) avec retard de consolidation",
      "synonyms": [
          "Tassements vertébraux ostéoporotiques",
          "Fractures vertébrales bénignes par insuffisance osseuse",
          "Fractures ostéoporotiques de T9 et T12",
          "Tassement vertébral bénin"
      ],
      "requiredKeywords": [
          [
              "fracture",
              "fractures",
              "tassement",
              "tassements"
          ],
          [
              "vertebrale",
              "vertebrales",
              "vertebral",
              "osteoporotique",
              "osteoporotiques",
              "benin",
              "thoraco-lombaire"
          ]
      ],
      "distractors": [
          "Spondylodiscite infectieuse à pyogènes",
          "Métastase épidurale compressive",
          "Spondylarthrite ankylosante",
          "Maladie de Forestier (DISH)"
      ],
      "keySigns": [
          "Déformation cunéiforme antérieure des corps vertébraux de T9 et T12 avec fente linéaire sous les plateaux",
          "Préservation d'un signal médullaire graisseux normal dans le reste du corps vertébral et des pédicules",
          "Absence de masse épidurale ou paravertébrale"
      ],
      "explanation": "Les fractures vertébrales ostéoporotiques bénignes se distinguent des tassements malins par le respect des pédicules, la conservation partielle de la moelle graisseuse normale, la bande d'impaction linéaire parallèle au plateau et l'absence de masse épidurale."
  },
  {
    id: 'img-01',
    title: 'Cas #01 — Variantes anatomiques glénohumérales',
    region: 'epaule',
    modality: 'Arthroscanner / TDM',
    difficulty: 2,
    clinicalContext: '',
    image: './figures/ch2/02. Instabilité glénohuméral_p61_2.png',
    diagnosis: 'Complexe de Buford',
    synonyms: [
      'Complexe de Buford',
      'Variante de Buford',
      'Buford',
      'Syndrome de Buford',
    ],
    requiredKeywords: [['buford']],
    hint: 'Variante anatomique présente chez ~1,5 % des sujets, associant agénésie du labrum antéro-supérieur et LGHM cordiforme (ne pas confondre avec une SLAP ou un Bankart).',
    distractors: [
      'Lésion de Bankart fibreuse',
      'SLAP lésion type II',
      'Lésion ALPSA',
    ],
    keySigns: [
      'Absence complète de labrum glénoïdal dans le quadrant antéro-supérieur (coupe a)',
      'Ligament glénohuméral moyen (LGHM) épaissi, prenant un aspect « en corde » (flèches)',
      'S’insère directement sur le labrum supérieur en avant du biceps',
    ],
    explanation:
      'Le complexe de Buford (présent chez environ 1,5 % de la population) associe une absence congénitale du labrum antéro-supérieur et un ligament glénohuméral moyen (LGHM) épaissi « en corde » (flèches). Il s’agit d’une variante normale à ne jamais confondre avec un détachement labral traumatique : sa réinsertion chirurgicale sur le rebord glénoïdal limiterait sévèrement la rotation latérale.',
    correctionImage: './figures/ch2/02. Instabilité glénohuméral_p57_1.png',
    correctionCaption:
      'Schéma des variations du LGHM : (a) insertion haute, (b) LGHM en corde isolé, (c) foramen sous-labral, (d) complexe de Buford.',
  },
  {
    id: 'img-02',
    title: 'Cas #02 — Épaule traumatique (Arthroscanner)',
    region: 'epaule',
    modality: 'Arthroscanner / TDM',
    difficulty: 1,
    clinicalContext: '',
    image: './figures/ch1/01. Pathologie de la coiffe_p47_5.png',
    diagnosis: 'Rupture transfixiante de la coiffe des rotateurs (supra-épineux)',
    synonyms: [
      'Rupture transfixiante de la coiffe des rotateurs',
      'Rupture transfixiante du supra-épineux',
      'Rupture complète du supra-épineux',
      'Rupture transfixiante de la coiffe supérieure',
      'Rupture de la coiffe des rotateurs',
    ],
    requiredKeywords: [
      ['rupture', 'dechirure'],
      ['transfixiante', 'complete', 'coiffe', 'supra-epineux', 'supraepineux', 'sus-epineux'],
    ],
    hint: 'Observez la solution de continuité tendineuse supérieure et le passage du produit de contraste iodé dans la bourse sus-jacente.',
    distractors: [
      'Rupture partielle profonde non transfixiante du supra-épineux',
      'Capsulite rétractile de l’épaule',
      'Tendinopathie calcifiante du supra-épineux',
    ],
    keySigns: [
      'Solution de continuité complète traversant toute l’épaisseur du tendon supra-épineux et la partie antérieure de l’infra-épineux (flèche)',
      'Opacification anormale de la bourse subacromio-deltoïdienne (tête de flèche) attestant du caractère transfixiant',
      'Moignon tendineux rétracté à hauteur du sommet de la tête humérale',
    ],
    explanation:
      'Il s’agit d’une rupture transfixiante de la coiffe supérieure (tendon du supra-épineux et partie antérieure de l’infra-épineux, flèche). Le signe formel du caractère transfixiant en arthroscanner est le passage direct du produit de contraste de la cavité glénohumérale vers la bourse subacromio-deltoïdienne (tête de flèche).',
  },
  {
    id: 'img-03',
    title: 'Cas #03 — Instabilité antérieure d’épaule (IRM T2)',
    region: 'epaule',
    modality: 'IRM',
    difficulty: 3,
    clinicalContext: '',
    image: './figures/ch2/02. Instabilité glénohuméral_p74_2.png',
    diagnosis: 'Lésion HAGL (désinsertion humérale du LGHI)',
    synonyms: [
      'Lésion HAGL',
      'HAGL',
      'Humeral avulsion of glenohumeral ligament',
      'Désinsertion humérale du ligament glénohuméral inférieur',
      'Désinsertion humérale du LGHI',
    ],
    requiredKeywords: [['hagl'], ['desinsertion', 'avulsion', 'rupture', 'lghi']],
    hint: 'Acronyme anglais en 4 lettres désignant l’avulsion du ligament glénohuméral inférieur sur son versant huméral (transformant le récessus axillaire en U en forme de J).',
    distractors: [
      'Lésion de Perthes',
      'Lésion ALPSA',
      'Rupture isolée du subscapulaire',
    ],
    keySigns: [
      'Désinsertion du ligament glénohuméral inférieur (LGHI) à son attache sur le col anatomique huméral (grande flèche)',
      'Transformation du récessus axillaire normal en « U » en un aspect en « J » (J-sign) avec fuite liquidienne le long de la diaphyse (petite flèche)',
      'Encoche de Hill-Sachs en œdème osseux postéro-supérieur associée (tête de flèche)',
    ],
    explanation:
      'La lésion HAGL (Humeral Avulsion of the Glenohumeral Ligament) correspond à la désinsertion humérale du ligament glénohuméral inférieur (grande flèche). Sur les coupes coronales d’IRM en pondération T2 ou d’arthroscanner, le récessus axillaire perd sa forme normale en U pour prendre un aspect en J (« J-sign ») avec suffusion du liquide articulaire le long du col huméral médial (petite flèche).',
    correctionImage: './figures/ch2/02. Instabilité glénohuméral_p67_3.png',
    correctionCaption:
      'Équivalent en arthrographie : fuite caractéristique de produit de contraste le long de la diaphyse humérale médiale (flèche).',
  },
  {
    id: 'img-04',
    title: 'Cas #04 — Épaule douloureuse raide (IRM Sagittale T1)',
    region: 'epaule',
    modality: 'IRM',
    difficulty: 2,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p137_1.png',
    diagnosis: 'Capsulite rétractile de l’épaule',
    synonyms: [
      'Capsulite rétractile',
      'Capsulite rétractile de l’épaule',
      'Épaule gelée',
      'Capsulite adhésive',
      'Capsulite',
    ],
    requiredKeywords: [['capsulite', 'epaule gelee']],
    hint: 'Regardez le triangle graisseux subcoracoïdien (¤) et l’épaisseur du ligament coraco-huméral (flèches) sur la séquence T1 sans saturation de graisse.',
    distractors: [
      'Omarthrose centrée débutante',
      'Tendinopathie calcifiante en résorption',
      'Syndrome de Parsonage-Turner',
    ],
    keySigns: [
      'Comblement / oblitération du triangle graisseux subcoracoïdien en hyposignal T1 (¤)',
      'Épaississement marqué du ligament coraco-huméral (LCH > 3-4 mm) (flèches)',
      'Épaississement associé de la capsule au récessus axillaire sur les coupes frontales T2',
    ],
    explanation:
      'La capsulite rétractile (« épaule gelée ») se traduit sur les coupes sagittales pondérées en T1 par une infiltration inflammatoire et fibreuse oblitérant le triangle graisseux subcoracoïdien (¤) dans l’intervalle des rotateurs, accompagnée d’un épaississement du ligament coraco-huméral (flèches, souvent > 4 mm).',
    correctionImage: './figures/ch4/04. Autres pathologies scapulaires_p138_1.png',
    correctionCaption:
      'Coupes coronales T2 Fat-Sat : épaississement et hypersignal marqué du ligament glénohuméral inférieur au récessus axillaire (grande flèche).',
  },
  {
    id: 'img-05',
    title: 'Cas #05 — Radiographie d’épaule sous corticothérapie',
    region: 'epaule',
    modality: 'Radiographie',
    difficulty: 2,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p133_1.png',
    diagnosis: 'Ostéonécrose aseptique de la tête humérale',
    synonyms: [
      'Ostéonécrose aseptique de la tête humérale',
      'Ostéonécrose de la tête humérale',
      'Ostéonécrose systémique de la tête humérale',
      'Ostéonécrose humérale',
      'ONA de la tête humérale',
      'Ostéonécrose',
    ],
    requiredKeywords: [['osteonecrose', 'necrose', 'ona']],
    hint: 'Observez le liseré de démarcation serpigineux, la dissection sous-chondrale en « coquille d’œuf » (tête de flèche) et le décroché de la surface articulaire.',
    distractors: [
      'Chondromatose synoviale primitive',
      'Fracture impaction de Hill-Sachs',
      'Rhumatisme à pyrophosphate de calcium',
    ],
    keySigns: [
      'Liseré dense de démarcation circonscrivant le séquestre céphalique supérieur (flèches)',
      'Dissection de l’os sous-chondral donnant une clarté linéaire sous-chondrale (tête de flèche)',
      'Impaction / perte de sphéricité de la surface articulaire avec omarthrose secondaire',
    ],
    explanation:
      'Ostéonécrose systémique (aseptique) de la tête humérale compliquée d’une perte de sphéricité. On visualise parfaitement le liseré scléreux de démarcation (flèches), la dissection sous-chondrale (« crescent sign », tête de flèche) et l’effondrement focal de la lame osseuse sous-chondrale.',
  },
  {
    id: 'img-06',
    title: 'Cas #06 — Tuméfaction supérieure de l’épaule',
    region: 'epaule',
    modality: 'IRM',
    difficulty: 2,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p140_1.png',
    diagnosis: 'Kyste arthrosynovial acromio-claviculaire (signe du geyser)',
    synonyms: [
      'Kyste arthrosynovial acromio-claviculaire',
      'Kyste acromio-claviculaire',
      'Kyste synovial acromio-claviculaire',
      'Signe du geyser',
      'Kyste arthrosynovial',
    ],
    requiredKeywords: [
      ['kyste', 'geyser'],
      ['acromio-claviculaire', 'acromioclaviculaire', 'arthrosynovial', 'synovial', 'geyser'],
    ],
    hint: 'Collection kystique sus-acromio-claviculaire alimentée par une rupture massive de la coiffe des rotateurs à travers une arthrose acromio-claviculaire inférieure (« signe du geyser »).',
    distractors: [
      'Lipome intramusculaire du trapèze',
      'Sarcome synovial sus-claviculaire',
      'Hématome sous-cutané post-traumatique',
    ],
    keySigns: [
      'Volumineuse formation kystique plurilobée en hypersignal T2 sus-acromio-claviculaire (flèches)',
      'Arthrose acromio-claviculaire avec érosion de la capsule inférieure',
      'Rupture massive sous-jacente de la coiffe des rotateurs faisant communiquer l’articulation glénohumérale avec l’articulation AC',
    ],
    explanation:
      'Le kyste arthrosynovial acromio-claviculaire (« signe du geyser » en arthrographie) résulte presque toujours d’une rupture massive ancienne de la coiffe des rotateurs : le liquide synovial glénohuméral sous pression traverse la bourse subacromiale puis l’articulation acromio-claviculaire dégénérative pour former une masse pseudotumorale sous-cutanée supérieure.',
    correctionImage: './figures/ch4/04. Autres pathologies scapulaires_p141_3.png',
    correctionCaption:
      'Opacification directe du kyste acromio-claviculaire (flèche) lors de l’arthrographie (« signe du geyser »).',
  },
  {
    id: 'img-07',
    title: 'Cas #07 — Radiographie post-luxation antérieure',
    region: 'epaule',
    modality: 'Radiographie',
    difficulty: 1,
    clinicalContext: '',
    image: './figures/ch2/02. Instabilité glénohuméral_p66_1.png',
    diagnosis: 'Lésion de Bankart osseuse',
    synonyms: [
      'Lésion de Bankart osseuse',
      'Bankart osseux',
      'Fracture de Bankart',
      'Fracture du rebord glénoïdal antéro-inférieur',
      'Lésion de Bankart',
    ],
    requiredKeywords: [['bankart', 'rebord glenoidal', 'glene antero-inferieure']],
    hint: 'Arrachement osseux du rebord antéro-inférieur de la glène (flèche), associé en haut et en dehors à une encoche céphalique postéro-supérieure (tête de flèche).',
    distractors: [
      'Fracture isolée du tubercule majeur (trochiter)',
      'Calcification du tendon du subscapulaire',
      'Complexe de Buford',
    ],
    keySigns: [
      'Fragment osseux détaché en regard du rebord glénoïdal antéro-inférieur (flèche)',
      'Encoche de passage postéro-supérieure de la tête humérale (encoche de Hill-Sachs, tête de flèche)',
      'Perte du contour régulier de la glène inférieure sur le cliché de face',
    ],
    explanation:
      'Il s’agit d’une lésion de Bankart osseuse (fracture-avulsion du rebord glénoïdal antéro-inférieur, flèche) associée à son miroir céphalique : l’encoche de Hill-Sachs (impaction postéro-supérieure de la tête humérale, tête de flèche). L’évaluation de la perte de substance osseuse glénoïdale en scanner est déterminante pour le choix chirurgical (butée de Latarjet vs Bankart arthroscopique).',
  },
  {
    id: 'img-08',
    title: 'Cas #08 — Radiographie d’épaule du sujet âgé',
    region: 'epaule',
    modality: 'Radiographie',
    difficulty: 1,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p131_2.png',
    diagnosis: 'Omarthrose excentrée (coiffe incontinente)',
    synonyms: [
      'Omarthrose excentrée',
      'Omarthrose à coiffe incontinente',
      'Arthropathie de coiffe',
      'Cuff tear arthropathy',
      'Omarthrose sous-acromiale',
    ],
    requiredKeywords: [
      ['omarthrose', 'arthropathie'],
      ['excentree', 'incontinente', 'coiffe', 'ascension'],
    ],
    hint: 'Comparez le centrage de la tête humérale : le cintre scapulo-huméral inférieur est rompu et la tête humérale est ascensionnée sous l’acromion.',
    distractors: [
      'Omarthrose centrée primitive',
      'Luxation glénohumérale postérieure',
      'Ostéonécrose aseptique stade II',
    ],
    keySigns: [
      'Ascension marquée de la tête humérale avec réduction drastique de l’espace sous-acromial (< 6 mm)',
      'Rupture franche du cintre glénohuméral inférieur (flèches)',
      'Pincement de l’interligne glénohuméral supérieur et néo-articulation acromio-humérale (acétabulisation)',
    ],
    explanation:
      'L’omarthrose excentrée est secondaire à une rupture massive et ancienne de la coiffe des rotateurs (« omarthrose à coiffe incontinente »). La perte de l’effet abaisseur et stabilisateur de la coiffe entraîne l’ascension de la tête humérale, la rupture du cintre glénohuméral inférieur (flèches) et un conflit néo-articulaire avec la voûte acromiale (classification de Hamada).',
    correctionImage: './figures/ch4/04. Autres pathologies scapulaires_p132_1.png',
    correctionCaption:
      'Arthroscanner correspondant : contact direct tête humérale – acromion et dégénérescence graisseuse majeure des muscles supra et infra-épineux (étoiles).',
  },
  {
    id: 'img-09',
    title: 'Cas #09 — Échographie de la coiffe des rotateurs',
    region: 'epaule',
    modality: 'Échographie',
    difficulty: 1,
    clinicalContext: '',
    image: './figures/ch1/01. Pathologie de la coiffe_p28_4.png',
    diagnosis: 'Tendinopathie calcifiante de la coiffe des rotateurs',
    synonyms: [
      'Tendinopathie calcifiante de la coiffe des rotateurs',
      'Calcification tendineuse de la coiffe',
      'Calcification du supra-épineux',
      'Tendinite calcifiante',
      'Tendinopathie calcifiante',
      'Calcification intratendineuse',
    ],
    requiredKeywords: [['calcification', 'calcifiante', 'calcique']],
    hint: 'Image hyperéchogène intratendineuse avec cône d’ombre acoustique postérieur (a) ou sans cône d’ombre lorsqu’elle est molle (b).',
    distractors: [
      'Rupture transfixiante avec avulsion osseuse',
      'Corps étranger intra-articulaire',
      'Enthésophyte acromial',
    ],
    keySigns: [
      'Foyer hyperéchogène intratendineux bien limité au sein du tendon supra-épineux (flèche)',
      'En (a) : arc hyperéchogène superficiel avec cône d’ombre acoustique postérieur franc (calcification dure)',
      'En (b) : amas hyperéchogène homogène sans cône d’ombre postérieur (calcification molle en phase résorptive)',
    ],
    explanation:
      'L’échographie distingue parfaitement les calcifications tendineuses dures (a), très réfléchissantes avec cône d’ombre acoustique franc empêchant de voir la corticale sous-jacente, et les calcifications molles (b), transsonores sans cône d’ombre, souvent rencontrées lors des poussées inflammatoires résorptives accessibles à une ponction-lavage échoguidée.',
  },
  {
    id: 'img-10',
    title: 'Cas #10 — Ressaut douloureux scapulo-thoracique (Scanner 3D)',
    region: 'epaule',
    modality: 'Arthroscanner / TDM',
    difficulty: 3,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p146_3.png',
    diagnosis: 'Scapula à ressaut (tubercule de Luschka)',
    synonyms: [
      'Scapula à ressaut',
      'Tubercule de Luschka',
      'Syndrome de la scapula à ressaut',
      'Snapping scapula',
      'Conflit scapulo-thoracique',
    ],
    requiredKeywords: [['ressaut', 'luschka', 'snapping', 'scapulo-thoracique', 'scapulothoracique']],
    hint: 'Proéminence osseuse crochue de l’angle supéro-médial de la scapula entrant en conflit avec le gril costal.',
    distractors: [
      'Fracture de fatigue de l’écaille scapulaire',
      'Dysostose cléido-crânienne',
      'Scapula alata neurologique',
    ],
    keySigns: [
      'Saillie osseuse crochue à la face antérieure de l’angle supéro-médial de la scapula droite (flèche) : tubercule de Luschka',
      'Diminution de l’espace scapulo-thoracique en regard du gril costal',
      'Asymétrie franche par rapport au côté gauche normal sur la vue supérieure 3D (c)',
    ],
    explanation:
      'La scapula à ressaut (« snapping scapula ») d’origine osseuse est ici secondaire à un tubercule de Luschka, proéminence osseuse de l’angle supéro-médial de la scapula (flèche) venant frotter contre les côtes supérieures et induisant une bursite scapulo-thoracique mécanique.',
  },
  {
    id: 'img-11',
    title: 'Cas #11 — Déficit post-opératoire après butée de Latarjet',
    region: 'epaule',
    modality: 'IRM',
    difficulty: 3,
    clinicalContext: '',
    image: './figures/ch3/03. Pathologie nerveuse de la ceinture scapulaire_p123_1.png',
    diagnosis: 'Lésion du nerf musculocutané (dénervation du coracobrachial)',
    synonyms: [
      'Lésion du nerf musculocutané',
      'Atteinte du nerf musculocutané',
      'Dénervation du nerf musculocutané',
      'Nerf musculocutané',
      'Neuropathie du nerf musculocutané',
    ],
    requiredKeywords: [['musculocutane', 'musculo-cutane', 'coracobrachial']],
    hint: 'Quel nerf perfore anatomiquement le muscle coracobrachial juste sous le processus coracoïde ?',
    distractors: [
      'Syndrome de l’espace quadrilatère (nerf axillaire)',
      'Compression du nerf suprascapulaire',
      'Atteinte du nerf radial au sillon huméral',
    ],
    keySigns: [
      'Hypersignal T2 d’œdème de dénervation aiguë du muscle coracobrachial (grande flèche)',
      'Hypersignal et épaississement du tronc du nerf musculocutané traversant le corps musculaire (petite flèche)',
      'Respect relatif du deltoïde (D, nerf axillaire) et du triceps (T, nerf radial)',
    ],
    explanation:
      'Le nerf musculocutané perfore le muscle coracobrachial à quelques centimètres sous le processus coracoïde, ce qui l’expose aux lésions iatrogènes lors de la chirurgie de butée coracoïdienne (Latarjet). L’IRM montre l’œdème de dénervation en hypersignal T2 du coracobrachial (grande flèche) centré sur le nerf musculocutané en hypersignal (petite flèche).',
    correctionImage: './figures/ch3/03. Pathologie nerveuse de la ceinture scapulaire_p122_1.png',
    correctionCaption:
      'Rappel anatomique : trajet du nerf musculocutané perforant le muscle coracobrachial avant d’innerver le biceps brachial et le brachial.',
  },
  {
    id: 'img-12',
    title: 'Cas #12 — Instabilité complexe en scanner axial',
    region: 'epaule',
    modality: 'Arthroscanner / TDM',
    difficulty: 3,
    clinicalContext: '',
    image: './figures/ch2/02. Instabilité glénohuméral_p87_1.png',
    diagnosis: 'Instabilité glénohumérale multidirectionnelle (Hill-Sachs + McLaughlin)',
    synonyms: [
      'Instabilité multidirectionnelle',
      'Instabilité glénohumérale multidirectionnelle',
      'Encoche de Hill-Sachs et encoche de McLaughlin',
      'Luxation antérieure et postérieure',
      'Encoche de McLaughlin',
    ],
    requiredKeywords: [['multidirectionnelle', 'mclaughlin', 'mc laughlin', 'bidirectionnelle']],
    hint: 'On observe à la fois les stigmates osseux d’une instabilité antérieure (en arrière) et d’une instabilité postérieure (en avant).',
    distractors: [
      'Omarthrose centrée primitive type A1 de Walch',
      'Nécrose céphalique post-radique',
      'Fracture céphalo-tubérositaire à 4 fragments',
    ],
    keySigns: [
      'Encoche postéro-latérale de Hill-Sachs (tête de flèche) témoin d’épisodes de luxation antérieure',
      'Encoche antéro-médiale de McLaughlin (flèche blanche) témoin d’épisodes de luxation postérieure',
      'Calcification/ossification périostée antérieure (flèche noire) et séquelle de reverse Bankart postérieur avec lésion de Bennett (étoile)',
    ],
    explanation:
      'Cette coupe axiale résume à elle seule l’instabilité bidirectionnelle / multidirectionnelle en associant les séquelles osseuses d’instabilité antérieure (encoche postérieure de Hill-Sachs [tête de flèche] et décollement périosté antérieur calcifié [flèche noire]) et d’instabilité postérieure (encoche antérieure de McLaughlin [flèche blanche] et ossification postérieure de Bennett [étoile]).',
  },
  {
    id: 'img-13',
    title: 'Cas #13 — Pincement glénohuméral avec coiffe continente',
    region: 'epaule',
    modality: 'Radiographie',
    difficulty: 1,
    clinicalContext: '',
    image: './figures/ch4/04. Autres pathologies scapulaires_p128_1.png',
    diagnosis: 'Omarthrose centrée',
    synonyms: [
      'Omarthrose centrée',
      'Omarthrose primitive centrée',
      'Omarthrose glénohumérale centrée',
      'Arthrose glénohumérale centrée',
    ],
    requiredKeywords: [
      ['omarthrose', 'arthrose'],
      ['centree', 'primitive', 'glenohumerale'],
    ],
    hint: 'Notez la volumineuse ostéophytose marginale inférieure (« en barbe de bouc ») alors que la tête humérale reste parfaitement centrée face à la glène.',
    distractors: [
      'Omarthrose excentrée (Hamada 4)',
      'Arthrite septique glénohumérale',
      'Chondrosarcome de la tête humérale',
    ],
    keySigns: [
      'Ostéophytose marginale inférieure et centrale en « goutte » ou « barbe de bouc » de la tête humérale (flèches)',
      'Préservation de la hauteur de l’espace sous-acromial et du centrage céphalique (coiffe continente)',
      'Présence d’un ostéochondrome / corps étranger secondaire dans le récessus inférieur (tête de flèche)',
    ],
    explanation:
      'L’omarthrose centrée (à coiffe continente) se caractérise par le maintien du centrage de la tête humérale en regard de la glène, une préservation de l’espace sous-acromial (> 7 mm), et une couronne ostéophytique inférieure typique (flèches). Sur ce cliché en rotation neutre, la superposition de l’ostéophyte postérieur peut faussement donner l’impression d’un interligne conservé.',
  },
  {
    id: 'img-14',
    title: 'Cas #14 — Amyotrophie scapulaire post-chirurgie cervicale',
    region: 'epaule',
    modality: 'IRM',
    difficulty: 3,
    clinicalContext: '',
    image: './figures/ch3/03. Pathologie nerveuse de la ceinture scapulaire_p125_3.png',
    diagnosis: 'Atteinte du nerf spinal accessoire (amyotrophie du trapèze)',
    synonyms: [
      'Atteinte du nerf spinal accessoire',
      'Atteinte du nerf accessoire',
      'Lésion du nerf accessoire',
      'Dénervation du trapèze',
      'Nerf accessoire',
      'Nerf spinal accessoire',
      'Paralysie du trapèze',
    ],
    requiredKeywords: [['accessoire', 'spinal', 'trapeze']],
    hint: 'Observez l’asymétrie d’épaisseur et de signal du muscle superficiel postéro-supérieur de la ceinture scapulaire gauche (flèche) : quel nerf crânien (XI) l’innerve ?',
    distractors: [
      'Atteinte du nerf thoracique long (dentelé antérieur)',
      'Atteinte du nerf dorsal de la scapula (rhomboïdes)',
      'Rupture du tendon supra-épineux',
    ],
    keySigns: [
      'Amyotrophie franche du muscle trapèze gauche sur la séquence T1 (a, flèche)',
      'Discret hypersignal T2 de dénervation du corps musculaire du trapèze gauche (b, flèche)',
      'Respect des muscles élévateur de la scapula et supra-épineux adjacents',
    ],
    explanation:
      'Le nerf spinal accessoire (XIe paire crânienne) chemine très superficiellement dans le triangle cervical postérieur où il est vulnérable lors des biopsies ganglionnaires ou curages cervicaux. Son atteinte entraîne une dénervation isolée du muscle trapèze (flèche), responsable d’une chute de l’épaule et d’une scapula alata latéralisée.',
  },
];
