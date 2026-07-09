export const siteConfig = {
  name: 'MD. Shariar Hosain Sanny',
  shortName: 'Shariar Hosain',
  title: 'Software Engineer',
  tagline: 'Node.js · Microservices · Backend Systems',
  location: 'Dhaka, Bangladesh',
  address: 'North Kafrul, Dhaka',
  email: 'shariarhosain131529@gmail.com',
  phone: '+8801757525035',
  phoneDisplay: '+880 1757-525035',
  whatsapp: 'https://wa.me/8801757525035',
  github: 'https://github.com/Shariarhosain',
  linkedin: 'https://www.linkedin.com/in/shariar-hosain-sanny/',
  siteUrl: 'https://shariarhosain.dev',
  year: 2026,
};

export const navLinks = [
  { href: '#about', label: 'Briefing' },
  { href: '#experience', label: 'Mission Log' },
  { href: '#skills', label: 'Systems' },
  { href: '#launchpad', label: 'Launches' },
  { href: '#contact', label: 'Comms' },
];

export const heroData = {
  eyebrow: 'SYSTEMS NOMINAL — DHAKA, BD',
  titleLine1: 'MD. SHARIAR',
  titleLine2: 'HOSAIN',
  titleAccent: 'SANNY',
  subtitle:
    'Software Engineer piloting Node.js microservices through production orbit — Express, NestJS, Redis, RabbitMQ. I build backends that stay stable under gravity: scalable, efficient, reliable.',
  satellites: [
    { orbit: 1, angle: 0, label: 'RabbitMQ' },
    { orbit: 1, angle: 180, label: 'PostgreSQL' },
    { orbit: 2, angle: 90, label: 'Redis' },
    { orbit: 2, angle: 270, label: 'NestJS' },
    { orbit: 3, angle: 45, label: 'Prisma' },
    { orbit: 3, angle: 225, label: 'Socket.io' },
  ],
  coreLabel: 'NODE.JS',
};

export const marqueeItems = [
  'NODE.JS', 'MICROSERVICES', 'NESTJS', 'REDIS', 'RABBITMQ',
  'POSTGRESQL', 'PRISMA', 'STRIPE', 'AWS EC2', 'SOCKET.IO', 'NEXT.JS', 'OAUTH 2.0',
];

export const aboutData = {
  logNum: 'LOG 01',
  tag: 'MISSION BRIEFING',
  title: 'Backend engineer. Team pilot.',
  titleAccent: 'Problem hunter.',
  text: 'I focus on building efficient, scalable and reliable applications — and on the people who build them with me. With a background spanning teaching, problem-solving and team leadership, I enjoy tackling complex challenges and finding practical solutions, whether that\'s untangling a queue backlog at 2 AM or coordinating five developers toward a deadline. My drive to keep learning and to help others is what pushes every mission forward.',
  stats: [
    { value: 30, label: '% faster API response times' },
    { value: 50, label: '% team productivity boost' },
    { value: 12, label: 'production launches & counting' },
  ],
};

export const experienceData = {
  logNum: 'LOG 02',
  tag: 'MISSION LOG',
  title: 'Flight',
  titleAccent: 'history',
  items: [
    {
      when: '05/2025 — Present · Dhaka, Bangladesh',
      role: 'Software Engineer (Full-time)',
      org: 'MAK Tech (maktechgroup)',
      bullets: [
        'Backend development across projects with Node.js — Express.js, NestJS, Prisma, Redis, RabbitMQ.',
        'Led problem-solving initiatives and team coordination, resolving critical issues and lifting team productivity by 50%.',
        'Collaborated with international clients on requirements, task management and successful delivery.',
      ],
    },
    {
      when: '03/2024 — 05/2025',
      role: 'MERN Developer, Backend (Internship)',
      org: 'MAK Tech (maktechgroup)',
      bullets: [
        'Backend-focused MERN internship with hands-on experience building full-stack applications.',
      ],
    },
  ],
};

export const skillsData = {
  logNum: 'LOG 03',
  tag: 'ONBOARD SYSTEMS',
  title: 'Payload &',
  titleAccent: 'instrumentation',
  categories: [
    { title: 'Backend Propulsion', chips: ['Node.js', 'Express.js', 'NestJS', 'PHP / Laravel', 'Python'] },
    { title: 'Frontend & UI', chips: ['Next.js', 'React.js', 'Tailwind CSS'] },
    { title: 'Data Storage', chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'] },
    { title: 'Messaging & Realtime', chips: ['RabbitMQ', 'Socket.io'] },
    { title: 'Cloud & DevOps', chips: ['AWS EC2', 'VPS Hosting', 'CI/CD', 'GitHub'] },
    { title: 'Auth & Services', chips: ['OAuth 2.0', 'Firebase', 'Supabase'] },
    { title: 'Architecture', chips: ['REST APIs', 'Microservices', 'Agile'] },
    { title: 'Core Strengths', chips: ['System Design', 'Debugging', 'Team Leadership', 'Client Comms'] },
  ],
};

export const projectsData = {
  logNum: 'LOG 04',
  tag: 'LAUNCHED MISSIONS',
  title: 'Payloads in',
  titleAccent: 'production orbit',
  projects: [
    {
      index: '01',
      title: 'Deal Hunter AI',
      tag: 'AI · Stripe',
      description: 'Real estate investment analysis platform. Real-time AI chat on OpenAI GPT with token metering, history persistence and per-tier rate limiting, plus a full Stripe subscription pipeline with webhooks, plan upgrades and refunds.',
      url: 'https://addvancedai.com/',
      domain: 'addvancedai.com',
    },
    {
      index: '02',
      title: 'RainbitX — Crypto Exchange',
      tag: 'Fintech',
      description: 'Full-stack trading platform with real-time exchange rates, live chat and secure financial APIs. Complete KYC verification, loan management, role-based access and a live-monitoring admin dashboard.',
      url: 'https://rainbitx.com/',
      domain: 'rainbitx.com',
    },
    {
      index: '03',
      title: 'Tarantella — Restaurant Delivery',
      tag: 'POS · Maps',
      description: 'ready2order POS integration with OAuth and auto-invoicing, Google Maps delivery flow with geocoding, traffic-aware ETAs and radius validation, plus PayPal capture-before-order checkout.',
      url: 'https://www.tarantella.at/',
      domain: 'tarantella.at',
    },
    {
      index: '04',
      title: 'Fishing Tripper',
      tag: 'Marketplace',
      description: 'Charter booking marketplace with Stripe deposits, manual capture and idempotent refund logic. Shared vs private charter availability with seat tracking, plus Redis email workers and multi-role OAuth access.',
      url: 'https://www.fishingtripper.com',
      domain: 'fishingtripper.com',
    },
    {
      index: '05',
      title: 'TitleMigo — VIN Search',
      tag: 'Stripe · PDF',
      description: 'Credit-based payment system for VIN report packages and an automated PDF rebranding service converting VinData reports into TITLEMIGO-branded professional documents.',
      url: 'https://titlemigo.com/',
      domain: 'titlemigo.com',
    },
    {
      index: '06',
      title: 'Huurscanner — Property Finder NL',
      tag: 'Scraper · Redis',
      description: 'Robust property scraper aggregating and deduplicating external listings across the Netherlands, with Redis caching and rate limiting for fast, reliable responses.',
      url: 'https://huurscanner.nl',
      domain: 'huurscanner.nl',
    },
    {
      index: '07',
      title: 'Scan Me Maybe',
      tag: 'QR · SaaS',
      description: 'QR-card dating platform for in-person profile sharing. Stripe subscriptions with webhook billing, drag-and-drop email template builder, and QR scan tracking with analytics and mutual-interest approval.',
      url: 'https://scanmemaybe.com',
      domain: 'scanmemaybe.com',
    },
    {
      index: '08',
      title: 'BeatZingeez — Music Platform',
      tag: 'Media',
      description: 'Audio metadata extraction with music-metadata and node-ffprobe, cron-based scheduled publishing and engagement-tracking analytics.',
      url: 'https://beatzingeez.com/',
      domain: 'beatzingeez.com',
    },
    {
      index: '09',
      title: 'Trubbi — Trip Planning',
      tag: 'GSAP',
      description: 'GSAP landing page with ScrollSmoother, ScrollTrigger reveals, infinite gallery marquee and hero parallax. Waitlist signup via Express + PostgreSQL/Prisma with duplicate-email validation.',
      url: 'https://www.trubbi.ai/',
      domain: 'trubbi.ai',
    },
    {
      index: '10',
      title: 'Listing Management App',
      tag: 'Microservices',
      description: 'Microservices for reliable transactional email delivery and scalable image upload & optimization servers, wired together with RabbitMQ.',
      url: 'https://github.com/Shariarhosain/abyansf_backend',
      domain: 'GitHub Repo',
    },
    {
      index: '11',
      title: 'BatteryQK Mobile App',
      tag: 'Redis',
      description: 'Redis-backed translation caching to speed multilingual responses and cut API calls, with background queue processing for translations and async jobs.',
      url: 'https://github.com/Shariarhosain/BatteryQK-Backend',
      domain: 'GitHub Repo',
    },
  ],
};

export const educationData = {
  logNum: 'LOG 05',
  tag: 'TRAINING RECORDS',
  title: 'Academy',
  titleAccent: 'credentials',
  items: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'American International University-Bangladesh (AIUB)',
      meta: '2021 — 2025 · Dhaka · GPA',
      highlight: '3.85 / 4.00',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Adamjee Cantonment College',
      meta: '2017 — 2019 · Dhaka',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Adamjee Cantonment Public School',
      meta: '2015 — 2017 · Dhaka',
    },
  ],
};

export const contactData = {
  logNum: 'LOG 06',
  tag: 'ESTABLISH COMMS',
  title: 'Ready for the',
  titleAccent: 'next mission?',
  subtitle: 'Whether it\'s a microservice fleet, a payment pipeline or a realtime system — my channel is open. Transmission usually answered within one Earth day.',
};
