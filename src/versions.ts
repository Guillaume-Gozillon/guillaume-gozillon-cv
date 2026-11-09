import type { Version } from './data/types.ts'

// Shared by the page and scripts/generate-assets.ts

/** Path of each version of the CV, relative to the site root (pages declared in vite.config.ts) */
export const PAGE_PATHS: Record<Version, string> = {
  fr: '',
  en: 'en/',
  'fr-CH': 'ch/',
  'en-CH': 'ch/en/'
}

/** PDF of each version, generated at the site root */
export const PDF_FILENAMES: Record<Version, string> = {
  fr: 'guillaume-gozillon-cv.pdf',
  en: 'guillaume-gozillon-cv-en.pdf',
  'fr-CH': 'guillaume-gozillon-cv-ch.pdf',
  'en-CH': 'guillaume-gozillon-cv-ch-en.pdf'
}

/** The same version in the other language, linked by the language button */
export const TRANSLATIONS: Record<Version, Version> = {
  fr: 'en',
  en: 'fr',
  'fr-CH': 'en-CH',
  'en-CH': 'fr-CH'
}
