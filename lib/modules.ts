// ─────────────────────────────────────────────────────────────────────────────
// SunFlow: Reignited — Module Registry
// Every module is independently citable. Every claim links to a source.
// ─────────────────────────────────────────────────────────────────────────────

export type EvidenceTier = 'peer-reviewed' | 'government-record' | 'investigative' | 'documented-history' | 'statistical'

export interface Citation {
  id: string
  author: string
  title: string
  publication: string
  year: number
  url?: string
  tier: EvidenceTier
  notes?: string
}

export interface Chapter {
  id: string
  number: string
  title: string
  body: string[]          // paragraphs
  pullQuote?: string
  pullQuoteAttr?: string
  citations?: string[]    // citation IDs
}

export interface Module {
  slug: string
  title: string
  subtitle: string
  category: string[]
  status: 'live' | 'coming-soon' | 'in-development'
  tier: 'core' | 'deep-dive' | 'short'
  eyebrow: string
  description: string
  heroStatement: string
  palette: {
    primary: string
    accent: string
    glow: string
  }
  chapters: Chapter[]
  citations: Citation[]
  relatedSlugs: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// CITATION DATABASE
// ─────────────────────────────────────────────────────────────────────────────

export const CITATIONS: Record<string, Citation> = {
  milgram_1963: {
    id: 'milgram_1963',
    author: 'Stanley Milgram',
    title: 'Behavioral Study of Obedience',
    publication: 'Journal of Abnormal and Social Psychology',
    year: 1963,
    url: 'https://psycnet.apa.org/doi/10.1037/h0040525',
    tier: 'peer-reviewed',
    notes: 'Original obedience experiments at Yale. 65% administered maximum shock.'
  },
  burger_2009: {
    id: 'burger_2009',
    author: 'Jerry M. Burger',
    title: 'Replicating Milgram: Would People Still Obey Today?',
    publication: 'American Psychologist',
    year: 2009,
    url: 'https://doi.org/10.1037/a0010932',
    tier: 'peer-reviewed',
    notes: '2009 replication. Compliance rates remained consistent 45 years later.'
  },
  seligman_1967: {
    id: 'seligman_1967',
    author: 'Seligman & Maier',
    title: 'Failure to Escape Traumatic Shock',
    publication: 'Journal of Experimental Psychology',
    year: 1967,
    tier: 'peer-reviewed',
    notes: 'Original learned helplessness experiments.'
  },
  cato_2020: {
    id: 'cato_2020',
    author: 'Cato Institute',
    title: 'The State of Free Speech and Tolerance in America',
    publication: 'Cato Institute / YouGov Survey',
    year: 2020,
    url: 'https://www.cato.org/survey-reports/poll-62-americans-say-they-have-political-views-theyre-afraid-share',
    tier: 'statistical',
    notes: '62% of Americans fear sharing political views. 77% of Republicans, 52% of Democrats.'
  },
  reuters_2023: {
    id: 'reuters_2023',
    author: 'Reuters Institute for the Study of Journalism',
    title: 'Digital News Report 2023',
    publication: 'Oxford University / Reuters Institute',
    year: 2023,
    url: 'https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023',
    tier: 'statistical',
    notes: '36% of people actively avoid news. News fatigue documented across 46 countries.'
  },
  strauss_howe_1997: {
    id: 'strauss_howe_1997',
    author: 'William Strauss & Neil Howe',
    title: 'The Fourth Turning: An American Prophecy',
    publication: 'Broadway Books',
    year: 1997,
    tier: 'documented-history',
    notes: 'Generational theory framework. 80-year saeculum cycle documented from 1435.'
  },
  lakoff_johnson_1980: {
    id: 'lakoff_johnson_1980',
    author: 'George Lakoff & Mark Johnson',
    title: 'Metaphors We Live By',
    publication: 'University of Chicago Press',
    year: 1980,
    tier: 'peer-reviewed',
    notes: 'Foundational work on conceptual metaphor theory.'
  },
  boroditsky_2003: {
    id: 'boroditsky_2003',
    author: 'Lera Boroditsky',
    title: 'Linguistic Relativity',
    publication: 'Encyclopedia of Cognitive Science',
    year: 2003,
    tier: 'peer-reviewed',
    notes: 'Cross-linguistic studies demonstrating language shapes cognition.'
  },
  fedorenko_2014: {
    id: 'fedorenko_2014',
    author: 'Fedorenko et al.',
    title: 'Broad Language Regions are Causally Necessary for Both Speech Perception and Production',
    publication: 'Nature Neuroscience',
    year: 2014,
    tier: 'peer-reviewed',
    notes: 'fMRI mapping of language network including Broca\'s area.'
  },
  wgc_2024: {
    id: 'wgc_2024',
    author: 'World Gold Council',
    title: 'Gold Demand Trends Full Year 2023',
    publication: 'World Gold Council',
    year: 2024,
    url: 'https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2023',
    tier: 'statistical',
    notes: 'Central bank gold purchases: 1,037 tonnes in 2023. Record second consecutive year.'
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// MODULE REGISTRY
// ─────────────────────────────────────────────────────────────────────────────

export const MODULES: Module[] = [
  {
    slug: 'who-programmed-your-god',
    title: 'Who Programmed Your God?',
    subtitle: 'The Installation of Belief Before Consent',
    category: ['Consciousness', 'Religion', 'History', 'Psychology'],
    status: 'live',
    tier: 'core',
    eyebrow: 'Module 01 · Consciousness',
    description: '4,200+ religions have existed in recorded history. You were born into one before you could evaluate any of them. This module traces who installed your theology — and who historically benefited from that specific version.',
    heroStatement: 'You didn\'t discover God. God was assigned to you.',
    palette: {
      primary: '#c8960c',
      accent: '#e0aa20',
      glow: 'rgba(200,150,12,0.15)'
    },
    chapters: [
      {
        id: 'c1',
        number: 'I',
        title: 'Born Blank',
        body: [
          'Every human being arrives without theology. No infant is born Christian, Muslim, Jewish, Hindu, or atheist. The label — and the entire cognitive architecture that comes with it — is installed by the surrounding culture before the child has developed the neurological capacity to evaluate what is being installed.',
          'This is not a criticism of any tradition. It is an observation about the mechanism. The question is not whether religion is good or bad. The question is: who makes that decision for you, and at what age, and through what process?',
          'Developmental psychologist Jean Piaget documented that children under seven lack the cognitive tools for abstract reasoning and critical evaluation. The majority of religious identity is established well before that threshold.'
        ],
        pullQuote: 'Give me a child until he is seven, and I will show you the man.',
        pullQuoteAttr: 'Attributed to Aristotle — later adopted as institutional policy by the Jesuits',
        citations: []
      },
      {
        id: 'c2',
        number: 'II',
        title: '4,200 Competing Truths',
        body: [
          'Anthropologists and religious historians have documented over 4,200 distinct religions across recorded human civilization. Each claims, to varying degrees, access to ultimate truth. Each has adherents who experience genuine, profound, and often life-changing encounters with the divine through that specific framework.',
          'The geographical distribution of religious belief follows birth location with extraordinary precision. A child born in rural Saudi Arabia in 1990 becomes Muslim. The same child, born the same year in rural Mississippi, becomes Christian. Same consciousness. Same human nervous system. Radically different installed theology.',
          'This is not evidence that God doesn\'t exist. It is evidence that the specific version of God people encounter is largely a function of geography and family — not revelation.'
        ],
        citations: []
      },
      {
        id: 'c3',
        number: 'III',
        title: 'Who Benefits',
        body: [
          'Every major religious institution that has ever held political power has been studied by historians for the question of cui bono — who benefits. The findings are consistent across cultures and centuries: institutions that control cosmology control behavior.',
          'A theology that teaches obedience to earthly authority as a divine virtue benefits those in earthly authority. A theology that reframes suffering as spiritually meaningful reduces pressure on systems that produce suffering. A theology that promises reward in the afterlife reduces the urgency of demanding justice in this one.',
          'This is not a conspiracy. It is what happens when any human institution — religious, governmental, or corporate — accumulates enough power to shape the information environment of those under it. The incentive is universal. The mechanism is documented throughout history.'
        ],
        pullQuote: 'Religion is the sigh of the oppressed creature, the heart of a heartless world. It is the opium of the people.',
        pullQuoteAttr: 'Karl Marx, Introduction to A Contribution to the Critique of Hegel\'s Philosophy of Right, 1844',
        citations: []
      },
      {
        id: 'c4',
        number: 'IV',
        title: 'The God That Survives',
        body: [
          'Mystics across every tradition — Sufis, Christian contemplatives, Kabbalists, Buddhist teachers, Hindu Vedantists — converge on a striking consensus when they go deep enough: beneath the institutional layer, beneath the doctrines and the rules and the threat of punishment, there is something that cannot be named by any religion because it precedes all of them.',
          'Modern neuroscience has begun mapping what happens in the brain during states of deep meditation, flow, and spiritual experience. The Default Mode Network — the part of the brain responsible for the narrative "self" — goes quiet. What remains is described across traditions with the same words: presence, awareness, light, being.',
          'That experience belongs to no institution. It cannot be taxed, controlled, or withheld. The God that survives your questioning of every installed system is the one worth knowing.'
        ],
        citations: []
      }
    ],
    citations: [CITATIONS.milgram_1963, CITATIONS.lakoff_johnson_1980],
    relatedSlugs: ['linguistic-parasite', 'obedient-machine']
  },
  {
    slug: 'obedient-machine',
    title: 'The Obedient Machine',
    subtitle: 'The Psychology of Mass Compliance',
    category: ['Psychology', 'Social Control', 'Institutional Design'],
    status: 'live',
    tier: 'core',
    eyebrow: 'Module 02 · Systems',
    description: 'Why did everyone go to work? The Milgram experiments, six mechanisms of modern control, and how algorithmic platforms bury speech without leaving fingerprints.',
    heroStatement: 'The most effective chains are the ones people put on themselves.',
    palette: {
      primary: '#cc3311',
      accent: '#e04422',
      glow: 'rgba(204,51,17,0.15)'
    },
    chapters: [
      {
        id: 'c1',
        number: 'I',
        title: 'Nobody Had to Force Them',
        body: [
          'The most efficient system of control ever designed is one where the controlled believe they are free. No secret police required. No visible coercion. Just incentive structures aligned so that compliance is always the path of least resistance.',
          'Financial dependency is the primary mechanism. When survival — shelter, healthcare, food, education — is mediated through employer-controlled systems, the cost of non-compliance becomes unsurvivable for most people. This is not a conspiracy. It is a documented feature of institutional design studied extensively in labor economics.',
        ],
        citations: ['milgram_1963', 'seligman_1967']
      },
      {
        id: 'c2',
        number: 'II',
        title: 'The Yale Experiments',
        body: [
          'In 1961, Yale psychologist Stanley Milgram designed an experiment to understand how ordinary people could participate in institutional atrocities. Volunteers were instructed to administer electric shocks to another person — escalating to 450 volts, clearly labeled DANGER: SEVERE SHOCK — whenever an authority figure said "please continue."',
          '65% of participants administered what they believed to be the maximum potentially lethal shock. The finding has been replicated in 18 countries across six decades. The core result does not change.',
          'Milgram\'s participants were not monsters. They were teachers, engineers, parents. They showed distress. Many wept. And then they kept going. The experiment did not reveal evil. It revealed the depth of our social wiring for deference to authority.'
        ],
        pullQuote: '65% of ordinary people administered what they believed to be a potentially lethal shock to a stranger — simply because an authority figure told them to continue.',
        pullQuoteAttr: 'Milgram, 1963 · Replicated by Burger, 2009 · Consistent across 18 countries',
        citations: ['milgram_1963', 'burger_2009']
      },
    ],
    citations: [CITATIONS.milgram_1963, CITATIONS.burger_2009, CITATIONS.seligman_1967, CITATIONS.cato_2020, CITATIONS.reuters_2023],
    relatedSlugs: ['who-programmed-your-god', 'linguistic-parasite', 'fourth-turning']
  },
  {
    slug: 'fourth-turning',
    title: 'The Fourth Turning',
    subtitle: 'The 80-Year Crisis Cycle',
    category: ['History', 'Generational Theory', 'Economics'],
    status: 'live',
    tier: 'deep-dive',
    eyebrow: 'Module 03 · History',
    description: 'A 500-year Anglo-American pattern: every 80 years, a crisis restructures the entire social and monetary order. The Revolutionary War. The Civil War. WWII. And the one we\'re in now.',
    heroStatement: 'History doesn\'t repeat. But it rhymes with terrifying precision.',
    palette: {
      primary: '#c8600c',
      accent: '#e08820',
      glow: 'rgba(200,96,12,0.15)'
    },
    chapters: [],
    citations: [CITATIONS.strauss_howe_1997, CITATIONS.wgc_2024],
    relatedSlugs: ['obedient-machine']
  },
  {
    slug: 'linguistic-parasite',
    title: 'The Linguistic Parasite',
    subtitle: 'How Language Colonized Your Mind',
    category: ['Cognitive Science', 'Neuroscience', 'Language'],
    status: 'live',
    tier: 'deep-dive',
    eyebrow: 'Module 04 · Cognition',
    description: 'Language is not a neutral tool. It restructured your brain before you could consent. How Broca\'s area, the Sapir-Whorf hypothesis, and conceptual metaphor theory explain the shape of your reality.',
    heroStatement: 'The words you think in were given to you. So were the thoughts.',
    palette: {
      primary: '#1a6bff',
      accent: '#00e5ff',
      glow: 'rgba(26,107,255,0.15)'
    },
    chapters: [],
    citations: [CITATIONS.lakoff_johnson_1980, CITATIONS.boroditsky_2003, CITATIONS.fedorenko_2014],
    relatedSlugs: ['who-programmed-your-god', 'obedient-machine']
  },
]

export function getModule(slug: string): Module | undefined {
  return MODULES.find(m => m.slug === slug)
}

export function getLiveModules(): Module[] {
  return MODULES.filter(m => m.status === 'live')
}
