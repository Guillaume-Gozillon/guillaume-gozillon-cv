import { cvEn } from './cv.en'
import { cvFr } from './cv.fr'
import type { Cv } from './types'

// Versions for the Swiss job market: in French for Romandie, in English for
// Zurich. They follow the French and English versions, and only add what Swiss
// recruiters expect from a candidate based in France: work permit,
// availability, language levels on the CEFR scale and references.

/**
 * The contacts of the English version, for the phone number in the
 * international format, the only one that can be dialled from Switzerland, and
 * Paris after the town; then the country, which a French CV leaves out
 */
const contacts = cvEn.contacts.map(contact =>
  contact.icon === 'location'
    ? { ...contact, label: `${contact.label}, France` }
    : contact
)

export const cvChFr: Cv = {
  ...cvFr,
  contacts,
  personalDetails: [
    {
      icon: 'nationality',
      label: 'Nationalité française (UE), éligible au permis B'
    },
    {
      icon: 'relocation',
      label: 'Disponible à Zurich ou en Romandie dès avril 2027'
    }
  ],
  languages: ['Français : langue maternelle', 'Anglais : C1 (courant)'],
  projects: cvFr.projects.map(project => ({
    ...project,
    // In Switzerland, the « collectivités » would be its communes and cantons
    description: project.description.replace(
      'des collectivités',
      'des collectivités françaises'
    )
  })),
  education: cvFr.education.map(education => ({
    ...education,
    // « Bac +5 » means nothing in Switzerland: the level of the degree in the
    // words its recruiters and their ATS filter on, as in the English version
    degree: education.degree
      .replace('Bac +5', 'niveau Master')
      .replace('Bac +4', 'niveau Bachelor'),
    // « niveau Bachelor » leaves no room for the period on the line of the
    // designed sheet: there, the year of the degree only
    shortPeriod: education.degree.includes('Bac +4')
      ? '2021'
      : education.shortPeriod
  })),
  referencesNote: 'Références d’employeurs sur demande'
}

export const cvChEn: Cv = {
  ...cvEn,
  contacts,
  personalDetails: [
    {
      icon: 'nationality',
      label: 'French citizen (EU), eligible for a B permit'
    },
    {
      icon: 'relocation',
      label: 'Available in Zurich or Romandy from April 2027'
    }
  ],
  languages: ['French: native', 'English: C1 (fluent)'],
  referencesNote: 'Professional references on request'
}
