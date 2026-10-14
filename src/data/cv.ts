import cssLogo from '../assets/logos/css.svg'
import dockerLogo from '../assets/logos/docker.svg'
import figmaLogo from '../assets/logos/figma.svg'
import gitLogo from '../assets/logos/git.svg'
import graphqlLogo from '../assets/logos/graphql.svg'
import jiraLogo from '../assets/logos/jira.svg'
import nestjsLogo from '../assets/logos/nestjs.svg'
import nodejsLogo from '../assets/logos/nodejs.svg'
import reactLogo from '../assets/logos/react.svg'
import snowflakeLogo from '../assets/logos/snowflake.svg'
import storybookLogo from '../assets/logos/storybook.svg'
import typescriptLogo from '../assets/logos/typescript.svg'
import photo from '../assets/photo.jpg'

// In texts, `**word**` is highlighted with the accent color.

export interface Contact {
  icon: 'mail' | 'phone' | 'location' | 'linkedin' | 'github' | 'license'
  label: string
  href?: string
}

export interface SkillGroup {
  label: string
  /** Technologies; `**name**` marks the main ones */
  skills: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface Education {
  degree: string
  /** School, or city when the school is not named */
  school: string
  period?: string
  description?: string
}

export interface Reference {
  label: string
  href: string
}

export interface Cv {
  firstName: string
  lastName: string
  /** Photo URL, e.g. `import photo from '../assets/photo.jpg'`. Initials are shown when missing. */
  photo?: string
  title: string
  intro: string
  contacts: Contact[]
  skillGroups: SkillGroup[]
  /** Logos of the technologies, by name as written in `skillGroups` */
  logos: Record<string, string>
  softSkills: string[]
  experiences: Experience[]
  education: Education[]
  references: Reference[]
  passions: string[]
}

export const cv: Cv = {
  firstName: 'Guillaume',
  lastName: 'Gozillon',
  photo,
  title: 'Développeur Fullstack **React** & **NestJS**',
  intro:
    'Passionné par les innovations technologiques, je suis spécialisé dans le développement d’applications SaaS avec NestJS, TypeScript et React.',
  contacts: [
    {
      icon: 'mail',
      label: 'guillaumegozillon@gmail.com',
      href: 'mailto:guillaumegozillon@gmail.com'
    },
    { icon: 'phone', label: '06 38 80 81 62', href: 'tel:+33638808162' },
    { icon: 'location', label: 'Levallois-Perret' },
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
      label: 'Frontend',
      skills: [
        '**React**',
        'Next.js',
        '**TypeScript**',
        'MUI',
        'Storybook',
        'CSS'
      ]
    },
    {
      label: 'Backend',
      skills: [
        '**NestJS**',
        'Node.js',
        'Prisma',
        'TypeORM',
        'Passport',
        'GraphQL',
        'Spring Boot'
      ]
    },
    {
      label: 'Data',
      skills: ['**PostgreSQL**', '**Snowflake**', '**Elasticsearch**']
    },
    {
      label: 'DevOps & cloud',
      skills: [
        '**CI/CD**',
        '**GitHub Actions**',
        '**Docker**',
        'AWS',
        '**Heroku**'
      ]
    },
    { label: 'Outils', skills: ['Git', 'Jira', 'Figma'] }
  ],
  logos: {
    React: reactLogo,
    TypeScript: typescriptLogo,
    CSS: cssLogo,
    Storybook: storybookLogo,
    NestJS: nestjsLogo,
    'Node.js': nodejsLogo,
    GraphQL: graphqlLogo,
    Snowflake: snowflakeLogo,
    Docker: dockerLogo,
    Git: gitLogo,
    Jira: jiraLogo,
    Figma: figmaLogo
  },
  softSkills: [
    'Rigoureux',
    'Esprit d’équipe',
    'Impliqué',
    'Créatif',
    'Curieux'
  ],
  experiences: [
    {
      role: 'Fullstack & Data Engineer (Retail Tech)',
      company: 'Nricher',
      period: 'Depuis août 2023',
      description:
        'Conception from scratch et optimisation du backend Nricher avec NestJS (Prisma, PostgreSQL). Déploiement via CI/CD GitHub Actions et Docker. Data engineering en Java avec des pipelines quotidiens automatisant plus de 200 index et alias Elasticsearch depuis Snowflake. Développement front-end du SaaS avec Next.js.'
    },
    {
      role: 'Développeur Next.js & UX Designer',
      company: 'Grimp',
      period: 'Févr. 2022 · 1 an 6 mois',
      description:
        'Création de nouvelles fonctionnalités, correction de bugs, amélioration du Design System et réalisation de maquettes avec Figma pour améliorer la solution SaaS de la startup Grimp.'
    },
    {
      role: 'Intégrateur WordPress & Webflow',
      company: 'Freelance',
      period: '2019 · 1 an',
      description:
        'Conception de sites internet avec Webflow, HTML, CSS, et JavaScript. Gestion de la relation client et création de maquettes avec Adobe XD et des constructeurs WordPress.'
    },
    {
      role: 'UI Designer & SEO',
      company: 'TickYes, Sydney & Ticket To The Moon, Bali',
      period: '2019 · 1 an',
      description:
        'Conception et développement visuel du site de TickYes, complété par le maquettage avec Figma et WordPress. Rédacteur web chez Ticket To The Moon, Bali - 2019 : Optimisation du référencement naturel.'
    }
  ],
  education: [
    {
      degree: 'Développeur d’application (Bac +4)',
      school: 'OpenClassrooms',
      period: 'Nov. 2020 · 1 an',
      description: 'Création d’application avec React'
    },
    {
      degree: 'MANAA',
      school: 'LISAA Rennes',
      period: '2018',
      description:
        'Mise à niveau en art appliqué, maitrise d’Adobe XD et Figma ainsi que de l’UI design'
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
  ]
}
