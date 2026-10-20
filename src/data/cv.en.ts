import { cvFr } from './cv.fr'
import type { Contact, Cv } from './types'

/** Contact labels that differ in English, the others are taken from the French version */
const contactLabels: Partial<Record<Contact['icon'], string>> = {
  phone: '+33 6 38 80 81 62',
  location: 'Levallois-Perret (Paris)'
}

/** Skill groups and skills that differ in English, the others keep their French name */
const skillNames: Record<string, string> = {
  'Search & IA': 'Search & AI',
  'Recherche vectorielle': 'Vector search',
  'Agents IA': 'AI agents'
}

/**
 * English version: same name, photo, logos and client references as the French
 * one, whose contacts and skills it follows, with its own texts.
 */
export const cvEn: Cv = {
  ...cvFr,
  title: '**Fullstack Engineer** · Search & Generative AI',
  intro:
    'Fullstack engineer with 5 years’ experience, 3 of them as sole developer of a B2B SaaS in production. Specialised in Elasticsearch and applied generative AI (embeddings, RAG).',
  contacts: cvFr.contacts.map(contact => ({
    ...contact,
    label: contactLabels[contact.icon] ?? contact.label
  })),
  skillGroups: cvFr.skillGroups.map(({ label, skills }) => ({
    label: skillNames[label] ?? label,
    // Keeps the `**` around the main skills
    skills: skills.map(skill =>
      skill.replace(/[^*]+/, name => skillNames[name] ?? name)
    )
  })),
  languages: ['French (native)', 'English (professional)'],
  experiences: [
    {
      role: 'Fullstack & Data Engineer (Retail Tech)',
      company: 'Nricher',
      period: 'Aug 2023 – Oct 2026',
      featured: true,
      description: [
        'Sole developer of the B2B pricing-intelligence SaaS for 3 years, from design to production: NestJS API, Next.js frontend, [À COMPLÉTER] customers.',
        'Built and ran the **Elasticsearch** search engine in production: [À COMPLÉTER] indexed documents, [À COMPLÉTER] response time.',
        'Shipped **embeddings and vector search** to production for [À COMPLÉTER: use case and result].',
        'Built the data ingestion pipelines in Python and Java (Snowflake, S3).',
        'Migrated the infrastructure to Scaleway with Docker and CI/CD: [À COMPLÉTER: gain].'
      ]
    },
    {
      role: 'Next.js Developer & UX Designer',
      company: 'Grimp',
      period: 'Mar 2022 – Aug 2023',
      description: [
        'Built features from Figma mockups to production (Next.js, NestJS, GraphQL) for an EdTech platform with 150,000+ students.',
        'Created the design system and continuously improved code quality.'
      ]
    },
    {
      role: 'Web Developer & UI Designer',
      company: 'Freelance, Sydney, Bali',
      period: '2019 – 2020',
      description:
        'Early career: freelance WordPress/Webflow sites, international UI/SEO roles.'
    }
  ],
  projects: [
    {
      role: 'Co-founder',
      name: 'Klaaro',
      period: '[À COMPLÉTER]',
      description:
        'Govtech SaaS for the financial analysis of French local authorities. [À COMPLÉTER: role, stack, AI component if any]'
    }
    // Deployed AI project, to uncomment with the French one (see cv.fr.ts)
    // {
    //   role: 'Side project',
    //   name: '[À COMPLÉTER: project name]',
    //   period: '[À COMPLÉTER]',
    //   description:
    //     '[À COMPLÉTER: problem solved, stack (LLM, embeddings, vector database), result]',
    //   link: { label: '[À COMPLÉTER: domain]', href: '[À COMPLÉTER: URL]' }
    // }
  ],
  education: [
    {
      degree: 'AI Architect (Master’s level)',
      school: 'Jedha',
      period: '**In progress** · Nov 2026 – Mar 2027',
      description:
        '600 hours: machine learning, deep learning, generative AI, MLOps and LLMOps.'
    },
    {
      degree: 'Application Developer (Bachelor’s level)',
      school: 'OpenClassrooms',
      period: 'Nov 2020 · 1 yr',
      description:
        'Practice-focused degree programme: web applications with React.'
    },
    {
      degree: 'Applied Arts Foundation Year (MANAA)',
      school: 'LISAA Rennes',
      period: '2018'
    },
    { degree: 'Scientific Baccalaureate', school: 'Saint-Malo' }
  ],
  passions: ['Double bass', 'Jazz', 'Surfing', 'Travel'],
  labels: {
    contact: 'Contact',
    contactDetails: 'Contact details',
    skills: 'Skills',
    languages: 'Languages',
    experiences: 'Work experience',
    projects: 'Projects',
    education: 'Education',
    references: 'Client references',
    passions: 'Interests',
    links: 'Links',
    download: 'Download PDF',
    website: 'Website',
    contactMe: 'Contact me',
    otherLanguage: 'Français'
  }
}
