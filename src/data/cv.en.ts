import { cvFr } from './cv.fr'
import type { Contact, Cv } from './types'

/** Contact labels that differ in English, the others are taken from the French version */
const contactLabels: Partial<Record<Contact['icon'], string>> = {
  phone: '+33 6 38 80 81 62',
  location: 'Levallois-Perret (Paris)',
  license: 'Driving licence'
}

/** Skill groups and skills that differ in English, the others keep their French name */
const skillNames: Record<string, string> = {
  IA: 'AI',
  'Agents IA': 'AI agents'
}

/**
 * English version: same name, photo, logos and client references as the French
 * one, whose contacts and skills it follows, with its own texts.
 */
export const cvEn: Cv = {
  ...cvFr,
  intro:
    'Fullstack and data developer with 5 years of experience, I built a production SaaS end to end, including embeddings and search with Elasticsearch. I am now specialising in generative AI (RAG, agents, LLMOps). Available from April 2027.',
  contacts: cvFr.contacts.map(contact => ({
    ...contact,
    label: contactLabels[contact.icon] ?? contact.label
  })),
  skillGroups: cvFr.skillGroups.map(({ label, skills }) => ({
    label: skillNames[label] ?? label,
    skills: skills.map(skill => skillNames[skill] ?? skill)
  })),
  languages: ['French (native)', 'English (professional)'],
  experiences: [
    {
      role: 'Fullstack & Data Engineer (Retail Tech)',
      company: 'Nricher',
      period: 'Aug 2023 · 3 yrs 3 mos',
      description:
        'I single-handedly built the entire Nricher SaaS (pricing intelligence for retailers) and its data engineering: Python (FastAPI) and Java ingestion into 400+ Elasticsearch indices, embeddings and vector search, NestJS API, Next.js frontend, Docker, CI/CD and a zero-downtime migration to Scaleway.'
    },
    {
      role: 'Next.js Developer & UX Designer',
      company: 'Grimp',
      period: 'Feb 2022 · 1 yr 6 mos',
      description:
        'EdTech employability platform used by 150,000+ students: Next.js, NestJS and GraphQL features from Figma mockups to production, design system and code quality improvements.'
    },
    {
      role: 'WordPress & Webflow Developer',
      company: 'Freelance',
      period: '2019 · 1 yr',
      description:
        'Custom websites delivered fully independently: scoping client needs, Adobe XD mockups, Webflow, WordPress, HTML, CSS and JavaScript development, then testing and launch.'
    },
    {
      role: 'UI Designer & SEO',
      company: 'TickYes, Sydney & Ticket To The Moon, Bali',
      period: '2019 · 1 yr',
      description:
        'Two international assignments, in English: designed the TickYes corporate website from Figma mockups to WordPress integration, then wrote SEO content to grow the organic visibility of Ticket To The Moon.'
    }
  ],
  education: [
    {
      degree: 'Artificial Intelligence Architect (Master level)',
      school: 'Jedha',
      period: 'Nov 2026 · 5 mos',
      description:
        'AI Fullstack & Lead programme (600 hours): machine learning, deep learning, generative AI (RAG, agents), MLOps and LLMOps, real-world projects.'
    },
    {
      degree: 'Application Developer (Bachelor level)',
      school: 'OpenClassrooms',
      period: 'Nov 2020 · 1 yr',
      description:
        'Project-based degree programme: building web applications with React'
    },
    {
      degree: 'Applied Arts Foundation Year (MANAA)',
      school: 'LISAA Rennes',
      period: '2018',
      description: 'Proficiency in Adobe XD, Figma and UI design'
    },
    { degree: 'Scientific Baccalaureate', school: 'Saint-Malo' }
  ],
  passions: [
    'Travel',
    'Jazz / Folk / Experimental',
    'Double bass',
    'Guitar',
    'Art',
    'Festivals',
    'Design',
    'Surfing',
    'Tech'
  ],
  labels: {
    contact: 'Contact',
    contactDetails: 'Contact details',
    skills: 'Skills',
    languages: 'Languages',
    experiences: 'Work experience',
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
