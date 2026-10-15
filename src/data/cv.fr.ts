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
    'Développeur Fullstack & Data Engineer depuis 5 ans, j’ai conçu un SaaS en production, du Data Engineering à la recherche Elasticsearch. Je me spécialise aujourd’hui en IA générative (RAG, agents, LLMOps).',
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
      period: 'Août 2023 – Oct. 2026',
      description:
        'Conception et développement en autonomie du SaaS Nricher (pricing intelligence) et de son infrastructure data : ingestion Python et Java, Elasticsearch, embeddings et recherche vectorielle, API NestJS, frontend Next.js, Docker, CI/CD et migration vers Scaleway.'
    },
    {
      role: 'Développeur Next.js & UX Designer',
      company: 'Grimp',
      period: 'Mars 2022 – Août 2023',
      description:
        'Développement de fonctionnalités pour une plateforme EdTech d’insertion professionnelle (150 000+ étudiants), de la conception Figma à la mise en production avec Next.js, NestJS et GraphQL. Création du design system et amélioration continue de la qualité du code.'
    },
    {
      role: 'Intégrateur WordPress & Webflow',
      company: 'Freelance',
      period: 'Déc. 2019 – Sept. 2020',
      description:
        'Réalisation de sites web sur mesure en autonomie complète : cadrage des besoins clients, conception de maquettes Adobe XD, intégration avec Webflow, WordPress, HTML, CSS et JavaScript, recette et mise en ligne.'
    },
    {
      role: 'UI Designer & SEO',
      company: 'TickYes, Sydney & Ticket To The Moon, Bali',
      period: '2019 · 1 an',
      description:
        'Deux missions internationales en anglais : conception du site institutionnel de TickYes, de la maquette Figma à l’intégration WordPress, puis rédaction de contenus optimisés pour le référencement naturel (SEO) chez Ticket To The Moon.'
    }
  ],
  education: [
    {
      degree: 'Architecte en Intelligence Artificielle (Bac +5)',
      school: 'Jedha',
      period: 'Nov. 2026 – Mars 2027',
      description:
        'Parcours Fullstack & Lead IA (600 h) : Machine Learning, Deep Learning, IA générative (RAG, agents), MLOps et LLMOps, avec réalisation de projets concrets en contexte professionnel.'
    },
    {
      degree: 'Développeur d’application (Bac +4)',
      school: 'OpenClassrooms',
      period: 'Nov. 2020 · 1 an',
      description:
        'Parcours diplômant axé sur la pratique : conception et développement d’applications web avec React.'
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
    education: 'Formation',
    references: 'Références clients',
    passions: 'Passions',
    links: 'Liens',
    download: 'Télécharger en PDF',
    website: 'Site web',
    contactMe: 'Me contacter',
    otherLanguage: 'English'
  }
}
