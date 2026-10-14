import type { Lang } from './data/types.ts'

// Shared by the page and scripts/generate-assets.ts

/** Path of each version of the CV, relative to the site root (pages declared in vite.config.ts) */
export const PAGE_PATHS: Record<Lang, string> = { fr: '', en: 'en/' }

/** PDF of each version, generated at the site root */
export const PDF_FILENAMES: Record<Lang, string> = {
  fr: 'guillaume-gozillon-cv.pdf',
  en: 'guillaume-gozillon-cv-en.pdf'
}
