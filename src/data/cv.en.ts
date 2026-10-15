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
    'Fullstack Developer & Data Engineer with 5 years of experience, I designed a production SaaS, from data engineering to search with Elasticsearch. I now specialise in generative AI (RAG, agents, LLMOps).',
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
        'Independently designed and developed the Nricher SaaS (pricing intelligence) and its data infrastructure: Python and Java ingestion, Elasticsearch, embeddings and vector search, NestJS API, Next.js frontend, Docker, CI/CD and migration to Scaleway.'
    },
    {
      role: 'Next.js Developer & UX Designer',
      company: 'Grimp',
      period: 'Feb 2022 · 1 yr 6 mos',
      description:
        'Developed features for an EdTech employability platform (150,000+ students), from Figma design to production with Next.js, NestJS and GraphQL. Built the design system and continuously improved code quality.'
    },
    {
      role: 'WordPress & Webflow Developer',
      company: 'Freelance',
      period: '2019 · 1 yr',
      description:
        'Built custom websites fully independently: scoping client needs, designing Adobe XD mockups, integration with Webflow, WordPress, HTML, CSS and JavaScript, testing and launch.'
    },
    {
      role: 'UI Designer & SEO',
      company: 'TickYes, Sydney & Ticket To The Moon, Bali',
      period: '2019 · 1 yr',
      description:
        'Two international assignments in English: designed the TickYes corporate website, from Figma mockup to WordPress integration, then wrote content optimised for organic search (SEO) at Ticket To The Moon.'
    }
  ],
  education: [
    {
      degree: 'Artificial Intelligence Architect (Master level)',
      school: 'Jedha',
      period: 'Nov 2026 · 5 mos',
      description:
        'Fullstack & Lead AI programme (600 hours): machine learning, deep learning, generative AI (RAG, agents), MLOps and LLMOps, with hands-on projects in a professional context.'
    },
    {
      degree: 'Application Developer (Bachelor level)',
      school: 'OpenClassrooms',
      period: 'Nov 2020 · 1 yr',
      description:
        'Practice-focused degree programme: designing and developing web applications with React.'
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
    otherLanguage: 'Français',
    privacy:
      'I am notified of CV downloads, with the city and network inferred from the IP address (via ipinfo.io).'
  }
}
