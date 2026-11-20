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
  "Tumeur desmoïde (fibromatose profonde) de la main",
  "Conflit fémoro-acétabulaire (CFA) avec hernie synoviale de Pitt du col fémoral",
  "Tumeur vasculaire ou mésenchymateuse évolutive des parties molles du bord ulnaire du poignet (malformation vasculaire / angioleiomyome)",
  "Tumeurs bénignes des gaines des nerfs périphériques en chapelet du nerf tibial (schwannomes / schwannomatose du canal tarsien)",
  "Géodes sous-chondrales dégénératives de la lame osseuse sous-chondrale (coxarthrose)",
  "Ostéome ostéoïde intra-articulaire de la jonction cervico-céphalique du fémur avec synovite réactionnelle",
  "Fissure verticale radiaire transfixiante et complexe de la corne postérieure du ménisque médial",
  "Récidive locale de sarcome des tissus mous de la cuisse avec envahissement cortical fémoral",
  "Infection du site opératoire (ISO) sur prothèse totale de hanche (descellement septique de PTH)",
  "Géode sous-chondrale dégénérative du pédicule / isthme de L4 communicant avec l'articulaire postérieure (arthrose inter-apophysaire postérieure)",
  "Tumeur ténosynoviale à cellules géantes (TTCG) nodulaire intra-articulaire talo-naviculaire",
  "Myosite ossifiante circonscrite (MOC) des parties molles de la jambe",
  "Localisation rachidienne lombaire (L2-L4) et épidurite compressive d'un lymphome B diffus à grandes cellules",
  "Tumeur lipomateuse profonde intramusculaire de la cuisse (lipome profond / tumeur lipomateuse atypique - ALT)",
  "Métastase osseuse ostéolytique du cotyle (toit acétabulaire) et de l'aile iliaque relevant d'un vissage-cimentoplastie",
  "Lésions osseuses ostéocondensantes multiples du bassin (métastases ostéocondensantes / ostéopathie condensante secondaire)",
  "Ostéome ostéoïde sous-périosté de la face dorsale du col du talus",
  "Tumeur desmoïde (fibromatose profonde) des muscles paravertébraux",
  "Ostéome ostéoïde cortical du genou",
  "Dysplasie fibreuse du fémur proximal ostéosynthésée",
  "Métastase osseuse ostéolytique de la branche ilio-pubienne avec envahissement des parties molles",
  "Tumeur ténosynoviale à cellules géantes (TTCG / synovite villonodulaire)",
  "Lésion épiphysaire anévrismalisée du condyle fémoral médial (TCG / chondroblastome avec kyste anévrismal secondaire)",
  "Dysplasie fibreuse quiescente en involution de la métaphyse fémorale proximale",
  "Lésion osseuse secondaire (métastase) du sacrum au contact du foramen S2",
  "Tumeur profonde des parties molles de la loge palmaire moyenne de la main (sous l'aponévrose palmaire)",
  "Tumeur ténosynoviale à cellules géantes (TTCG) nodulaire de la bourse infrapatellaire profonde",
  "Dysplasie fibreuse à prédominance kystique de la branche ilio-pubienne",
  "Ossification post-traumatique de la membrane interosseuse tibio-fibulaire (synostose / myosite ossifiante)",
  "Énostose (îlot condensant bénin) de la phalange distale",
  "Sacro-iliite inflammatoire active (spondyloarthrite axiale)",
  "Lésion osseuse maligne de l'aile iliaque en territoire irradié (métastase osseuse / sarcome radio-induit)",
  "Chondrocalcinose articulaire (arthropathie à pyrophosphate de calcium / CPPD)",
  "Fracture-tassement ostéoporotique récente du plateau supérieur de T12",
  "Collection liquidienne péritrochantérienne post-opératoire de la hanche (sérome / hématome enkysté / abcès)",
  "Récidive locale de tumeur à cellules géantes (TCG) du tibia proximal au contact du pédicule poplité",
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
      "id": "mail-64",
      "title": "Cas Imagerie #64",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-64.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la main et du poignet — analysez cette masse tissulaire infiltrante en franc hyposignal T2 fibreux développée au contact des plans aponévrotiques.",
      "diagnosis": "Tumeur desmoïde (fibromatose profonde) de la main",
      "synonyms": [
          "Tumeur desmoïde de la main",
          "Fibromatose profonde (desmoïde) de la main / avant-bras",
          "Tumeur desmoïde (fibromatose agressive)"
      ],
      "requiredKeywords": [
          [
              "desmoïde",
              "desmoide",
              "fibromatose"
          ]
      ],
      "distractors": [
          "Schwannome bénin du nerf médian",
          "Tumeur ténosynoviale à cellules géantes (TTCG)",
          "Lipome profond intramusculaire"
      ],
      "keySigns": [
          "Masse tissulaire des parties molles apposée contre le plan aponévrotique profond (fascia tail sign)",
          "Plages caractéristiques en franc hyposignal T2 et T1 correspondant aux bandes riches en collagène",
          "Rehaussement modéré à intense des portions cellulaires après injection de gadolinium"
      ],
      "explanation": "La présence de bandes en franc hyposignal T2 au sein d'une masse tissulaire infiltrante raccordée au fascia (« tail sign ») oriente vers une tumeur desmoïde (fibromatose profonde), à confirmer par microbiopsie écho-guidée."
  },
  {
      "id": "mail-65",
      "title": "Cas Imagerie #65",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-65.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la hanche — observez la géode sous-cortical antéro-supérieure de la jonction cervico-céphalique fémorale et l'épaississement capsulaire en regard.",
      "diagnosis": "Conflit fémoro-acétabulaire (CFA) avec hernie synoviale de Pitt du col fémoral",
      "synonyms": [
          "Hernie synoviale de Pitt sur conflit fémoro-acétabulaire (CFA)",
          "Conflit fémoro-acétabulaire (CFA) avec fibrocyste sous-cortical du col fémoral",
          "Hernie de Pitt du col fémoral"
      ],
      "requiredKeywords": [
          [
              "conflit",
              "cfa",
              "pitt"
          ],
          [
              "fémoro-acétabulaire",
              "femoro-acetabulaire",
              "hanche",
              "col",
              "pitt"
          ]
      ],
      "distractors": [
          "Ostéome ostéoïde du col fémoral",
          "Synovite villonodulaire pigmentée (TTCG diffuse) de la hanche",
          "Ostéonécrose aseptique de la tête fémorale"
      ],
      "keySigns": [
          "Géode bien limitée cerclée d'un fin liseré sclérotique à la face antéro-supérieure de la jonction cervico-céphalique fémorale (hernie de Pitt)",
          "Épaississement capsulo-synovial fibreux réactionnel focal en regard de la zone de conflit antérieur",
          "Chondropathie mécanique du versant acétabulaire antéro-supérieur sans prolifération synoviale tumorale"
      ],
      "explanation": "La hernie synoviale de Pitt (fibrocyste sous-cortical du versant antéro-supérieur du col fémoral) associée à un épaississement capsulaire focal et une chondropathie acétabulaire antérieure est caractéristique d'un conflit fémoro-acétabulaire (CFA)."
  },
  {
      "id": "mail-66",
      "title": "Cas Imagerie #66",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-66.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du poignet — analysez ce nodule sous-cutané hypervasculaire évolutif très douloureux situé en regard de la tête ulnaire.",
      "diagnosis": "Tumeur vasculaire ou mésenchymateuse évolutive des parties molles du bord ulnaire du poignet (malformation vasculaire / angioleiomyome)",
      "synonyms": [
          "Malformation vasculaire / tumeur vasculaire des parties molles du poignet",
          "Tumeur mésenchymateuse hypervasculaire du poignet (angioleiomyome / MAV / sarcome superficiel)",
          "Lésion nodulaire hypervasculaire en regard de la tête de l'ulna"
      ],
      "requiredKeywords": [
          [
              "vasculaire",
              "mav",
              "malformation",
              "tumeur",
              "angioleiomyome",
              "sarcome"
          ],
          [
              "poignet",
              "ulna",
              "ulnaire"
          ]
      ],
      "distractors": [
          "Kyste arthrosynovial radio-carpien dorsal simple",
          "Ténosynovite de l'extenseur ulnaire du carpe (ECU)",
          "Lipome sous-cutané simple du poignet"
      ],
      "keySigns": [
          "Nodule bien circonscrit des parties molles superficielles en regard de la tête de l'ulna",
          "Franc hypersignal T2, hyposignal T1 et rehaussement intense après injection de gadolinium",
          "Absence de dépôt d'hémosidérine et respect complet de la corticale ulnaire sous-jacente"
      ],
      "explanation": "Devant un nodule superficiel douloureux en franc hypersignal T2 et rehaussement intense en regard de la tête ulnaire, évolutif en 3 mois et sans continuité nerveuse typique de schwannome, on évoque une lésion vasculaire (MAV / angioleiomyome) ou mésenchymateuse justifiant une biopsie-exérèse."
  },
  {
      "id": "mail-67",
      "title": "Cas Imagerie #67",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-67.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la cheville — analysez cette formation nodulaire disposée en chapelet sur le trajet du pédicule tibial postérieur sous la malléole médiale.",
      "diagnosis": "Tumeurs bénignes des gaines des nerfs périphériques en chapelet du nerf tibial (schwannomes / schwannomatose du canal tarsien)",
      "synonyms": [
          "Schwannome du nerf tibial postérieur (canal tarsien)",
          "Tumeur bénigne des gaines des nerfs périphériques (TBGNP / schwannomatose) de la cheville",
          "Schwannomes plexiformes / en chapelet du nerf tibial"
      ],
      "requiredKeywords": [
          [
              "schwannome",
              "schwannomatose",
              "tbgnp",
              "gaines",
              "nerf"
          ]
      ],
      "distractors": [
          "Kyste arthrosynovial sous-talien",
          "Ténosynovite du tibial postérieur",
          "Varices plantaires thrombosées du canal tarsien"
      ],
      "keySigns": [
          "Nodules multiples disposés en chapelet dans la gouttière rétromalléolaire médiale et le canal tarsien",
          "Hyposignal T1, franc hypersignal STIR/T2 et prise de contraste intense après injection",
          "Continuité anatomique avec le trajet du pédicule vasculo-nerveux tibial postérieur"
      ],
      "explanation": "Des nodules bien limités disposés en chapelet en hypersignal T2 prenant le contraste le long du trajet du nerf tibial sous la malléole médiale sont caractéristiques de tumeurs bénignes des gaines nerveuses périphériques (schwannomes / schwannomatose)."
  },
  {
      "id": "mail-68",
      "title": "Cas Imagerie #68",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 1,
      "image": "./figures/mails/mail-68.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM — analysez les petites clartés kystiques bien cerclées situées immédiatement sous la lame osseuse sous-chondrale.",
      "diagnosis": "Géodes sous-chondrales dégénératives de la lame osseuse sous-chondrale (coxarthrose)",
      "synonyms": [
          "Géodes sous-chondrales d'arthrose",
          "Kystes sous-chondraux dégénératifs de la lame osseuse sous-chondrale",
          "Remaniements géodiques sous-chondraux arthrosiques"
      ],
      "requiredKeywords": [
          [
              "géode",
              "geode",
              "géodes",
              "geodes",
              "sous-chondrale",
              "sous-chondrales",
              "arthrose"
          ]
      ],
      "distractors": [
          "Chondroblastome épiphysaire",
          "Métastases osseuses ostéolytiques",
          "Ostéome ostéoïde intra-articulaire"
      ],
      "keySigns": [
          "Multiples petites cavités kystiques millimétriques groupées immédiatement sous la lame osseuse sous-chondrale",
          "Fin liseré d'ostéosclérose périphérique bien défini (Lodwick IA) et condensation sous-chondrale de voisinage",
          "Pincement de l'interligne articulaire en zone portante"
      ],
      "explanation": "Ces lésions kystiques bien cerclées de sclérose, strictement sous-chondrales en zone de hyperpression articulaire, correspondent à de banales géodes sous-chondrales dégénératives."
  },
  {
      "id": "mail-69",
      "title": "Cas Imagerie #69",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-69.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la hanche — recherchez un petit nidus cortical de la jonction cervico-céphalique associé à un œdème osseux et une synovite réactionnelle.",
      "diagnosis": "Ostéome ostéoïde intra-articulaire de la jonction cervico-céphalique du fémur avec synovite réactionnelle",
      "synonyms": [
          "Ostéome ostéoïde du col fémoral",
          "Ostéome ostéoïde intra-capsulaire de la hanche",
          "Ostéome ostéoïde cervico-céphalique fémoral"
      ],
      "requiredKeywords": [
          [
              "ostéome",
              "osteome",
              "ostéoïde",
              "osteoide"
          ]
      ],
      "distractors": [
          "Fracture de fatigue du col fémoral",
          "Arthrite septique coxofémorale",
          "Hernie synoviale de Pitt"
      ],
      "keySigns": [
          "Nidus millimétrique sous-périosté/cortical de la jonction cervico-céphalique fémorale",
          "Œdème médullaire étendu du col fémoral en franc hypersignal T2 Fat-Sat",
          "Épanchement intra-articulaire et synovite inflammatoire réactionnelle marquée typiques des localisations intra-capsulaires"
      ],
      "explanation": "L'ostéome ostéoïde intra-capsulaire du col fémoral provoque une synovite réactionnelle floride et un œdème médullaire extensif pouvant mimer une coxite inflammatoire ; le scanner haute résolution et l'IRM dynamique mettent en évidence le nidus hypervasculaire accessible à la radiofréquence."
  },
  {
      "id": "mail-70",
      "title": "Cas Imagerie #70",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-70.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du genou — analysez la continuité de la corne postérieure et de la jonction corps-corne postérieure du ménisque médial ainsi que l'œdème capsulaire adjacent.",
      "diagnosis": "Fissure verticale radiaire transfixiante et complexe de la corne postérieure du ménisque médial",
      "synonyms": [
          "Fissure radiaire transfixiante de la corne postérieure du ménisque médial",
          "Rupture complexe de la corne postérieure du ménisque interne",
          "Lésion méniscale médiale complexe (fissure radiaire de la corne postérieure)"
      ],
      "requiredKeywords": [
          [
              "ménisque",
              "menisque",
              "méniscale",
              "meniscale"
          ],
          [
              "fissure",
              "rupture",
              "radiaire",
              "corne postérieure",
              "médial",
              "medial",
              "interne"
          ]
      ],
      "distractors": [
          "Ménisque discoïde latéral",
          "Kyste méniscal isolé sans fissure",
          "Ostéochondrite disséquante du condyle fémoral médial"
      ],
      "keySigns": [
          "Trait de refend vertical radiaire transfixiant interrompant le bord libre et le segment postérieur du ménisque médial",
          "Extension fissuraire complexe à la jonction segment moyen - segment postérieur",
          "Œdème capsulaire et paraméniscal réactionnel sur la zone de réflexion de la base méniscale"
      ],
      "explanation": "L'interruption verticale franche en hypersignal T2 de la corne postérieure du ménisque médial associée à une composante complexe de la jonction segment moyen-postérieur et un œdème capsulaire adjacent signe une fissure radiaire transfixiante instable."
  },
  {
      "id": "mail-71",
      "title": "Cas Imagerie #71",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 3,
      "image": "./figures/mails/mail-71.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM fémorale — analysez l'atteinte corticale fémorale au contact d'un site antérieur d'exérèse de sarcome des parties molles.",
      "diagnosis": "Récidive locale de sarcome des tissus mous de la cuisse avec envahissement cortical fémoral",
      "synonyms": [
          "Envahissement cortical fémoral sur récidive de sarcome des tissus mous",
          "Récidive de sarcome des parties molles avec ostéolyse corticale fémorale",
          "Atteinte osseuse corticale fémorale de contiguïté sur sarcome des parties molles"
      ],
      "requiredKeywords": [
          [
              "sarcome",
              "récidive",
              "recidive",
              "envahissement",
              "ostéolyse"
          ],
          [
              "corticale",
              "fémur",
              "femur",
              "fémorale",
              "cuisse"
          ]
      ],
      "distractors": [
          "Ostéome ostéoïde cortical diaphysaire fémoral",
          "Dysplasie fibreuse corticale",
          "Myosite ossifiante circonscrite mature"
      ],
      "keySigns": [
          "Érosion et ostéolyse irrégulière de la corticale diaphysaire fémorale à proximité immédiate du lit opératoire",
          "Épaississement tissulaire juxta-cortical infiltrant les parties molles profondes adjacentes",
          "Indication de biopsie osseuse et tissulaire sous contrôle TDM"
      ],
      "explanation": "L'apparition d'une érosion ostéolytique corticale fémorale en regard de la cicatrice d'exérèse d'un sarcome des parties molles fait craindre une récidive locale avec envahissement osseux de contiguïté (ou une ostéite/ostéoradionécrose), imposant une biopsie sous scanner."
  },
  {
      "id": "mail-72",
      "title": "Cas Imagerie #72",
      "region": "hanche",
      "modality": "Radiographie",
      "difficulty": 2,
      "image": "./figures/mails/mail-72.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Radiographie de hanche prothétique — analysez l'interface os-implant fémoral et la réaction périostée chez ce patient jeune douloureux.",
      "diagnosis": "Infection du site opératoire (ISO) sur prothèse totale de hanche (descellement septique de PTH)",
      "synonyms": [
          "Infection sur prothèse totale de hanche (ISO PTH)",
          "Descellement septique de prothèse totale de hanche (PTH)",
          "Sepsis sur prothèse totale de hanche"
      ],
      "requiredKeywords": [
          [
              "infection",
              "septique",
              "sepsis",
              "iso",
              "descellement"
          ],
          [
              "prothèse",
              "prothese",
              "pth",
              "hanche"
          ]
      ],
      "distractors": [
          "Fracture péri-prothétique Vancouver B1",
          "Luxation postérieure de prothèse totale de hanche",
          "Ossifications hétérotopiques péri-prothétiques de Brooker"
      ],
      "keySigns": [
          "Liseré radiotransparent péri-prothétique évolutif et ostéolyse endostée autour de la tige fémorale",
          "Réaction périostée appositionnelle fémorale suspecte de processus septique",
          "Indication de ponction articulaire radio- ou scanno-guidée avant reprise chirurgicale"
      ],
      "explanation": "Devant des remaniements ostéolytiques péri-prothétiques précoces avec réaction périostée sur une prothèse totale de hanche douloureuse, une infection péri-prothétique (ISO sur PTH) doit être recherchée en priorité par ponction articulaire guidée et scanner."
  },
  {
      "id": "mail-73",
      "title": "Cas Imagerie #73",
      "region": "rachis",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-73.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM lombaire en coupe axiale sur L4 — observez la continuité entre la lacune bien cerclée de l'isthme/pédicule droit et l'interligne articulaire postérieur.",
      "diagnosis": "Géode sous-chondrale dégénérative du pédicule / isthme de L4 communicant avec l'articulaire postérieure (arthrose inter-apophysaire postérieure)",
      "synonyms": [
          "Géode dégénérative d'arthrose inter-apophysaire postérieure (IAP) de L4",
          "Kyste sous-chondral mécanique du pédicule / massif articulaire de L4",
          "Lacune mécanique d'origine articulaire postérieure (IAP) du pédicule de L4"
      ],
      "requiredKeywords": [
          [
              "géode",
              "geode",
              "mécanique",
              "mecanique",
              "arthrose",
              "iap",
              "articulaire postérieure",
              "kyste"
          ],
          [
              "pédicule",
              "pedicule",
              "l4",
              "rachis",
              "lombaire",
              "iap"
          ]
      ],
      "distractors": [
          "Métastase ostéolytique du pédicule de L4 (« vertèbre borgne »)",
          "Ostéoblastome de l'arc postérieur de L4",
          "Spondylodiscite infectieuse L4-L5"
      ],
      "keySigns": [
          "Lacune arrondie bien limitée de la base du massif articulaire et du pédicule droit de L4 bordée d'un liseré dense d'ostéosclérose",
          "Pertuis de communication direct avec l'interligne inter-apophysaire postérieur (IAP) siège d'une arthrose",
          "Absence d'effraction corticale agressive ou d'envahissement épidural"
      ],
      "explanation": "La mise en évidence d'un pertuis de communication directe avec une articulation inter-apophysaire postérieure (IAP) dégénérative et d'un liseré d'ostéosclérose continu permet d'affirmer l'origine mécanique synoviale (géode d'arthrose IAP) et d'écarter une métastase pédiculaire."
  },
  {
      "id": "mail-74",
      "title": "Cas Imagerie #74",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-74.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du médio-pied — analysez ce nodule tissulaire intra-articulaire bien circonscrit développé sur le versant médial de l'articulation talo-naviculaire.",
      "diagnosis": "Tumeur ténosynoviale à cellules géantes (TTCG) nodulaire intra-articulaire talo-naviculaire",
      "synonyms": [
          "Tumeur ténosynoviale à cellules géantes (TTCG) talo-naviculaire",
          "Synovite villonodulaire nodulaire de l'articulation talo-naviculaire",
          "TTCG localisée de la cheville / médio-pied"
      ],
      "requiredKeywords": [
          [
              "ténosynoviale",
              "tenosynoviale",
              "ttcg",
              "villonodulaire",
              "svn",
              "cellules géantes"
          ]
      ],
      "distractors": [
          "Kyste arthrosynovial dorsal du médio-pied",
          "Os naviculaire accessoire symptomatique (type II)",
          "Lipome intra-osseux du talus"
      ],
      "keySigns": [
          "Nodule tissulaire intra-articulaire bien circonscrit de 26 mm sur le versant médial de l'articulation talo-naviculaire",
          "Signal T2 intermédiaire modéré associé à une synovite talo-naviculaire réactionnelle",
          "Accessibilité à une microbiopsie écho-guidée de confirmation"
      ],
      "explanation": "Un nodule synovial intra-articulaire solide bien limité en signal T2 intermédiaire développé dans l'articulation talo-naviculaire évoque en première hypothèse une forme localisée (nodulaire) de tumeur ténosynoviale à cellules géantes (TTCG)."
  },
  {
      "id": "mail-75",
      "title": "Cas Imagerie #75",
      "region": "jambe-cheville-pied",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-75.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM et IRM de la jambe — observez la couronne périphérique ossifiée mature entourant un centre plus clair au sein des parties molles musculaires.",
      "diagnosis": "Myosite ossifiante circonscrite (MOC) des parties molles de la jambe",
      "synonyms": [
          "Myosite ossifiante circonscrite (MOC)",
          "Myosite ossifiante bénigne de la jambe",
          "Ossification hétérotopique intramusculaire (MOC)"
      ],
      "requiredKeywords": [
          [
              "myosite",
              "moc"
          ],
          [
              "ossifiante",
              "circonscrite",
              "moc"
          ]
      ],
      "distractors": [
          "Ostéosarcome extra-squelettique des parties molles",
          "Synovialosarcome calcifié de la jambe",
          "Chondrosarcome mésenchymateux des tissus mous"
      ],
      "keySigns": [
          "Phénomène de zonation centripète pathognomonique avec couronne d'ossification périphérique mature bien cortiquée et centre fibro-cellulaire moins dense",
          "Liseré clair de clivage séparant la masse ossifiée de la corticale osseuse adjacente intacte",
          "Maturation osseuse progressive et régression de l'œdème périlésionnel sur le suivi évolutif (« Don't touch lesion »)"
      ],
      "explanation": "La maturation osseuse centripète (couronne périphérique calcifiée dense entourant un centre hypodense) est pathognomonique de la myosite ossifiante circonscrite (MOC) : c'est une « Don't touch lesion » qui ne doit pas être biopsiée."
  },
  {
      "id": "mail-76",
      "title": "Cas Imagerie #76",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-76.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM lombaire — analysez l'infiltration osseuse vertébrale de L2 à L4 et l'envahissement tissulaire circonférentiel de l'espace épidural rétrécissant le fourreau dural.",
      "diagnosis": "Localisation rachidienne lombaire (L2-L4) et épidurite compressive d'un lymphome B diffus à grandes cellules",
      "synonyms": [
          "Lymphome vertébral lombaire avec épidurite (L2-L4)",
          "Épidurite lymphomateuse lombaire (lymphome B à grandes cellules)",
          "Infiltration rachidienne et épidurale de lymphome malin non hodgkinien"
      ],
      "requiredKeywords": [
          [
              "lymphome",
              "épidurite",
              "epidurite",
              "hématologique",
              "secondaire"
          ],
          [
              "lombaire",
              "rachis",
              "épidurite",
              "epidurite",
              "vertébrale"
          ]
      ],
      "distractors": [
          "Hernie discale lombaire exclue L3-L4",
          "Lipomatose épidurale lombaire bénigne",
          "Canal lombaire étroit dégénératif"
      ],
      "keySigns": [
          "Remplacement diffus du signal médullaire des corps vertébraux de L2 à L4 sans effondrement vertébral majeur",
          "Manchon tissulaire épidural homogène infiltrant le canal rachidien lombaire et engainant le fourreau dural",
          "Extension foramוnale et paravertébrale en continuité à travers les foramens intervertébraux (« signe de l'enveloppement »)"
      ],
      "explanation": "Une infiltration médullaire vertébrale pluri-étagée (L2-L4) à corticales relativement conservées associée à une volumineuse épidurite en nappe engainant le sac dural est typique d'une localisation rachidienne et épidurale de lymphome B à grandes cellules."
  },
  {
      "id": "mail-77",
      "title": "Cas Imagerie #77",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-77.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la cuisse — analysez cette volumineuse masse profonde de 20 cm de signal purement graisseux sans septum épais ni nodule charnu.",
      "diagnosis": "Tumeur lipomateuse profonde intramusculaire de la cuisse (lipome profond / tumeur lipomateuse atypique - ALT)",
      "synonyms": [
          "Lipome profond intramusculaire / tumeur lipomateuse atypique (ALT)",
          "Tumeur lipomateuse profonde de grande taille (> 10 cm)",
          "Liposarcome bien différencié (ALT) / lipome profond de la cuisse"
      ],
      "requiredKeywords": [
          [
              "lipome",
              "lipomateuse",
              "alt",
              "liposarcome"
          ],
          [
              "profond",
              "profonde",
              "intramusculaire",
              "atypique",
              "cuisse"
          ]
      ],
      "distractors": [
          "Liposarcome dédifférencié de haut grade",
          "Liposarcome myxoïde",
          "Hématome intramusculaire ancien de la cuisse"
      ],
      "keySigns": [
          "Masse lipomateuse profonde sous-aponévrotique de grand axe > 10 cm (20 cm)",
          "Signal identique à la graisse sous-cutanée sur toutes les séquences avec saturation complète du signal en Fat-Sat",
          "Absence de cloison épaisse (> 2 mm) ou de portion nodulaire charnue non adipeuse, mais taille > 10 cm et siège profond imposant la recherche d'amplification MDM2"
      ],
      "explanation": "Toute tumeur lipomateuse profonde (sous le fascia superficiel) et de grand axe > 10 cm (ici 20 cm), même d'aspect purement graisseux sans cloison épaisse ni nodule charnu, doit faire discuter un lipome profond vs une tumeur lipomateuse atypique (ALT / MDM2+)."
  },
  {
      "id": "mail-78",
      "title": "Cas Imagerie #78",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 3,
      "image": "./figures/mails/mail-78.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM du bassin — analysez la vaste ostéolyse du toit acétabulaire et de l'aile iliaque et la discussion de renforcement par vissage-cimentoplastie.",
      "diagnosis": "Métastase osseuse ostéolytique du cotyle (toit acétabulaire) et de l'aile iliaque relevant d'un vissage-cimentoplastie",
      "synonyms": [
          "Métastase ostéolytique du cotyle et de l'aile iliaque",
          "Lésion secondaire ostéolytique acétabulaire à haut risque fracturaire",
          "Ostéolyse maligne du toit du cotyle (indication de cimentoplastie / ostéosynthèse percutanée)"
      ],
      "requiredKeywords": [
          [
              "métastase",
              "metastase",
              "secondaire",
              "ostéolyse"
          ],
          [
              "cotyle",
              "acétabulaire",
              "acetabulaire",
              "iliaque",
              "bassin",
              "hanche"
          ]
      ],
      "distractors": [
          "Kyste synovial acétabulaire dégénératif",
          "Dysplasie fibreuse de l'os iliaque",
          "Ostéonécrose aseptique de la tête fémorale"
      ],
      "keySigns": [
          "Vaste ostéolyse destructrice de la colonne antérieure/toit du cotyle et de l'aile iliaque avec rupture corticale",
          "Haut risque d'impaction céphalique et de fracture pathologique en zone portante acétabulaire",
          "Indication de consolidation percutanée combinée (vis ancrée dans l'os iliaque sain postérieur + cimentoplastie du toit acétabulaire) articulée avec la radiothérapie"
      ],
      "explanation": "L'ostéolyse métastatique étendue du toit acétabulaire expose à un risque élevé de protrusion acétabulaire mécanique, justifiant une consolidation par radiologie interventionnelle (vissage ilio-acétabulaire ancré en os sain postérieur associé à une cimentoplastie)."
  },
  {
      "id": "mail-79",
      "title": "Cas Imagerie #79",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 3,
      "image": "./figures/mails/mail-79.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM du bassin en fenêtre osseuse — analysez les multiples plages d'ostéocondensation médullaire iliaques bilatérales en majoration progressive.",
      "diagnosis": "Lésions osseuses ostéocondensantes multiples du bassin (métastases ostéocondensantes / ostéopathie condensante secondaire)",
      "synonyms": [
          "Lésions osseuses ostéocondensantes iliaques bilatérales (métastases condensantes / lymphome / ostéodystrophie)",
          "Métastases osseuses ostéocondensantes du bassin",
          "Ostéocondensations iliaques multiples évolutives"
      ],
      "requiredKeywords": [
          [
              "condensante",
              "condensantes",
              "ostéocondensation",
              "ostéocondensantes",
              "métastase",
              "métastases"
          ],
          [
              "bassin",
              "iliaque",
              "iliaques",
              "hanche"
          ]
      ],
      "distractors": [
          "Ostéose iliaque condensante bénigne du post-partum",
          "Énostose solitaire bénigne",
          "Sacro-iliite ankylosante bilatérale"
      ],
      "keySigns": [
          "Foyers multiples d'ostéocondensation médullaire nodulaires et confluents disséminés dans les deux os iliaques",
          "Caractère évolutif (majoration en taille et en nombre sur les scanners successifs)",
          "Indication de caractérisation complémentaire par IRM médullaire et TEP-TDM"
      ],
      "explanation": "Des plages d'ostéocondensation médullaire iliaques multiples et évolutives dans le temps ne doivent pas être banalisées en simples îlots condensants ni en ostéose iliaque condensante, et imposent un bilan par IRM et TEP-scanner (métastases condensantes, hémopathie ou ostéodystrophie rénale)."
  },
  {
      "id": "mail-80",
      "title": "Cas Imagerie #80",
      "region": "jambe-cheville-pied",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-80.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la cheville — analysez la petite lésion corticale dorsale du col du talus entourée d'un œdème osseux talien et d'une réaction capsulaire antérieure.",
      "diagnosis": "Ostéome ostéoïde sous-périosté de la face dorsale du col du talus",
      "synonyms": [
          "Ostéome ostéoïde du col du talus (astragale)",
          "Ostéome ostéoïde sous-périosté / juxta-articulaire du talus",
          "Ostéome ostéoïde de la cheville (col du talus)"
      ],
      "requiredKeywords": [
          [
              "ostéome",
              "osteome",
              "ostéoïde",
              "osteoide"
          ]
      ],
      "distractors": [
          "Conflit antérieur osseux simple de cheville",
          "Ostéochondrite disséquante du dôme talien",
          "Fracture de fatigue du col du talus"
      ],
      "keySigns": [
          "Petit nidus finement cerclé sur le versant dorsal sous-périosté du col du talus",
          "Œdème médullaire réactionnel du col du talus et épaississement inflammatoire capsulo-synovial du récessus antérieur de la cheville",
          "Rehaussement artériel précoce du nidus en IRM dynamique confirmant l'indication de thermoablation par radiofréquence sous TDM"
      ],
      "explanation": "Le col du talus est la localisation préférentielle de l'ostéome ostéoïde au pied : sa topographie intra-capsulaire engendre une synovite du récessus antérieur pouvant mimer un conflit antérieur de cheville, redressée par l'IRM dynamique."
  },
  {
      "id": "mail-81",
      "title": "Cas Imagerie #81",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-81.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM rachidienne — analysez cette masse tissulaire infiltrante bien limitée développée dans la loge musculaire paravertébrale gauche.",
      "diagnosis": "Tumeur desmoïde (fibromatose profonde) des muscles paravertébraux",
      "synonyms": [
          "Tumeur desmoïde paravertébrale",
          "Fibromatose profonde (desmoïde) paravertébrale",
          "Tumeur desmoïde des parties molles du dos / rachis"
      ],
      "requiredKeywords": [
          [
              "desmoïde",
              "desmoide",
              "fibromatose"
          ]
      ],
      "distractors": [
          "Schwannome foraminal lombaire",
          "Abcès paravertébral du psoas / érecteurs du rachis",
          "Hématome intramusculaire paravertébral"
      ],
      "keySigns": [
          "Masse tissulaire fusiforme infiltrant la loge musculaire paravertébrale gauche le long des plans aponévrotiques",
          "Signal hétérogène associant des plages cellulaires rehaussées et des bandes fibreuses hypo-intenses en T2",
          "Indication de microbiopsie percutanée radioguidée (prise en charge non chirurgicale de première intention)"
      ],
      "explanation": "Une masse fusiforme indolore des muscles paravertébraux infiltrant les fascias avec bandes fibreuses en hyposignal T2 évoque une tumeur desmoïde (fibromatose profonde), dont la confirmation repose sur la microbiopsie percutanée (la chirurgie n'étant plus le traitement de première intention)."
  },
  {
      "id": "mail-82",
      "title": "Cas Imagerie #82",
      "region": "genou",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-82.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM du genou en coupe coronale et axiale — analysez cette petite lacune intracorticale ronde contenant une calcification centrale et entourée d'une ostéosclérose réactionnelle.",
      "diagnosis": "Ostéome ostéoïde cortical du genou",
      "synonyms": [
          "Ostéome ostéoïde du tibia proximal / fémur distal",
          "Ostéome ostéoïde cortical du genou",
          "Ostéome ostéoïde"
      ],
      "requiredKeywords": [
          [
              "ostéome",
              "osteome",
              "ostéoïde",
              "osteoide"
          ]
      ],
      "distractors": [
          "Abcès central osseux de Brodie",
          "Fracture de fatigue corticale longitudinale",
          "Énostose (îlot condensant bénin)"
      ],
      "keySigns": [
          "Nidus radiotransparent intracortical arrondi de moins de 15 mm finement délimité",
          "Calcification centrale dense en « cocarde » au sein du nidus",
          "Épaississement cortical et ostéosclérose réactionnelle périlésionnelle"
      ],
      "explanation": "L'image TDM en cocarde — petite lacune intracorticale bien limitée centrée par un point calcifié dense et entourée d'une ostéocondensation corticale réactionnelle — est caractéristique d'un ostéome ostéoïde."
  },
  {
      "id": "mail-47",
      "title": "Cas Imagerie #47",
      "region": "hanche",
      "modality": "Radiographie",
      "difficulty": 2,
      "image": "./figures/mails/mail-47.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Radiographie du fémur proximal — analysez la trame osseuse diaphyso-métaphysaire remaniée et le matériel d'ostéosynthèse centromédullaire.",
      "diagnosis": "Dysplasie fibreuse du fémur proximal ostéosynthésée",
      "synonyms": [
          "Dysplasie fibreuse du fémur proximal",
          "Dysplasie fibreuse fémorale",
          "Dysplasie fibreuse osseuse"
      ],
      "requiredKeywords": [
          [
              "dysplasie",
              "fibreuse"
          ],
          [
              "fémur",
              "femur",
              "fémorale",
              "hanche"
          ]
      ],
      "distractors": [
          "Maladie de Paget du fémur proximal",
          "Chondrosarcome dédifférencié du fémur",
          "Kyste osseux essentiel solitaire du fémur proximal"
      ],
      "keySigns": [
          "Lésion médullaire soufflante diaphyso-métaphysaire proximale du fémur en verre dépoli",
          "Amincissement cortical endosté sans réaction périostée agressive",
          "Ostéosynthèse préventive ou curative par enclouage centromédullaire cervico-diaphysaire"
      ],
      "explanation": "La dysplasie fibreuse du fémur proximal se caractérise par un remplacement médullaire fibreux en « verre dépoli » fragilisant l'os porteur (déformation en crosse de berger / fractures pathologiques), nécessitant fréquemment un enclouage centromédullaire cervico-diaphysaire."
  },
  {
      "id": "mail-48",
      "title": "Cas Imagerie #48",
      "region": "hanche",
      "modality": "Arthroscanner / TDM",
      "difficulty": 2,
      "image": "./figures/mails/mail-48.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "TDM du bassin — analysez la ostéolyse corticale du cadre obturateur et la masse tissulaire adjacente.",
      "diagnosis": "Métastase osseuse ostéolytique de la branche ilio-pubienne avec envahissement des parties molles",
      "synonyms": [
          "Métastase ostéolytique de la branche ilio-pubienne",
          "Lésion osseuse secondaire du cadre obturateur",
          "Plasmocytome / métastase de la branche pubienne"
      ],
      "requiredKeywords": [
          [
              "métastase",
              "metastase",
              "secondaire",
              "plasmocytome"
          ],
          [
              "pubienne",
              "pubis",
              "ilio-pubienne",
              "obturateur",
              "bassin"
          ]
      ],
      "distractors": [
          "Fracture par insuffisance osseuse de la branche ilio-pubienne",
          "Ostéite pubienne aseptique",
          "Enchondrome calcifié de la branche ilio-pubienne"
      ],
      "keySigns": [
          "Ostéolyse géographique agressive de type Lodwick IC/II détruisant les corticales de la branche ilio-pubienne",
          "Volumineuse composante tissulaire extra-osseuse envahissant la loge obturatrice et les adducteurs",
          "Absence de matrice minéralisée chondroïde ou ostéoïde"
      ],
      "explanation": "L'ostéolyse destructrice de la branche ilio-pubienne avec rupture corticale circonférentielle et masse des parties molles est caractéristique d'une localisation secondaire agressive (ou d'un plasmocytome)."
  },
  {
      "id": "mail-49",
      "title": "Cas Imagerie #49",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-49.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM — analysez le signal caractéristique en pondération T1/T2 de cette lésion nodulaire bien limitée au contact des structures capsulo-synoviales.",
      "diagnosis": "Tumeur ténosynoviale à cellules géantes (TTCG / synovite villonodulaire)",
      "synonyms": [
          "Tumeur ténosynoviale à cellules géantes",
          "TTCG",
          "Synovite villonodulaire",
          "SVN nodulaire"
      ],
      "requiredKeywords": [
          [
              "ténosynoviale",
              "tenosynoviale",
              "ttcg",
              "villonodulaire",
              "svn",
              "cellules géantes"
          ]
      ],
      "distractors": [
          "Kyste synovial poplité simple",
          "Lipome arborescent synovial",
          "Schwannome kystisé"
      ],
      "keySigns": [
          "Masse synoviale ou juxta-articulaire lobulée bien circonscrite",
          "Hyposignal franc T1 et T2 lié aux dépôts d'hémosidérine",
          "Rehaussement intense après injection de gadolinium"
      ],
      "explanation": "La tumeur ténosynoviale à cellules géantes (TTCG, anciennement synovite villonodulaire) présente un hyposignal T1 et T2 caractéristique lié à la surcharge macrophagique en hémosidérine."
  },
  {
      "id": "mail-50",
      "title": "Cas Imagerie #50",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-50.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du genou — analysez la topographie épiphysaire sous-chondrale, la composante kystique à niveaux liquides et l'œdème périlésionnel.",
      "diagnosis": "Lésion épiphysaire anévrismalisée du condyle fémoral médial (TCG / chondroblastome avec kyste anévrismal secondaire)",
      "synonyms": [
          "Tumeur à cellules géantes (TCG) anévrismalisée du condyle fémoral",
          "Chondroblastome épiphysaire avec kyste osseux anévrismal secondaire",
          "Kyste osseux anévrismal secondaire sur tumeur épiphysaire du condyle fémoral"
      ],
      "requiredKeywords": [
          [
              "anévrismal",
              "anevrismal",
              "tcg",
              "cellules géantes",
              "chondroblastome"
          ],
          [
              "condyle",
              "épiphysaire",
              "epiphysaire",
              "fémoral",
              "genou"
          ]
      ],
      "distractors": [
          "Infarctus osseux épiphysaire du condyle fémoral",
          "Ostéochondrite disséquante du condyle fémoral médial",
          "Geode sous-chondrale d'arthrose fémoro-tibiale"
      ],
      "keySigns": [
          "Lésion ostéolytique excentrée à point de départ épiphysaire du condyle fémoral médial atteignant la lame osseuse sous-chondrale",
          "Logettes kystiques multiples avec niveaux liquide-liquide de sédimentation hématique (contingent anévrismal secondaire)",
          "Important œdème osseux et des parties molles périlésionnel réactionnel"
      ],
      "explanation": "Devant une lésion épiphysaire bien limitée comportant des niveaux liquide-liquide et un œdème réactionnel marqué chez le sujet jeune, il faut évoquer une tumeur épiphysaire bénigne localement agressive (tumeur à cellules géantes ou chondroblastome) remaniée par un kyste osseux anévrismal secondaire."
  },
  {
      "id": "mail-51",
      "title": "Cas Imagerie #51",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-51.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM coronale T1 de la hanche — analysez cette lésion centro-médullaire bien limitée à liseré périphérique de la région intertrochantérienne.",
      "diagnosis": "Dysplasie fibreuse quiescente en involution de la métaphyse fémorale proximale",
      "synonyms": [
          "Dysplasie fibreuse du fémur proximal",
          "Lésion fibro-osseuse bénigne du col fémoral (dysplasie fibreuse / liposcléroxanthome)",
          "Dysplasie fibreuse quiescente fémorale"
      ],
      "requiredKeywords": [
          [
              "dysplasie",
              "fibreuse",
              "fibro-osseuse",
              "liposcléroxanthome"
          ]
      ],
      "distractors": [
          "Métastase ostéolytique du col fémoral",
          "Sarcome d'Ewing du fémur proximal",
          "Ostéomyélite aiguë hématogène du fémur"
      ],
      "keySigns": [
          "Lésion intramédullaire métaphysaire proximale du fémur parfaitement circonscrite",
          "Liseré périphérique continu en hyposignal T1 témoignant de la sclérose marginale (type Lodwick IA)",
          "Respect complet des corticales et absence d'œdème périlésionnel"
      ],
      "explanation": "Cette lésion centro-médullaire métaphysaire fémorale proximale bordée d'un liseré sclérotique épais sans agressivité corticale correspond à une lésion fibro-osseuse bénigne quiescente de type dysplasie fibreuse en involution."
  },
  {
      "id": "mail-52",
      "title": "Cas Imagerie #52",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-52.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du sacrum — analysez le remplacement de la moelle osseuse adjacente au foramen sacré S2.",
      "diagnosis": "Lésion osseuse secondaire (métastase) du sacrum au contact du foramen S2",
      "synonyms": [
          "Métastase osseuse sacrée (S2)",
          "Lésion secondaire du sacrum",
          "Métastase sacrée périforamוnale S2"
      ],
      "requiredKeywords": [
          [
              "métastase",
              "metastase",
              "secondaire"
          ],
          [
              "sacrum",
              "sacrée",
              "sacree",
              "s2"
          ]
      ],
      "distractors": [
          "Kyste de Tarlov sacré S2",
          "Fracture sacrée par insuffisance osseuse",
          "Îlot condensant bénin du sacrum"
      ],
      "keySigns": [
          "Nodule ostéolytique remplaçant le signal graisseux normal de l'aileron sacré en bordure du 2e trou sacré (S2)",
          "Hyposignal T1 / hypersignal STIR avec rehaussement tissulaire",
          "Menace directe sur la racine sacrée S2 homolatérale dans son foramen"
      ],
      "explanation": "La présence d'une lésion nodulaire focale remplaçant la moelle graisseuse sacrée au contact immédiat du foramen S2 correspond à une localisation osseuse secondaire (métastase sacrée)."
  },
  {
      "id": "mail-53",
      "title": "Cas Imagerie #53",
      "region": "main-poignet",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-53.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la main — analysez les rapports de cette masse tissulaire palmaire avec l'aponévrose palmaire superficielle et les tendons fléchisseurs.",
      "diagnosis": "Tumeur profonde des parties molles de la loge palmaire moyenne de la main (sous l'aponévrose palmaire)",
      "synonyms": [
          "Tumeur mésenchymateuse profonde de la loge palmaire moyenne de la main",
          "Tumeur des parties molles palmaires profondes de la main",
          "Schwannome / tumeur fibreuse ou synoviale de la loge palmaire moyenne"
      ],
      "requiredKeywords": [
          [
              "tumeur",
              "masse",
              "schwannome",
              "sarcome"
          ],
          [
              "palmaire",
              "main",
              "aponévrose",
              "aponevrose"
          ]
      ],
      "distractors": [
          "Maladie de Dupuytren (fibromatose palmaire superficielle)",
          "Kyste arthrosynovial de la poulie A1",
          "Ténosynovite infectieuse des fléchisseurs"
      ],
      "keySigns": [
          "Masse tissulaire bien limitée mais lobulée siégeant en profondeur de l'aponévrose palmaire superficielle",
          "Effet de masse refoulant les tendons fléchisseurs et les pédicules vasculo-nerveux digitaux dans la loge palmaire moyenne",
          "Hypersignal T2 hétérogène et prise de contraste tissulaire nécessitant une biopsie-exérèse spécialisée"
      ],
      "explanation": "Toute masse tissulaire palmaire située en profondeur de l'aponévrose palmaire superficielle dans la loge palmaire moyenne au contact des tendons fléchisseurs et des rameaux du nerf médian doit être explorée en centre référent avant geste chirurgical."
  },
  {
      "id": "mail-54",
      "title": "Cas Imagerie #54",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-54.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du genou — analysez cette formation nodulaire bien limitée développée en profondeur du tendon patellaire distal.",
      "diagnosis": "Tumeur ténosynoviale à cellules géantes (TTCG) nodulaire de la bourse infrapatellaire profonde",
      "synonyms": [
          "TTCG nodulaire infrapatellaire",
          "Tumeur ténosynoviale à cellules géantes du genou (Hoffa / infrapatellaire)",
          "Synovite villonodulaire nodulaire infrapatellaire"
      ],
      "requiredKeywords": [
          [
              "ténosynoviale",
              "tenosynoviale",
              "ttcg",
              "villonodulaire",
              "svn",
              "cellules géantes"
          ],
          [
              "infrapatellaire",
              "patellaire",
              "hoffa",
              "genou"
          ]
      ],
      "distractors": [
          "Bursite infrapatellaire profonde simple",
          "Tendinopathie nodulaire distale du tendon patellaire (maladie d'Osgood-Schlatter)",
          "Chondrome para-articulaire de la graisse de Hoffa"
      ],
      "keySigns": [
          "Masse nodulaire bien circonscrite logée dans la bourse infrapatellaire profonde entre le tendon patellaire et la tubérosité tibiale antérieure",
          "Signal intermédiaire à bas en T1 et T2 avec foyers d'hyposignal franc (hémosidérine)",
          "Absence d'infiltration osseuse tibiale sous-jacente"
      ],
      "explanation": "Cette masse nodulaire bien limitée en hyposignal T2 partiel développée dans la bourse infrapatellaire profonde à la partie inférieure du corps adipeux de Hoffa est typique d'une forme localisée (nodulaire) de tumeur ténosynoviale à cellules géantes (TTCG)."
  },
  {
      "id": "mail-55",
      "title": "Cas Imagerie #55",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-55.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM et TDM du bassin — analysez cette lésion soufflante bien limitée de la branche ilio-pubienne à contenu majoritairement kystique.",
      "diagnosis": "Dysplasie fibreuse à prédominance kystique de la branche ilio-pubienne",
      "synonyms": [
          "Dysplasie fibreuse kystisée de la branche ilio-pubienne",
          "Dysplasie fibreuse du bassin (branche pubienne)",
          "Dysplasie fibreuse osseuse pelvienne"
      ],
      "requiredKeywords": [
          [
              "dysplasie",
              "fibreuse"
          ],
          [
              "pubienne",
              "pubis",
              "ilio-pubienne",
              "bassin",
              "hanche"
          ]
      ],
      "distractors": [
          "Métastase ostéolytique de la branche ilio-pubienne",
          "Chondrosarcome pelvien",
          "Kyste synovial obturateur à développement intra-osseux"
      ],
      "keySigns": [
          "Lésion intramédullaire soufflante bien circonscrite remodelant la branche ilio-pubienne sans rupture corticale agressive",
          "Liseré de sclérose périphérique continu et plages résiduelles en verre dépoli au scanner",
          "Dégénérescence kystique centrale en franc hypersignal T2 avec rehaussement uniquement périphérique et septal"
      ],
      "explanation": "La dysplasie fibreuse pelvienne peut subir une dégénérescence kystique marquée donnant un aspect pseudotumoral soufflant en hypersignal T2, mais le respect des corticales et les plages matricielles en verre dépoli orientent vers la bénignité."
  },
  {
      "id": "mail-56",
      "title": "Cas Imagerie #56",
      "region": "jambe-cheville-pied",
      "modality": "Radiographie",
      "difficulty": 2,
      "image": "./figures/mails/mail-56.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Radiographie de jambe — observez le pont calcifié/ossifié développé entre le tibia et la fibula.",
      "diagnosis": "Ossification post-traumatique de la membrane interosseuse tibio-fibulaire (synostose / myosite ossifiante)",
      "synonyms": [
          "Ossification de la membrane interosseuse tibio-fibulaire",
          "Synostose tibio-fibulaire acquise",
          "Ossification hétérotopique inter-tibio-fibulaire"
      ],
      "requiredKeywords": [
          [
              "ossification",
              "synostose",
              "calcification",
              "exostose"
          ],
          [
              "membrane",
              "interosseuse",
              "tibio-fibulaire",
              "tibiofibulaire",
              "fibula",
              "tibia"
          ]
      ],
      "distractors": [
          "Ostéosarcome parostéal du tibia",
          "Ostéochondrome (exostose ostéogénique) à coiffe cartilagineuse épaisse",
          "Chondrosarcome périphérique de la fibula"
      ],
      "keySigns": [
          "Pont osseux mature bien cortiqué développé dans le plan de la membrane interosseuse entre tibia et fibula",
          "Continuité trabéculaire régulière sans ostéolyse corticale ni réaction périostée maligne",
          "Absence de masse des parties molles adjacentes"
      ],
      "explanation": "Cette ossification mature bien cortiquée développée le long de l'insertion de la membrane interosseuse tibio-fibulaire correspond à une ossification métaplasique bénigne (souvent séquellaire d'une entorse ou d'un traumatisme de la syndesmose/membrane interosseuse)."
  },
  {
      "id": "mail-57",
      "title": "Cas Imagerie #57",
      "region": "main-poignet",
      "modality": "Radiographie",
      "difficulty": 1,
      "image": "./figures/mails/mail-57.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Radiographie centrée sur un rayon digital — analysez ce petit foyer condensant homogène de la houpe phalangienne.",
      "diagnosis": "Énostose (îlot condensant bénin) de la phalange distale",
      "synonyms": [
          "Énostose de la phalange distale",
          "Îlot condensant bénin phalangien",
          "Ilot osseux bénin de la phalange"
      ],
      "requiredKeywords": [
          [
              "énostose",
              "enostose",
              "îlot",
              "ilot",
              "condensant"
          ]
      ],
      "distractors": [
          "Ostéome ostéoïde de la phalange distale",
          "Tumeur glomique sous-unguéale",
          "Kyste épidermoïde intra-osseux de la phalange distale"
      ],
      "keySigns": [
          "Foyer d'ostéocondensation homogène intramédullaire de petite taille de la phalange distale",
          "Contours finement spiculés en « pattes d'araignée » se raccordant aux travées spongieuses normales",
          "Absence totale d'ostéolyse périphérique (pas de nidus), d'érosion corticale ou d'épaississement des parties molles"
      ],
      "explanation": "L'énostose (ou îlot condensant bénin) est une lésion ostéocondensante pure, asymptomatique (« Don't touch lesion »), sans nidus radiotransparent ni réaction périostée, qu'il ne faut pas confondre avec un ostéome ostéoïde."
  },
  {
      "id": "mail-58",
      "title": "Cas Imagerie #58",
      "region": "rachis",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-58.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM des articulations sacro-iliaques — analysez le signal osseux sous-chondral des berges sacrées et iliaques.",
      "diagnosis": "Sacro-iliite inflammatoire active (spondyloarthrite axiale)",
      "synonyms": [
          "Sacro-iliite inflammatoire bilatérale",
          "Spondyloarthrite axiale avec sacro-iliite active",
          "Remaniements inflammatoires sacro-iliaques (sacro-iliite)"
      ],
      "requiredKeywords": [
          [
              "sacro-iliite",
              "sacroiliite",
              "spondyloarthrite",
              "sacro-iliaque",
              "sacroiliaque"
          ]
      ],
      "distractors": [
          "Ostéose iliaque condensante bénigne",
          "Sacro-iliite infectieuse (pyogène ou tuberculeuse)",
          "Fracture sacrée en H par insuffisance osseuse"
      ],
      "keySigns": [
          "Œdème osseux sous-chondral en franc hypersignal STIR/T2 Fat-Sat des berges articulaires sacro-iliaques",
          "Irrégularités et érosions sous-chondrales de la portion synoviale antéro-inférieure des articulations sacro-iliaques",
          "Respect des parties molles pelviennes sans abcès péri-articulaire"
      ],
      "explanation": "L'œdème osseux sous-chondral inflammatoire des berges sacro-iliaques associé à des érosions sous-chondrales répond aux critères ASAS de sacro-iliite active dans le cadre d'une spondyloarthrite axiale."
  },
  {
      "id": "mail-59",
      "title": "Cas Imagerie #59",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-59.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM et TDM de l'os iliaque — analysez cette lésion osseuse infiltrante de l'aile iliaque associée à une réaction périostée/tissulaire.",
      "diagnosis": "Lésion osseuse maligne de l'aile iliaque en territoire irradié (métastase osseuse / sarcome radio-induit)",
      "synonyms": [
          "Métastase osseuse de l'aile iliaque ou sarcome radio-induit",
          "Lésion secondaire de l'os iliaque",
          "Sarcome osseux radio-induit / récidive métastatique iliaque"
      ],
      "requiredKeywords": [
          [
              "métastase",
              "metastase",
              "secondaire",
              "sarcome",
              "radio-induit"
          ],
          [
              "iliaque",
              "bassin",
              "hanche"
          ]
      ],
      "distractors": [
          "Ostéoradionécrose bénigne simple de l'aile iliaque",
          "Îlot condensant géant de l'aile iliaque",
          "Maladie de Paget pelvienne isolée"
      ],
      "keySigns": [
          "Infiltration médullaire hétérogène de l'aile iliaque en hyposignal T1 et hypersignal T2/diffusion",
          "Remaniement ostéolytique et condensant mixte avec effraction corticale et épaississement tissulaire juxta-cortical",
          "Nécessité d'une biopsie radioguidée pour différencier récidive métastatique et sarcome radio-induit sur os irradié"
      ],
      "explanation": "L'apparition d'une lésion osseuse infiltrante avec réaction périostée et composante tissulaire en territoire pelvien antérieurement irradié impose une biopsie osseuse pour trancher entre localisation secondaire et sarcome radio-induit."
  },
  {
      "id": "mail-60",
      "title": "Cas Imagerie #60",
      "region": "genou",
      "modality": "Radiographie",
      "difficulty": 1,
      "image": "./figures/mails/mail-60.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Radiographie du genou — recherchez un fin liseré calcifié au sein des fibrocartilages et du cartilage hyalin.",
      "diagnosis": "Chondrocalcinose articulaire (arthropathie à pyrophosphate de calcium / CPPD)",
      "synonyms": [
          "Chondrocalcinose articulaire du genou",
          "Rhumatisme à pyrophosphate de calcium (CPPD)",
          "Calcifications méniscales de chondrocalcinose"
      ],
      "requiredKeywords": [
          [
              "chondrocalcinose",
              "pyrophosphate",
              "cppd"
          ]
      ],
      "distractors": [
          "Ostéochondromatose synoviale primitive du genou",
          "Rhumatisme à hydroxyapatite (calcifications péri-articulaires)",
          "Ostéochondrite disséquante des condyles fémoraux"
      ],
      "keySigns": [
          "Calcifications linéaires et finement grenues des fibrocartilages méniscaux dessinant le triangle méniscal",
          "Fin liseré calcique sous-chondral doublant le contour du cartilage hyalin fémoro-tibial",
          "Arthropathie structurale associée"
      ],
      "explanation": "La présence de calcifications méniscales et cartilagineuses hyalines bilatérales est pathognomonique d'une chondrocalcinose articulaire (dépôts de cristaux de pyrophosphate de calcium dihydraté)."
  },
  {
      "id": "mail-61",
      "title": "Cas Imagerie #61",
      "region": "rachis",
      "modality": "Arthroscanner / TDM",
      "difficulty": 1,
      "image": "./figures/mails/mail-61.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "Reconstruction TDM sagittale de la charnière thoraco-lombaire — analysez la morphologie du plateau vertébral supérieur de T12.",
      "diagnosis": "Fracture-tassement ostéoporotique récente du plateau supérieur de T12",
      "synonyms": [
          "Fracture-tassement vertébrale ostéoporotique de T12",
          "Tassement vertébral bénin du plateau supérieur de T12",
          "Fracture par insuffisance osseuse de T12"
      ],
      "requiredKeywords": [
          [
              "fracture",
              "tassement"
          ],
          [
              "t12",
              "vertébrale",
              "vertebrale",
              "thoraco-lombaire",
              "ostéoporotique",
              "osteoporotique"
          ]
      ],
      "distractors": [
          "Fracture pathologique maligne de T12 sur métastase",
          "Spondylodiscite infectieuse T11-T12",
          "Hernie intraspongieuse séquellaire de maladie de Scheuermann"
      ],
      "keySigns": [
          "Impaction cunéiforme du plateau vertébral supérieur de T12 avec bande d'ostéocondensation trabéculaire sous-chondrale d'impaction",
          "Respect complet du mur vertébral postérieur et des pédicules sans ostéolyse corticale",
          "Déminéralisation osseuse diffuse sans masse épidurale ni paravertébrale"
      ],
      "explanation": "Ce tassement du plateau supérieur de T12 avec bande de condensation sous-chondrale d'impaction trabéculaire et respect du mur postérieur est typique d'une fracture vertébrale ostéoporotique bénigne."
  },
  {
      "id": "mail-62",
      "title": "Cas Imagerie #62",
      "region": "hanche",
      "modality": "IRM",
      "difficulty": 2,
      "image": "./figures/mails/mail-62.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM de la hanche — analysez cette collection liquidienne bien limitée des parties molles péritrochantériennes.",
      "diagnosis": "Collection liquidienne péritrochantérienne post-opératoire de la hanche (sérome / hématome enkysté / abcès)",
      "synonyms": [
          "Collection liquidienne péritrochantérienne post-opératoire (sérome / abcès)",
          "Sérome de Morel-Lavallée / collection péritrochantérienne",
          "Bursite / collection liquidienne péritrochantérienne de la hanche"
      ],
      "requiredKeywords": [
          [
              "collection",
              "sérome",
              "serome",
              "abcès",
              "abces",
              "hématome",
              "hematome",
              "bursite"
          ],
          [
              "trochantérienne",
              "trochanterienne",
              "péritrochantérienne",
              "hanche"
          ]
      ],
      "distractors": [
          "Liposarcome myxoïde de la racine de la cuisse",
          "Kyste paralabral de la hanche",
          "Ostéochondromatose synoviale coxofémorale"
      ],
      "keySigns": [
          "Collection liquidienne bien limitée en franc hypersignal T2/STIR située en regard de la face latérale du grand trochanter",
          "Paroi fine régulière avec discret œdème des plans musculo-aponévrotiques adjacents",
          "Indication possible de ponction-aspiration écho-guidée à visée diagnostique et évacuatrice"
      ],
      "explanation": "Cette collection liquidienne pure bien circonscrite des parties molles péritrochantériennes en hypersignal T2 franc correspond à un sérome post-opératoire (ou collection enkystée) accessible à une ponction écho-guidée."
  },
  {
      "id": "mail-63",
      "title": "Cas Imagerie #63",
      "region": "genou",
      "modality": "IRM",
      "difficulty": 3,
      "image": "./figures/mails/mail-63.jpg",
      "clinicalContext": "",
      "questionPrompt": "Quel est votre diagnostic sur cette imagerie ?",
      "hint": "IRM du genou — analysez la cavité épiphyso-métaphysaire tibiale proximale traitée par comblement et le nodule tissulaire postérieur au contact des vaisseaux poplités.",
      "diagnosis": "Récidive locale de tumeur à cellules géantes (TCG) du tibia proximal au contact du pédicule poplité",
      "synonyms": [
          "Récidive locale de tumeur à cellules géantes (TCG) du tibia proximal",
          "Récidive de TCG tibiale proximale",
          "Tumeur à cellules géantes (TCG) récidivante du tibia proximal"
      ],
      "requiredKeywords": [
          [
              "tumeur à cellules géantes",
              "cellules géantes",
              "tcg"
          ]
      ],
      "distractors": [
          "Granulome à corps étranger isolé sur ciment acrylique",
          "Kyste poplité de Baker simple",
          "Anévrisme de l'artère poplitée"
      ],
      "keySigns": [
          "Bourgeon tissulaire ostéolytique récidivant en périphérie de la cavité de curetage-comblement épiphyso-métaphysaire du tibia proximal",
          "Extension extra-osseuse postérieure venant au contact direct du pédicule vasculo-nerveux poplité",
          "Signal tissulaire intermédiaire T1/T2 prenant intensément le contraste"
      ],
      "explanation": "L'apparition d'un nodule tissulaire ostéolytique en périphérie d'une cavité de curetage-comblement tibial proximal avec extension postérieure au contact du pédicule poplité signe une récidive locale de tumeur à cellules géantes (TCG)."
  },
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
  }
];
