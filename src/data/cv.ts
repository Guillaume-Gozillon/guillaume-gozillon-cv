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

// In texts, `**word**` is highlighted with the accent color.

export interface Contact {
  icon: 'mail' | 'phone' | 'location'
  label: string
  href?: string
}

export interface Social {
  icon: 'linkedin' | 'github'
  label: string
  href: string
}

export interface Skill {
  name: string
  logo: string
  /** Share of the ring drawn around the logo, from 0 to 100 */
  level: number
}

export interface SkillGroup {
  label: string
  value?: string
  details?: { label: string; value: string }[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface Education {
  title: string
  subtitle: string
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
  details: string[]
  contacts: Contact[]
  socials: Social[]
  skills: Skill[]
  softSkills: string[]
  skillGroups: SkillGroup[]
  experiences: Experience[]
  education: Education[]
  references: Reference[]
  passions: string[]
}

export const cv: Cv = {
  firstName: 'Guillaume',
  lastName: 'Gozillon',
  title: 'Développeur Fullstack **React** & **NestJS**',
  intro:
    'Passionné par les innovations technologiques, je suis spécialisé dans le développement d’applications SaaS avec NestJS, TypeScript et React.',
  details: ['Permis B'],
  contacts: [
    {
      icon: 'mail',
      label: 'guillaumegozillon@gmail.com',
      href: 'mailto:guillaumegozillon@gmail.com'
    },
    { icon: 'phone', label: '06 38 80 81 62', href: 'tel:+33638808162' },
    { icon: 'location', label: 'Levallois-Perret' }
  ],
  socials: [
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guillaume-gozillon/'
    },
    {
      icon: 'github',
      label: 'GitHub',
      href: 'https://github.com/Guillaume-Gozillon'
    }
  ],
  skills: [
    { name: 'React', logo: reactLogo, level: 87 },
    { name: 'TypeScript', logo: typescriptLogo, level: 63 },
    { name: 'Node.js', logo: nodejsLogo, level: 80 },
    { name: 'GraphQL', logo: graphqlLogo, level: 63 },
    { name: 'Git', logo: gitLogo, level: 69 },
    { name: 'Jira', logo: jiraLogo, level: 63 },
    { name: 'NestJS', logo: nestjsLogo, level: 86 },
    { name: 'Snowflake', logo: snowflakeLogo, level: 58 },
    { name: 'Storybook', logo: storybookLogo, level: 63 },
    { name: 'CSS', logo: cssLogo, level: 89 },
    { name: 'Figma', logo: figmaLogo, level: 63 },
    { name: 'Docker', logo: dockerLogo, level: 100 }
  ],
  softSkills: [
    'Rigoureux',
    'Esprit d’équipe',
    'Impliqué',
    'Créatif',
    'Curieux'
  ],
  skillGroups: [
    {
      label: 'Frontend',
      value: '**React** (Next.js), **TypeScript**, MUI, Storybook'
    },
    {
      label: 'Backend',
      details: [
        {
          label: 'Framework & ORM',
          value: '**NestJS**, Prisma, TypeORM, Passport'
        },
        { label: 'Service cloud', value: 'AWS & **Heroku**' }
      ]
    },
    {
      label: 'Data',
      details: [
        { label: 'Bases de données', value: '**PostgreSQL**, **Snowflake**' },
        {
          label: 'Moteur de recherche',
          value: '**Elasticsearch** (automatisation des index / alias)'
        }
      ]
    },
    {
      label: 'Devops',
      value:
        '**CI/CD** avec **GitHub Actions**, conteneurisation **Docker** (NestJS, PostgreSQL, Spring Boot)'
    }
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
      title:
        'OpenClassrooms - Développeur d’application - Bac +4 - 11/2020 - 1 an',
      subtitle: 'Création d’application avec React'
    },
    {
      title: 'LISAA Rennes - MANAA, 2018',
      subtitle:
        'Mise à niveau en art appliqué, maitrise d’Adobe XD et Figma ainsi que de l’UI design'
    },
    { title: 'Baccalauréat - Scientifique', subtitle: 'Saint-Malo' }
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
