import awsLogo from '../assets/logos/aws.svg'
import dockerLogo from '../assets/logos/docker.svg'
import elasticsearchLogo from '../assets/logos/elasticsearch.svg'
import fastapiLogo from '../assets/logos/fastapi.svg'
import gitLogo from '../assets/logos/git.svg'
import githubActionsLogo from '../assets/logos/github-actions.svg'
import nestjsLogo from '../assets/logos/nestjs.svg'
import nextjsLogo from '../assets/logos/nextjs.svg'
import nodejsLogo from '../assets/logos/nodejs.svg'
import postgresqlLogo from '../assets/logos/postgresql.svg'
import pythonLogo from '../assets/logos/python.svg'
import reactLogo from '../assets/logos/react.svg'
import snowflakeLogo from '../assets/logos/snowflake.svg'
import typescriptLogo from '../assets/logos/typescript.svg'
import photo from '../assets/photo.jpg'
import type { Cv } from './types'

export const cvFr: Cv = {
  firstName: 'Guillaume',
  lastName: 'Gozillon',
  photo,
  title: '**AI Engineer** · Fullstack React & NestJS',
  intro:
    'Développeur fullstack et data depuis 5 ans, j’ai conçu de A à Z un SaaS en production, embeddings et recherche Elasticsearch compris. Je me spécialise aujourd’hui en IA générative (RAG, agents, LLMOps). Disponible dès avril 2027.',
  contacts: [
    {
      icon: 'mail',
      label: 'guillaumegozillon@gmail.com',
      href: 'mailto:guillaumegozillon@gmail.com'
    },
    { icon: 'phone', label: '06 38 80 81 62', href: 'tel:+33638808162' },
    { icon: 'location', label: 'Levallois-Perret' },
    {
      icon: 'website',
      label: 'guillaume-gozillon.dev',
      href: 'https://guillaume-gozillon.dev'
    },
    {
      icon: 'linkedin',
      label: 'linkedin.com/in/guillaume-gozillon',
      href: 'https://www.linkedin.com/in/guillaume-gozillon/'
    },
    {
      icon: 'github',
      label: 'github.com/Guillaume-Gozillon',
      href: 'https://github.com/Guillaume-Gozillon'
    },
    { icon: 'license', label: 'Permis B' }
  ],
  skillGroups: [
    {
      label: 'IA',
      skills: [
        'Python',
        '**Embeddings**',
        'LLM',
        'RAG',
        'Agents IA',
        'MLOps',
        'Machine Learning'
      ]
    },
    {
      label: 'Data',
      skills: ['**Elasticsearch**', '**Snowflake**', '**PostgreSQL**']
    },
    {
      label: 'Frontend',
      skills: ['**React**', 'Next.js', '**TypeScript**']
    },
    {
      label: 'Backend',
      skills: ['**NestJS**', 'FastAPI', 'Node.js']
    },
    {
      label: 'DevOps & cloud',
      skills: ['**Docker**', '**GitHub Actions**', 'AWS', 'Git']
    }
  ],
  logos: {
    Python: pythonLogo,
    Elasticsearch: elasticsearchLogo,
    Snowflake: snowflakeLogo,
    PostgreSQL: postgresqlLogo,
    React: reactLogo,
    'Next.js': nextjsLogo,
    TypeScript: typescriptLogo,
    NestJS: nestjsLogo,
    FastAPI: fastapiLogo,
    'Node.js': nodejsLogo,
    Docker: dockerLogo,
    'GitHub Actions': githubActionsLogo,
    AWS: awsLogo,
    Git: gitLogo
  },
  languages: ['Français natif', 'Anglais professionnel'],
  experiences: [
    {
      role: 'Fullstack & Data Engineer (Retail Tech)',
      company: 'Nricher',
      period: 'Août 2023 · 3 ans 3 mois',
      description:
        'J’ai construit seul l’intégralité du SaaS Nricher (pricing intelligence pour retailers) et de son data engineering : ingestion Python (FastAPI) et Java vers 400+ index Elasticsearch, embeddings et recherche vectorielle, API NestJS, front Next.js, Docker, CI/CD et migration vers Scaleway sans coupure.'
    },
    {
      role: 'Développeur Next.js & UX Designer',
      company: 'Grimp',
      period: 'Févr. 2022 · 1 an 6 mois',
      description:
        'Plateforme EdTech d’insertion professionnelle (150 000+ étudiants) : fonctionnalités Next.js, NestJS et GraphQL de la maquette Figma à la production, design system et montée en qualité du code.'
    },
    {
      role: 'Intégrateur WordPress & Webflow',
      company: 'Freelance',
      period: '2019 · 1 an',
      description:
        'Sites sur mesure livrés en autonomie complète : cadrage du besoin avec le client, maquettes Adobe XD, intégration Webflow, WordPress, HTML, CSS et JavaScript, puis recette et mise en ligne.'
    },
    {
      role: 'UI Designer & SEO',
      company: 'TickYes, Sydney & Ticket To The Moon, Bali',
      period: '2019 · 1 an',
      description:
        'Deux missions à l’international, en anglais : conception du site institutionnel de TickYes, de la maquette Figma à l’intégration WordPress, puis rédaction web SEO pour la visibilité organique de Ticket To The Moon.'
    }
  ],
  education: [
    {
      degree: 'Architecte en Intelligence Artificielle (Bac +5)',
      school: 'Jedha',
      period: 'Nov. 2026 · 5 mois',
      description:
        'Formation IA Fullstack & Lead (600 h) : Machine Learning, Deep Learning, IA générative (RAG, agents), MLOps et LLMOps, projets sur cas réels d’entreprise.'
    },
    {
      degree: 'Développeur d’application (Bac +4)',
      school: 'OpenClassrooms',
      period: 'Nov. 2020 · 1 an',
      description:
        'Parcours diplômant par projets : création d’applications web avec React'
    },
    {
      degree: 'MANAA',
      school: 'LISAA Rennes',
      period: '2018',
      description:
        'Mise à niveau en arts appliqués, maîtrise d’Adobe XD et Figma ainsi que de l’UI design'
    },
    { degree: 'Baccalauréat scientifique', school: 'Saint-Malo' }
  ],
  references: [
    { label: 'nricher.io', href: 'https://nricher.io' },
    { label: 'grimp.io', href: 'https://grimp.io' },
    { label: 'ticketothemoon.com', href: 'https://eu.ticketothemoon.com/fr' },
    { label: 'azuwaconseils.fr', href: 'https://azuwaconseils.fr' }
  ],
  passions: [
    'Voyage',
    'Jazz / Folk / Experimental',
    'Contrebasse',
    'Guitare',
    'Art',
    'Festivals',
    'Design',
    'Surf',
    'Tech'
  ],
  labels: {
    contact: 'Contact',
    contactDetails: 'Coordonnées',
    skills: 'Compétences',
    languages: 'Langues',
    experiences: 'Expériences professionnelles',
    education: 'Études',
    references: 'Références clients',
    passions: 'Passions',
    links: 'Liens',
    download: 'Télécharger en PDF',
    website: 'Site web',
    contactMe: 'Me contacter',
    otherLanguage: 'English'
  }
}
