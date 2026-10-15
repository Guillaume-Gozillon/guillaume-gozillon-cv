// In texts, `**word**` is highlighted with the accent color.

/** Language of a version of the CV */
export type Lang = 'fr' | 'en'

export interface Contact {
  icon:
    | 'mail'
    | 'phone'
    | 'location'
    | 'website'
    | 'linkedin'
    | 'github'
    | 'license'
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

/** Interface texts: section titles, buttons and names read by screen readers */
export interface Labels {
  contact: string
  /** Name of the contact details, for screen readers */
  contactDetails: string
  skills: string
  languages: string
  experiences: string
  education: string
  references: string
  passions: string
  /** Name of the button bar, for screen readers */
  links: string
  download: string
  website: string
  contactMe: string
  /** Name of the other language, written in that language, e.g. `English` */
  otherLanguage: string
  /** Note under the sheet about the download notification (screen only) */
  privacy: string
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
  languages: string[]
  experiences: Experience[]
  education: Education[]
  references: Reference[]
  passions: string[]
  labels: Labels
}
