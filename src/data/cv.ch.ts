import { cvEn } from './cv.en'
import { cvFr } from './cv.fr'
import type { Cv } from './types'

// Versions for the Swiss job market: in French for Romandie, in English for
// Zurich. They follow the French and English versions, and only add what Swiss
// recruiters expect from a candidate based in France: work permit,
// availability, language levels on the CEFR scale and references.

export const cvChFr: Cv = {
  ...cvFr,
  // The phone number in the international format, the only one that can be
  // dialled from Switzerland, and Paris after the town, as in the English version
  contacts: cvEn.contacts,
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
    // European Qualifications Framework instead, as Swiss recruiters expect
    // (« niveau Master » would not fit on one line for OpenClassrooms)
    degree: education.degree
      .replace('Bac +5', 'EQF 7')
      .replace('Bac +4', 'EQF 6')
  })),
  referencesNote: 'Références d’employeurs sur demande'
}

export const cvChEn: Cv = {
  ...cvEn,
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
