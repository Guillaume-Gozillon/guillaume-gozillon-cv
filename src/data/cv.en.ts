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
    'Fullstack engineer with 5 years’ experience, 3 of them as lead developer of a B2B SaaS in production. Specialised in Elasticsearch and applied generative AI (embeddings, RAG).',
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
      period: 'Paris · Aug 2023 – Oct 2026',
      featured: true,
      description: [
        'Designed and built a B2B pricing-intelligence SaaS end to end, solely responsible for fullstack development and data engineering, within a team of 5 data analysts and data scientists.',
        'Designed and optimised **Elasticsearch** search: over a billion indexed documents, 170 ms median latency on catalogue searches.',
        'Built data ingestion pipelines in Python and Java, from Snowflake and S3.',
        'Migrated from Heroku to Scaleway with Docker and CI/CD: hosting costs cut by 70%, zero-downtime deployments.'
      ]
    },
    {
      role: 'Next.js Developer & UX Designer',
      company: 'Grimp',
      period: 'Remote · Mar 2022 – Aug 2023',
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
      role: 'Technical co-founder',
      name: 'Klaaro',
      period: 'Remote · Feb 2026 – Present',
      description:
        'Govtech SaaS for the financial analysis of French local authorities: built the whole platform (Next.js, NestJS, PostgreSQL, 30M rows of public data) and an **AI assistant** (Claude API) that comments on their accounts.'
    },
    {
      role: 'Side project',
      name: 'search-lab-ingest',
      period: 'Apr – Jul 2026',
      description:
        'Optimised **vector ingestion** into Elasticsearch 9 (Python, TEI): 1.4M products embedded in 9 min on GPU, 5× throughput, recall@10 up from 85–95% to 92–100%.',
      link: {
        label: 'github.com/Guillaume-Gozillon/search-lab-ingest',
        href: 'https://github.com/Guillaume-Gozillon/search-lab-ingest'
      }
    }
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
      period: 'Nov 2020 · 1 yr'
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
