/**
 * Site content lives here. Edit this file to update the portfolio —
 * no component code needs to change. Long-form posts live in /content/writeups.
 */

export const profile = {
  name: 'Shao Zhi',
  fullName: 'Soong Shao Zhi',
  // Shown in the identity line and footer.
  role: 'CS @ NUS · Applied ML',
  // The hero thesis — the most characteristic thing about your work.
  headline: 'Building cool stuff.',
  subhead: 'Y3 CS @ NUS. Moving to the Bay Area to work on inference.',
  location: 'Singapore',
  relocating: 'San Francisco',
  email: 'soongshaozhi@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1eRr83jVEfpeoYdEyLW8FLS4xMcXCDzP2/view',
  // The live "● currently" status line — keep it human, not a job title.
  now: 'building side projects & plotting the move to SF',
}

export const socials = {
  github: 'https://github.com/ShaoZhi21',
  linkedin: 'https://linkedin.com/in/soongshaozhi',
  email: 'mailto:soongshaozhi@gmail.com',
}

export const nav = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#work' },
  { name: 'Writeups', href: '/writeups' },
  { name: 'Contact', href: '/#contact' },
]

export interface Reading {
  title: string
  source: string
  url: string
}

export interface Reading {
  title: string
  source: string
  note: string
  url: string
}

/** What I'm reading right now — swap these out as you go. */
export const reading: Reading[] = [
  {
    title: 'Attention Is All You Need',
    source: 'arXiv',
    note: 'The transformer paper that started it all — back to fundamentals.',
    url: 'https://arxiv.org/abs/1706.03762',
  },
  {
    title: 'Inference Engineering',
    source: 'Baseten',
    note: 'How production inference actually gets fast.',
    url: 'https://www.baseten.co/inference-engineering/',
  },
  {
    title: 'Transformer Inference Optimization',
    source: 'Lilian Weng',
    note: 'Squeezing latency out of large models, end to end.',
    url: 'https://lilianweng.github.io/posts/2023-01-10-inference-optimization/',
  },
]

export interface Travel {
  src: string
  caption: string
  alt: string
}

/** A few photos for personality — keep it small. */
export const travel: Travel[] = [
  { src: '/images/travel-japan.png', caption: 'Hakuba, JP', alt: 'Snowboarding in Japan' },
  { src: '/images/travel-taiwan.png', caption: 'Taipei, TW', alt: 'On the streets of Taipei' },
  { src: '/images/travel-chiangmai.png', caption: 'Chiang Mai, TH', alt: "My grandparents' farm in Chiang Mai" },
]

export const about = {
  paragraphs: [
    'I love building startups. Most recently Weavo, which raised $10k from NUS Enterprise and grew to 200+ users before I pivoted — the whole messy, addictive process of taking something from zero to real.',
    'These days I’m heavy into the AI agent and inference space: making models fast and reliable in production. Interning at TikTok now, and joining Fireworks AI in the Bay Area next.',
  ],
  // Focus areas — what I'm spending my attention on right now.
  focus: ['AI Agents', 'Inference', 'Model Performance', 'Startups'],
  languages: ['English', 'Mandarin'],
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  logo?: string
  current?: boolean
  upcoming?: boolean
}

// Most recent / upcoming first.
export const experience: Experience[] = [
  {
    company: 'Fireworks AI',
    role: 'Applied ML Engineer',
    period: 'Aug 2026',
    location: 'San Mateo, CA',
    description:
      'Optimising inference for customers — including the likes of Cursor. Joining via the NUS Overseas College (NOC) programme in Silicon Valley.',
    logo: '/images/fireworks-logo.png',
    upcoming: true,
  },
  {
    company: 'TikTok',
    role: 'iOS Infrastructure',
    period: 'Mar — Aug 2026',
    location: 'Singapore',
    description:
      'Building AI agents to catch performance regressions and protect performance-critical metrics across the iOS app.',
    logo: '/images/tiktok-logo.png',
    current: true,
  },
  {
    company: 'Nested Technologies',
    role: 'Fullstack Engineer',
    period: 'Aug — Dec 2025',
    location: 'Singapore',
    description: 'Built fullstack features to automate pricing quotations.',
    logo: '/images/nested-logo.png',
  },
]

export const education = {
  school: 'National University of Singapore',
  degree: 'Bachelor of Computing in Computer Science',
  honours: 'Honours (Distinction)',
  year: 'Year 3',
  period: 'Aug 2024 — May 2028',
  location: 'Singapore',
  logo: '/images/nus_logo.png',
  courses: [
    'CS1101S Programming Methodology',
    'CS1231S Discrete Structures',
    'CS2030S Object-Oriented Programming',
    'CS2040S Data Structures & Algorithms',
    'CS2100 Computer Organisation',
    'CS2101 Effective Communication',
    'CS2103T Software Engineering',
    'CS2105 Computer Networks',
    'CS2106 Operating Systems',
    'CS2109S Intro to AI & Machine Learning',
    'MA1521 Calculus for Computing',
    'MA1522 Linear Algebra',
    'ST2334 Probability & Statistics',
  ],
}

export type ProjectGroup = 'Mobile' | 'Web' | 'AI' | 'Product' | 'Data'

export interface Project {
  title: string
  description: string
  group: ProjectGroup
  tech: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
  // A short badge: an award or the event it was built at.
  award?: string
  event?: string
  featured?: boolean
  // Product / strategy work (hackathon pitches, not built apps) — grouped separately.
  caseStudy?: boolean
}

export const projects: Project[] = [
  {
    title: 'Weavo',
    description:
      'A startup turning places you save on TikTok, Instagram & XHS into real-world visits — auto-finding locations, pinning them, and planning your days. Indexed 5,000+ locations from 1,000+ posts and grew to 200+ users before pivoting on weak PMF.',
    group: 'Mobile',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Supabase'],
    image: '/images/weavo.png',
    demoUrl: 'https://apps.apple.com/us/app/weavo-save-now-visit-later/id6754791789',
    award: 'Raised $10k — NUS Enterprise',
    featured: true,
  },
  {
    title: 'Synth Shoppers',
    description:
      'A swarm of AI shopper personas that browse a product listing end-to-end — market, photos, reviews, price, checkout — and surface exactly where real buyers would drop off before you ship.',
    group: 'AI',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'AI Agents'],
    image: '/images/synth-shoppers.png',
    githubUrl: 'https://github.com/choiwab/synth-shoppers',
    award: 'Top 5 — OpenAI × SEA Hackathon',
    featured: true,
  },
  {
    title: 'CodeOnTheGo',
    description:
      'A mobile-first platform for practising data structures & algorithms through guided pseudocode, line-by-line hints, AI feedback, and a gamified learning roadmap.',
    group: 'Mobile',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Supabase', 'OpenAI'],
    image: '/images/CodeOnTheGo.png',
    githubUrl: 'https://github.com/ShaoZhi21/CodeOnTheGo',
    demoUrl: 'https://drive.google.com/file/d/18MHYyOY4YQq3fBP-5f_sGW48bOJpkINO/view?usp=sharing',
    award: 'Artemis Level Project',
    featured: true,
  },
  {
    title: 'SecretaryAI',
    description:
      'Turns sales conversations into structured CRM data. Records and transcribes in real time, then extracts the key customer details automatically.',
    group: 'AI',
    tech: ['Next.js', 'TypeScript', 'OpenAI Whisper', 'Tailwind CSS'],
    image: '/images/secretary-ai.png',
    githubUrl: 'https://github.com/ShaoZhi21/SecretaryAI',
    demoUrl: 'https://www.youtube.com/watch?v=bMD5L6FeyDw',
    award: '1st Runner-Up — Asian Business Plan Competition',
    featured: true,
  },
  {
    title: 'LoveScan',
    description:
      'A romance-scam prevention app that analyses chats, images, and social profiles to flag likely scams and generate a clear risk report.',
    group: 'Mobile',
    tech: ['React Native', 'Node.js', 'Google Vision', 'Supabase'],
    image: '/images/lovescan.png',
    githubUrl: 'https://github.com/ShaoZhi21/LoveScan',
    award: 'Dare to Try Award — DSTA BrainHack Code_EXP',
    featured: true,
  },
  {
    title: 'SaveSpot',
    description:
      'Save places from TikTok, Instagram, and Lemon8 in one tap. It extracts the location from a video and files it into folders for your next trip.',
    group: 'Mobile',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
    image: '/images/savespot.png',
    githubUrl: 'https://github.com/ShaoZhi21/SaveSpotMVP',
    demoUrl: 'https://www.youtube.com/shorts/sw6uQladJdE',
    event: 'NES Start Phase 2',
  },
  {
    title: 'StudyPal',
    description:
      'An adaptive learning platform that personalises practice for students and gives teachers real-time analytics, with role-based dashboards and BKT-based difficulty.',
    group: 'Web',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    image: '/images/studypal.png',
    githubUrl: 'https://github.com/Miloepeng/LifeHack',
    demoUrl: 'https://devpost.com/software/studypal-6qzwkv',
    event: 'NUS LifeHack 2025',
    featured: true,
  },
  {
    title: 'NLP Entity Analysis',
    description:
      'Extracts insights from unstructured text: entity extraction with spaCy, relationship mapping with NetworkX, interactive graph visualisation, and BART summarisation.',
    group: 'Data',
    tech: ['Python', 'spaCy', 'NetworkX', 'PyVis', 'BART'],
    image: '/images/smubiadata.png',
    event: 'SMUBIA Datathon 2025',
  },
  {
    title: 'AI Smart Recipe Generator',
    description:
      'Upload a photo of your ingredients, recognise them with vision AI, and get recipes back — with saving and search built in.',
    group: 'AI',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    image: '/images/recipeAI.png',
    githubUrl: 'https://github.com/ShaoZhi21/RecipeScanner',
    demoUrl: 'https://www.youtube.com/watch?v=3-vEGYFs9W8',
    event: 'HackoMania 2025',
  },
  {
    title: 'Minimart E-commerce',
    description:
      'An online store for the Muhammadiyah Welfare Home minimart, with admin and customer views for managing and selling essential goods.',
    group: 'Web',
    tech: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    image: '/images/minimart.png',
    githubUrl: 'https://github.com/ShaoZhi21/Minimart',
    demoUrl: 'https://devpost.com/software/2ne2-minimart',
    event: 'Hack4Good',
  },
  {
    title: 'AI Credit Scoring',
    description:
      'A credit-scoring concept built on alternative data — feasibility analysis, trial evaluation, and a go-to-market strategy for underserved borrowers.',
    group: 'AI',
    tech: ['AI/ML', 'FinTech', 'Data Analytics', 'Strategy'],
    image: '/images/aicreditscore.png',
    event: 'NUS Ground Zero 2025',
    caseStudy: true,
  },
  {
    title: 'BOB Form for the SAF',
    description:
      'A use case for GovTech’s BOB Form system to cut bureaucratic overhead and streamline SAF operations.',
    group: 'Product',
    tech: ['GovTech', 'Process Design', 'System Integration'],
    image: '/images/SAFBoB.png',
    event: 'GovTech Product Hackathon 2025',
    caseStudy: true,
  },
  {
    title: 'ShopBack Product Innovation',
    description:
      'Feature concepts for ShopBack, including an interactive map of nearby partner stores and real-time alerts when users enter a mall.',
    group: 'Product',
    tech: ['Product Strategy', 'User Research', 'Feature Design'],
    image: '/images/shopback.png',
    event: 'ShopBack Product Hackathon 2025',
    caseStudy: true,
  },
  {
    title: 'Health for Wealth',
    description:
      'A prototype that gamifies destressing activities to nudge users toward healthier daily habits and better mental wellness.',
    group: 'Product',
    tech: ['Product Design', 'Gamification', 'UX'],
    image: '/images/hultprize.png',
    event: 'Hult Prize 2025',
    caseStudy: true,
  },
]

export const projectGroups: ProjectGroup[] = ['Mobile', 'Web', 'AI', 'Product', 'Data']

export interface SkillCategory {
  title: string
  // icon slugs resolved in the Skills component via simple-icons
  skills: string[]
}

export const skills: SkillCategory[] = [
  { title: 'Languages', skills: ['Go', 'Python', 'TypeScript', 'JavaScript', 'Java'] },
  {
    title: 'ML & Frameworks',
    skills: ['PyTorch', 'Hugging Face', 'React', 'React Native', 'Next.js', 'Node.js'],
  },
  { title: 'Backend & Tools', skills: ['Hertz', 'Kitex', 'Express', 'Git', 'Supabase', 'Postman', 'Figma'] },
]

export interface Highlight {
  date: string
  name: string
  award?: string
}

// Notable hackathons, grants & competitions — most recent first.
// NOTE: dates on the OpenAI × SEA and VIP grant rows are placeholders — fix them.
export const highlights: Highlight[] = [
  { date: 'Jun 2026', name: 'OpenAI × SEA Hackathon', award: 'Top 5' },
  { date: '2025 — 26', name: 'NUS VIP @ SoC — Weavo', award: '$10k Grant · beat 81 teams' },
  { date: 'Jun 2025', name: 'Asian Business Plan Competition', award: '1st Runner-Up' },
  { date: 'Jun 2025', name: 'DSTA BrainHack Code_EXP', award: 'Dare to Try Award' },
  { date: 'Jun 2025', name: 'GovTech Product Hackathon' },
  { date: 'Jun 2025', name: 'NUS LifeHack 2025' },
  { date: 'May 2025', name: 'NUS Ground Zero 2025' },
  { date: 'Apr 2025', name: 'NES Start Phase 2' },
  { date: 'Mar 2025', name: 'SMUBIA Datathon 2025' },
  { date: 'Feb 2025', name: 'NUS Hack4Good' },
  { date: 'Feb 2025', name: 'Hult Prize' },
  { date: 'Jan 2025', name: 'HackoMania 2025' },
  { date: 'Jan 2025', name: 'ShopBack Product Hackathon' },
]
