import { cvChEn, cvChFr } from './cv.ch'
import { cvEn } from './cv.en'
import { cvFr } from './cv.fr'
import type { Cv, Version } from './types'

export type * from './types'

const CVS: Record<Version, Cv> = {
  fr: cvFr,
  en: cvEn,
  'fr-CH': cvChFr,
  'en-CH': cvChEn
}

/**
 * Version of the page, declared by the `lang` attribute of its HTML file:
 * `index.html` (fr), `en/index.html` (en), `ch/index.html` (fr-CH) or `ch/en/index.html` (en-CH)
 */
export const version: Version = Object.hasOwn(
  CVS,
  document.documentElement.lang
)
  ? (document.documentElement.lang as Version)
  : 'fr'

/** Content of the CV of the page */
export const cv = CVS[version]
