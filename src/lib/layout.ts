import { ATS_PARAM } from '../versions.ts'

/**
 * Whether the page shows the CV in a single column, with `?ats` after its
 * address. Applicant tracking systems (ATS) that rebuild the reading order from
 * the position of the text mix up the two columns of the designed sheet: this
 * layout is the one to upload to their forms.
 */
export const isAts = new URLSearchParams(window.location.search).has(ATS_PARAM)
