export interface SkillNode {
  id: string;
  name: string;
  category: 'social' | 'design' | 'personal';
  status: 'PRACTICING' | 'DEVELOPING' | 'LEARNING';
  description: string;
  tools: string[];
  level: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  missionType: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  details: string;
  tools: string[];
  checkpoint: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categorySlug: 'social' | 'carousel' | 'brand' | 'strategy' | 'promo' | 'experiments';
  tag: string;
  image: string;
  overview: string;
  conceptBrief: string;
  keyHighlights: string[];
  palette: string[];
  toolsUsed: string[];
  slides?: string[];
  date: string;
}

export const PROFILE_DATA = {
  name: 'Noor Ul Eiman',
  role: 'Self-Taught Social Media Manager & Graphic Designer',
  introLabel: 'WELCOME TO MY DIGITAL WORLD',
  heroHeadline: "HEY, I'M NOOR UL EIMAN.",
  shortIntro:
    'I turn ideas into engaging content and visual experiences. Combining creativity, communication, and design to help brands build a memorable digital presence.',
  aboutBio:
    "I'm a self-taught creative passionate about social media, graphic design, and digital communication. I enjoy transforming ideas into meaningful visual content and exploring how creativity can help brands connect with their audiences. I'm continuously learning, developing my skills, and building my creative portfolio one project at a time.",
  email: 'nooruleiman8@gmail.com',
  instagram: '@eimankhattakk',
  instagramUrl: 'https://www.instagram.com/eimankhattakk/',
  linkedin: 'Noor Ul Eiman',
  linkedinUrl: 'https://www.linkedin.com/in/noor-ul-eiman',
  avatarImage: '/src/assets/images/chibi_2d_avatar_1792082945874.jpg',
  hudStats: [
    { label: 'CLASS', value: 'CREATIVE' },
    { label: 'STATUS', value: 'LEARNING & GROWING' },
    { label: 'MODE', value: 'ALWAYS EVOLVING' },
    { label: 'CORE DISCIPLINE', value: 'SOCIAL + GRAPHIC DESIGN' },
  ],
  strengths: [
    {
      title: 'Creative Thinker',
      subtitle: 'Original Angles & Ideas',
      description:
        'Conceives inventive visual angles and narrative angles that help brand content stand out in crowded feeds.',
      icon: 'Sparkles',
    },
    {
      title: 'Strong Communication',
      subtitle: 'Clarity & Empathy',
      description:
        'Translates brand values into concise captions, approachable messaging, and genuine audience conversations.',
      icon: 'MessageSquare',
    },
    {
      title: 'Self-Motivated Learner',
      subtitle: 'Driven Autonomy',
      description:
        'Takes initiative to master new creative software, analyze content algorithms, and embrace rapid learning curves.',
      icon: 'Zap',
    },
    {
      title: 'Attention to Detail',
      subtitle: 'Precision & Balance',
      description:
        'Meticulous with layout spacing, typography contrast, color consistency, and polished visual delivery.',
      icon: 'ScanEye',
    },
    {
      title: 'Visual Storytelling',
      subtitle: 'Sequential Engagement',
      description:
        'Structures posts and carousels so each visual beat hooks curiosity and delivers memorable substance.',
      icon: 'Film',
    },
    {
      title: 'Growth Mindset',
      subtitle: 'Continuous Evolution',
      description:
        'Treats every project as an opportunity to iterate, absorb constructive feedback, and expand capabilities.',
      icon: 'TrendingUp',
    },
  ],
};

export const SKILL_CATEGORIES = [
  { id: 'all', name: 'All Skills' },
  { id: 'social', name: 'Social Media' },
  { id: 'design', name: 'Graphic Design' },
  { id: 'personal', name: 'Personal Skills' },
];

export const SKILL_TREE: SkillNode[] = [
  // Social Media Skills
  {
    id: 'smm',
    name: 'Social Media Management',
    category: 'social',
    status: 'PRACTICING',
    description: 'Planning, scheduling, and orchestrating cohesive multi-channel content releases with consistent brand voice.',
    tools: ['Meta Business Suite', 'Buffer', 'Notion'],
    level: 78,
  },
  {
    id: 'content-plan',
    name: 'Content Planning',
    category: 'social',
    status: 'DEVELOPING',
    description: 'Constructing weekly and monthly editorial calendars mapped against marketing themes and audience peaks.',
    tools: ['Editorial Calendars', 'Trello', 'Google Sheets'],
    level: 82,
  },
  {
    id: 'sm-strategy',
    name: 'Social Media Strategy',
    category: 'social',
    status: 'PRACTICING',
    description: 'Analyzing target demographics, defining content pillars, and outlining reach growth tactics.',
    tools: ['Audience Analytics', 'Competitor Auditing', 'Trend Maps'],
    level: 74,
  },
  {
    id: 'caption-writing',
    name: 'Caption Writing',
    category: 'social',
    status: 'DEVELOPING',
    description: 'Writing high-converting hooks, engaging storytelling bodies, and clear calls-to-action tailored to platform tone.',
    tools: ['Copywriting Frameworks', 'Tone Decks'],
    level: 85,
  },
  {
    id: 'audience-eng',
    name: 'Audience Engagement',
    category: 'social',
    status: 'PRACTICING',
    description: 'Fostering genuine community dialogue via comment interactions, story polls, and relationship building.',
    tools: ['Community Management', 'Direct DM Outreach'],
    level: 80,
  },
  {
    id: 'content-res',
    name: 'Content Research',
    category: 'social',
    status: 'DEVELOPING',
    description: 'Tracking visual trends, sound formats, viral hooks, and high-engagement content models.',
    tools: ['TikTok Creative Center', 'Instagram Insights', 'Pinterest'],
    level: 84,
  },

  // Graphic Design Skills
  {
    id: 'sm-design',
    name: 'Social Media Post Design',
    category: 'design',
    status: 'PRACTICING',
    description: 'Designing eye-catching static posts, quote graphics, product highlights, and announcements with crisp layouts.',
    tools: ['Canva Pro', 'Photoshop', 'Figma'],
    level: 88,
  },
  {
    id: 'visual-comp',
    name: 'Visual Composition',
    category: 'design',
    status: 'DEVELOPING',
    description: 'Balancing negative space, visual hierarchy, focal points, and golden ratios in digital compositions.',
    tools: ['Grid Systems', 'Hierarchy Theory'],
    level: 82,
  },
  {
    id: 'typography',
    name: 'Typography',
    category: 'design',
    status: 'DEVELOPING',
    description: 'Pairing typefaces, tuning kerning and line heights, and styling bold expressive editorial headers.',
    tools: ['Type Pairing', 'Google Fonts', 'Adobe Type'],
    level: 80,
  },
  {
    id: 'color-coord',
    name: 'Color Coordination',
    category: 'design',
    status: 'DEVELOPING',
    description: 'Harmonizing color palettes, contrast ratios, and mood boards that evoke targeted emotional responses.',
    tools: ['Coolors', 'Adobe Color', 'Hex Architectures'],
    level: 86,
  },
  {
    id: 'brand-aesthetics',
    name: 'Brand Aesthetics',
    category: 'design',
    status: 'PRACTICING',
    description: 'Creating cohesive visual systems including color codes, graphic motifs, font guidelines, and mood sheets.',
    tools: ['Brand Kits', 'Style Guides', 'Figma'],
    level: 84,
  },
  {
    id: 'creative-concepts',
    name: 'Creative Concepts',
    category: 'design',
    status: 'DEVELOPING',
    description: 'Translating brand briefs into creative visual metaphors, thematic campaigns, and digital art concepts.',
    tools: ['Moodboarding', 'Digital Sketching'],
    level: 79,
  },

  // Personal Skills
  {
    id: 'comm',
    name: 'Communication',
    category: 'personal',
    status: 'PRACTICING',
    description: 'Articulating creative intent, active listening, and providing transparent progress updates.',
    tools: ['Client Briefs', 'Async Updates'],
    level: 88,
  },
  {
    id: 'creative-think',
    name: 'Creative Thinking',
    category: 'personal',
    status: 'PRACTICING',
    description: 'Connecting non-obvious dots, blending gaming aesthetics with sleek corporate messaging, and brainstorming boldly.',
    tools: ['Mind Mapping', 'Lateral Thinking'],
    level: 90,
  },
  {
    id: 'prob-solve',
    name: 'Problem-Solving',
    category: 'personal',
    status: 'DEVELOPING',
    description: 'Troubleshooting composition bottlenecks, low engagement patterns, and brand misalignment quickly.',
    tools: ['A/B Testing Mindset', 'Design Iteration'],
    level: 80,
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    category: 'personal',
    status: 'PRACTICING',
    description: 'Pivoting styles to match distinct brand personalities from cyber dark mode to airy minimalist aesthetics.',
    tools: ['Style Flexibility', 'Fast Turnaround'],
    level: 85,
  },
  {
    id: 'self-learning',
    name: 'Self-Learning',
    category: 'personal',
    status: 'PRACTICING',
    description: 'Self-taught discipline, breaking down complex software tutorials, and practicing daily design drills.',
    tools: ['Daily Practice', 'Design Breakdown', 'Case Studies'],
    level: 92,
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Social Media Management',
    tagline: 'Consistent Presence & Brand Organization',
    description:
      'Helping maintain a consistent social media presence through organized content, planning, and creative direction.',
    deliverables: [
      'Monthly Content Calendar Architecture',
      'Scheduled Publishing & Feed Layout Curation',
      'Active Audience Community Interaction',
      'Consistent Brand Voice Alignment',
    ],
    missionType: 'OPERATIONAL STRATEGY',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Content Creation',
    tagline: 'Engaging Concepts & Platform-Ready Media',
    description:
      'Developing engaging content concepts, post ideas, and visual content suited to a brand’s identity.',
    deliverables: [
      'Multi-Slide Educational Carousels',
      'Story Sequence Storyboards & Templates',
      'Content Pillar Development',
      'Trend-Informed Visual Prompts',
    ],
    missionType: 'CREATIVE PRODUCTION',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Graphic Design',
    tagline: 'High-Impact Digital Graphics & Post Visuals',
    description:
      'Creating visually appealing social media graphics, promotional posts, and digital designs.',
    deliverables: [
      'Custom Social Media Post Artwork',
      'Promotional Launch & Event Banners',
      'Cohesive Color & Typography Systems',
      'Digital Marketing Asset Kits',
    ],
    missionType: 'VISUAL ARCHITECTURE',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Content & Caption Writing',
    tagline: 'Compelling Copy & Conversion Storytelling',
    description:
      'Writing clear, engaging captions and helping brands communicate their message effectively.',
    deliverables: [
      'Hook-Driven Instagram Captions',
      'Thoughtful Value-Add Micro-Blogs',
      'Platform-Optimized Hashtag Sets',
      'Clear Call-to-Action Variations',
    ],
    missionType: 'VERBAL IDENTITY',
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Brand, Audience & Objectives',
    details: 'Deep dive into brand identity, audience demographics, competitive space, and core creative ambitions.',
    tools: ['Audience Persona Audit', 'Brand Questionnaire', 'Moodboard Direction'],
    checkpoint: 'Creative Direction Alignment',
  },
  {
    step: '02',
    title: 'PLAN',
    subtitle: 'Content Direction & Visual Concepts',
    details: 'Develop ideas, content pillars, visual layout grids, thematic color palettes, and editorial timelines.',
    tools: ['Notion Editorial Calendar', 'Wireframe Layouts', 'Palette Architecture'],
    checkpoint: 'Concept Approval & Strategy Map',
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Graphics, Captions & Content',
    details: 'Produce high-fidelity social graphics, engaging carousel flows, and tailored captions with purposeful hooks.',
    tools: ['Photoshop / Canva Pro / Figma', 'High-Res Asset Assembly', 'Copy Crafting'],
    checkpoint: 'Draft Delivery & Preview Review',
  },
  {
    step: '04',
    title: 'REFINE',
    subtitle: 'Review & Elevate Result',
    details: 'Incorporate thoughtful feedback, calibrate pixel alignment, polish typography, and deliver export-ready files.',
    tools: ['Quality Check Matrix', 'Multi-Format Export', 'Archive Delivery'],
    checkpoint: 'Mission Complete & Ready to Launch',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p-1',
    title: 'Nexus Tech: Cyberpunk Social Launch',
    category: 'Social Media Post Designs',
    categorySlug: 'social',
    tag: 'CONCEPT WORK // BRAND PROMO',
    image: '/src/assets/images/portfolio_social_mockup_1792080654696.jpg',
    overview:
      'A futuristic social campaign concept designed for an emerging tech brand, featuring high-contrast neon violet accents and modular digital interface cards.',
    conceptBrief:
      'The goal was to demonstrate how tech and creative brands can differentiate their feeds from flat corporate posts by leveraging futuristic gaming aesthetics without sacrificing typographic legibility.',
    keyHighlights: [
      'Modular cyberpunk HUD container styling',
      'Sharp geometric vector iconography',
      'High contrast ratio for mobile feed scrollers',
      'Multi-tier hook hierarchy for instant attention',
    ],
    palette: ['#06040a', '#a855f7', '#c084fc', '#e9d5ff', '#3b1c6e'],
    toolsUsed: ['Photoshop', 'Canva Pro', 'Figma'],
    date: 'Concept Study',
  },
  {
    id: 'p-2',
    title: 'Neurolnx: Future Brand Identity System',
    category: 'Brand Identity & Aesthetics',
    categorySlug: 'brand',
    tag: 'CONCEPT WORK // VISUAL IDENTITY',
    image: '/src/assets/images/portfolio_brand_identity_1792080655195.jpg',
    overview:
      'A sleek, dark-mode brand identity experiment exploring cohesive corporate stationery, tablet design guidelines, and metallic accent palettes with electric purple illumination.',
    conceptBrief:
      'An exploration in balancing futuristic minimalism with tactile corporate credibility. Every card, envelope, and digital guideline page adheres to a unified visual language.',
    keyHighlights: [
      'Complete typography hierarchy (Orbitron + Sans)',
      'Branded digital guidelines booklet layout',
      'Consistent neon glow edge accents',
      'Professional business card layout exploration',
    ],
    palette: ['#0b0816', '#8b5cf6', '#d8b4fe', '#221538', '#ffffff'],
    toolsUsed: ['Illustrator', 'Figma', 'Photoshop'],
    date: 'Concept Study',
  },
  {
    id: 'p-3',
    title: 'Unveiling the Future: Multi-Slide Carousel',
    category: 'Instagram Carousel Concepts',
    categorySlug: 'carousel',
    tag: 'CONCEPT WORK // CAROUSEL ARCHITECTURE',
    image: '/src/assets/images/portfolio_carousel_concept_1792080654967.jpg',
    overview:
      'A 6-slide educational Instagram carousel concept detailing visual storytelling techniques, geometric layouts, and cyber aesthetic principles for creators.',
    conceptBrief:
      'Structured to maximize swipe-through retention. Utilizes continuous visual lines between slide borders so viewers intuitively swipe to complete the digital circuit.',
    keyHighlights: [
      'High-retention slide numbering and progress indicators',
      'Seamless multi-slide visual continuity',
      'Bite-sized micro-copy designed for 3-second comprehension',
      'Engaging save-and-share closing slide design',
    ],
    palette: ['#0a0715', '#a855f7', '#6366f1', '#e2d9f3'],
    toolsUsed: ['Canva Pro', 'Photoshop'],
    slides: [
      'Slide 1: Hook & Cover Interface',
      'Slide 2: Digital Frontier Insights',
      'Slide 3: Geometric Storytelling Matrix',
      'Slide 4: Future-Proofing Strategy',
      'Slide 5: Cyber Aesthetic Rules',
      'Slide 6: Call To Action & Save Prompt',
    ],
    date: 'Concept Study',
  },
  {
    id: 'p-4',
    title: 'Creator Studio: Gaming Workspace Visuals',
    category: 'Creative Experiments',
    categorySlug: 'experiments',
    tag: 'CONCEPT WORK // DIGITAL ART',
    image: '/src/assets/images/hero_workstation_1792080652260.jpg',
    overview:
      'A comprehensive digital art composition illustrating a creative professional workstation with multi-monitor workflow, purple RGB backlighting, and city skyline.',
    conceptBrief:
      'Exploration of lighting moods and digital studio environments that inspire late-night creative flow and high-retention graphic production.',
    keyHighlights: [
      'Atmospheric purple neon bounce lighting',
      'Realistic dual-monitor design software display',
      'Dark ambient mood without losing silhouette clarity',
      'Inspiring creative workspace concept',
    ],
    palette: ['#07050d', '#9333ea', '#c084fc', '#1f1338'],
    toolsUsed: ['Digital Art', 'Photoshop'],
    date: 'Concept Study',
  },
  {
    id: 'p-5',
    title: 'Cyber-Synth: Content Pillar Strategy',
    category: 'Content Strategy Examples',
    categorySlug: 'strategy',
    tag: 'CONCEPT WORK // STRATEGY DECK',
    image: '/src/assets/images/portfolio_social_mockup_1792080654696.jpg',
    overview:
      'A structured 30-day content calendar and distribution blueprint built for a tech-focused design consultancy targeting Instagram and LinkedIn.',
    conceptBrief:
      'Defines 4 primary content pillars: 40% Educational Breakdowns, 30% Visual Portfolios, 20% Behind-The-Scenes Process, and 10% Community Engagement Prompts.',
    keyHighlights: [
      'Weekly posting cadence architecture',
      'Hashtag research clusters categorized by reach tiers',
      'Engagement response protocols and DM templates',
      'Monthly metric goal benchmarks',
    ],
    palette: ['#0d0918', '#a855f7', '#e9d5ff', '#2d1b4e'],
    toolsUsed: ['Notion', 'Google Sheets', 'Canva'],
    date: 'Concept Study',
  },
  {
    id: 'p-6',
    title: 'Neon Odyssey: Event Launch Promo Graphics',
    category: 'Promotional Graphics',
    categorySlug: 'promo',
    tag: 'CONCEPT WORK // EVENT ASSETS',
    image: '/src/assets/images/portfolio_brand_identity_1792080655195.jpg',
    overview:
      'Event announcement graphic suite designed for digital creator workshops, including countdown stories, speaker spotlight templates, and registration teasers.',
    conceptBrief:
      'Designed with modular badge slots so that speaker portraits and schedule updates can be updated within 5 minutes without disrupting the grid harmony.',
    keyHighlights: [
      'Modular template components for fast turnaround',
      'High-contrast typography readable on smart watches and phones',
      'Branded story highlight covers included in suite',
      'Optimized for both 9:16 story and 1:1 feed formats',
    ],
    palette: ['#07050d', '#c084fc', '#8b5cf6', '#ffffff'],
    toolsUsed: ['Figma', 'Photoshop'],
    date: 'Concept Study',
  },
];
