import awsLogo from '../assets/logos/aws.svg'
import dockerLogo from '../assets/logos/docker.svg'
import elasticsearchLogo from '../assets/logos/elasticsearch.svg'
import fastapiLogo from '../assets/logos/fastapi.svg'
import gitLogo from '../assets/logos/git.svg'
import githubActionsLogo from '../assets/logos/github-actions.svg'
import javaLogo from '../assets/logos/java.svg'
import nestjsLogo from '../assets/logos/nestjs.svg'
import nextjsLogo from '../assets/logos/nextjs.svg'
import nodejsLogo from '../assets/logos/nodejs.svg'
import postgresqlLogo from '../assets/logos/postgresql.svg'
import pythonLogo from '../assets/logos/python.svg'
import reactLogo from '../assets/logos/react.svg'
import scalewayLogo from '../assets/logos/scaleway.svg'
import snowflakeLogo from '../assets/logos/snowflake.svg'
import typescriptLogo from '../assets/logos/typescript.svg'
import photo from '../assets/photo.jpg'
import type { Cv } from './types'

export const cvFr: Cv = {
  firstName: 'Guillaume',
  lastName: 'Gozillon',
  photo,
  title: '**Fullstack Engineer** · Search & IA générative',
  intro:
    'Fullstack depuis 5 ans, dont 3 comme seul développeur d’un SaaS B2B en production. Spécialisé en recherche Elasticsearch et IA générative appliquée (embeddings, RAG).',
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
    }
  ],
  skillGroups: [
    {
      label: 'Search & IA',
      skills: [
        '**Elasticsearch**',
        '**Embeddings**',
        '**Recherche vectorielle**',
        'RAG',
        'LLM',
        'Agents IA'
      ]
    },
    {
      label: 'Data',
      skills: ['Python', 'Java', '**Snowflake**', '**PostgreSQL**']
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
      skills: ['**Docker**', '**GitHub Actions**', 'Scaleway', 'AWS', 'Git']
    }
  ],
  logos: {
    Elasticsearch: elasticsearchLogo,
    Python: pythonLogo,
    Java: javaLogo,
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
    Scaleway: scalewayLogo,
    AWS: awsLogo,
    Git: gitLogo
  },
  languages: ['Français natif', 'Anglais professionnel'],
  experiences: [
    {
      role: 'Fullstack & Data Engineer (Retail Tech)',
      company: 'Nricher',
      period: 'Août 2023 – Oct. 2026',
      featured: true,
      description: [
        'Seul développeur pendant 3 ans du SaaS B2B de pricing intelligence, de la conception à la production : API NestJS, front Next.js, [À COMPLÉTER] clients.',
        'Conception et exploitation de la recherche **Elasticsearch** en production : [À COMPLÉTER] documents indexés, temps de réponse [À COMPLÉTER].',
        'Mise en production d’**embeddings et de recherche vectorielle** pour [À COMPLÉTER : cas d’usage et résultat].',
        'Développement des pipelines d’ingestion en Python et Java (Snowflake, S3).',
        'Migration de l’infrastructure vers Scaleway avec Docker et CI/CD : [À COMPLÉTER : gain].'
      ]
    },
    {
      role: 'Développeur Next.js & UX Designer',
      company: 'Grimp',
      period: 'Mars 2022 – Août 2023',
      description: [
        'Développement de fonctionnalités, de la maquette Figma à la production (Next.js, NestJS, GraphQL), pour une plateforme EdTech de 150 000+ étudiants.',
        'Création du design system et amélioration continue de la qualité du code.'
      ]
    },
    {
      role: 'Intégrateur web & UI Designer',
      company: 'Freelance, Sydney, Bali',
      period: '2019 – 2020',
      description:
        'Débuts : sites WordPress et Webflow en freelance, missions UI et SEO en anglais.'
    }
  ],
  projects: [
    {
      role: 'Co-fondateur',
      name: 'Klaaro',
      period: '[À COMPLÉTER]',
      description:
        'SaaS govtech d’analyse financière pour les collectivités locales françaises. [À COMPLÉTER : rôle, stack, brique IA éventuelle]'
    }
    // Deployed AI project (RAG or agent), to uncomment once it is live, with a
    // comma after the entry above. It takes about 70pt of the sheet: remove the
    // MANAA line and the OpenClassrooms description first so that the CV
    // still fits on one page.
    // {
    //   role: 'Projet personnel',
    //   name: '[À COMPLÉTER : nom du projet]',
    //   period: '[À COMPLÉTER]',
    //   description:
    //     '[À COMPLÉTER : problème résolu, stack (LLM, embeddings, base vectorielle), résultat]',
    //   link: { label: '[À COMPLÉTER : domaine]', href: '[À COMPLÉTER : URL]' }
    // }
  ],
  education: [
    {
      degree: 'Architecte en IA (Bac +5)',
      school: 'Jedha',
      period: '**En cours** · Nov. 2026 – Mars 2027',
      description:
        '600 h : Machine Learning, Deep Learning, IA générative, MLOps et LLMOps.'
    },
    {
      degree: 'Développeur d’application (Bac +4)',
      school: 'OpenClassrooms',
      period: 'Nov. 2020 · 1 an',
      description:
        'Parcours diplômant axé sur la pratique : applications web avec React.'
    },
    {
      degree: 'Mise à niveau en arts appliqués (MANAA)',
      school: 'LISAA Rennes',
      period: '2018'
    },
    { degree: 'Baccalauréat scientifique', school: 'Saint-Malo' }
  ],
  references: [
    { label: 'nricher.io', href: 'https://nricher.io' },
    { label: 'grimp.io', href: 'https://grimp.io' },
    { label: 'ticketothemoon.com', href: 'https://eu.ticketothemoon.com/fr' },
    { label: 'azuwaconseils.fr', href: 'https://azuwaconseils.fr' }
  ],
  passions: ['Contrebasse', 'Jazz', 'Surf', 'Voyage'],
  labels: {
    contact: 'Contact',
    contactDetails: 'Coordonnées',
    skills: 'Compétences',
    languages: 'Langues',
    experiences: 'Expériences professionnelles',
    projects: 'Projets',
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
