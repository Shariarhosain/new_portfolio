import { siteConfig } from './portfolioData';

const baseKeywords = [
  'Shariar Hosain',
  'Shariar Hosain Sanny',
  'Software Engineer Bangladesh',
  'Node.js Developer',
  'Backend Developer Dhaka',
  'Microservices Engineer',
  'NestJS Developer',
  'Express.js',
  'Redis',
  'RabbitMQ',
  'PostgreSQL',
  'Prisma ORM',
  'MERN Stack',
  'Full Stack Developer',
];

export const defaultSEO = {
  title: `${siteConfig.shortName} — ${siteConfig.title} · Node.js · Microservices`,
  description:
    'MD. Shariar Hosain Sanny is a Software Engineer from Dhaka, Bangladesh specializing in Node.js microservices, NestJS, Redis, RabbitMQ, and scalable backend systems. View projects, experience, and contact.',
  keywords: baseKeywords.join(', '),
  ogType: 'website',
  ogImage: `${siteConfig.siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  canonical: siteConfig.siteUrl,
};

export const sectionSEO = {
  hero: {
    title: `${siteConfig.shortName} — Software Engineer · Node.js Microservices`,
    description:
      'Software Engineer piloting Node.js microservices through production orbit. Express, NestJS, Redis, RabbitMQ — scalable, efficient, reliable backends from Dhaka, Bangladesh.',
    keywords: [...baseKeywords, 'portfolio', 'hire backend developer'].join(', '),
  },
  about: {
    title: `About ${siteConfig.shortName} — Backend Engineer & Team Lead`,
    description:
      'Backend engineer focused on efficient, scalable applications and team leadership. 30% faster API response times, 50% team productivity boost, 12+ production launches.',
    keywords: [...baseKeywords, 'team leadership', 'system design', 'API optimization'].join(', '),
  },
  experience: {
    title: `Experience — ${siteConfig.shortName} at MAK Tech`,
    description:
      'Software Engineer at MAK Tech (maktechgroup). Node.js backend development with Express, NestJS, Prisma, Redis, RabbitMQ. International client collaboration and team coordination.',
    keywords: [...baseKeywords, 'MAK Tech', 'maktechgroup', 'work experience'].join(', '),
  },
  skills: {
    title: `Skills — ${siteConfig.shortName} Tech Stack`,
    description:
      'Node.js, NestJS, Express, PostgreSQL, MongoDB, Redis, RabbitMQ, Prisma, Next.js, React, AWS EC2, OAuth 2.0, Socket.io, microservices architecture.',
    keywords: [...baseKeywords, 'tech stack', 'skills', 'technologies'].join(', '),
  },
  launchpad: {
    title: `Projects — ${siteConfig.shortName} Production Launches`,
    description:
      'Production projects: Deal Hunter AI, RainbitX crypto exchange, Tarantella delivery, Fishing Tripper, TitleMigo, Huurscanner, Scan Me Maybe, BeatZingeez, Trubbi, and more.',
    keywords: [
      ...baseKeywords,
      'Deal Hunter AI',
      'RainbitX',
      'Stripe integration',
      'fintech',
      'SaaS projects',
      'portfolio projects',
    ].join(', '),
  },
  education: {
    title: `Education — ${siteConfig.shortName}`,
    description:
      'B.Sc. Computer Science & Engineering from AIUB (GPA 3.85/4.00). Higher Secondary from Adamjee Cantonment College, Dhaka.',
    keywords: [...baseKeywords, 'AIUB', 'Computer Science', 'education'].join(', '),
  },
  contact: {
    title: `Contact ${siteConfig.shortName} — Hire Backend Developer`,
    description:
      `Contact Shariar Hosain for microservices, payment pipelines, or realtime systems. Email: ${siteConfig.email} · Phone: ${siteConfig.phoneDisplay} · GitHub: Shariarhosain`,
    keywords: [...baseKeywords, 'contact', 'hire', 'freelance', 'email'].join(', '),
  },
};

export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.siteUrl}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: siteConfig.title,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        url: siteConfig.siteUrl,
        sameAs: [siteConfig.github, siteConfig.linkedin],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'BD',
        },
        knowsAbout: [
          'Node.js',
          'Microservices',
          'NestJS',
          'Express.js',
          'Redis',
          'RabbitMQ',
          'PostgreSQL',
          'Prisma',
          'System Design',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: `${siteConfig.shortName} Portfolio`,
        description: defaultSEO.description,
        publisher: { '@id': `${siteConfig.siteUrl}/#person` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.siteUrl}/#profilepage`,
        url: siteConfig.siteUrl,
        name: defaultSEO.title,
        isPartOf: { '@id': `${siteConfig.siteUrl}/#website` },
        about: { '@id': `${siteConfig.siteUrl}/#person` },
        description: defaultSEO.description,
      },
    ],
  };
}
