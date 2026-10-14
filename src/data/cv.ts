import { cvEn } from './cv.en'
import { cvFr } from './cv.fr'
import type { Lang } from './types'

export type * from './types'

/** Language of the page, declared by its HTML file: `index.html` (fr) or `en/index.html` */
export const lang: Lang = document.documentElement.lang === 'en' ? 'en' : 'fr'

/** Content of the CV in the language of the page */
export const cv = lang === 'en' ? cvEn : cvFr
