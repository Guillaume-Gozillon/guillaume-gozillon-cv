import { lang } from '../data/cv'

/**
 * ntfy.sh topic that receives a push notification on each download: subscribe
 * to it in the ntfy app. Anyone who knows the name can post to it, hence a
 * random one.
 */
const NTFY_TOPIC = 'cv-gg-6857080c341af550'

/** Visits of this browser, counted when the page loads (storage can be unavailable) */
const VISITS_KEY = 'cv-visits'
const visits = (() => {
  try {
    const stored = JSON.parse(localStorage.getItem(VISITS_KEY) ?? 'null') as {
      count: number
      first: string
    } | null
    const next = {
      count: (stored?.count ?? 0) + 1,
      first: stored?.first ?? new Date().toISOString()
    }
    localStorage.setItem(VISITS_KEY, JSON.stringify(next))
    return next
  } catch {
    return null
  }
})()

/** "Ordinateur · macOS · Chrome", guessed from the user agent */
function describeDevice() {
  const ua = navigator.userAgent
  const device = /iPad|Tablet/.test(ua)
    ? 'Tablette'
    : /Mobi|Android|iPhone/.test(ua)
      ? 'Téléphone'
      : 'Ordinateur'
  const os = /iPhone|iPad/.test(ua)
    ? 'iOS'
    : /Android/.test(ua)
      ? 'Android'
      : /Windows/.test(ua)
        ? 'Windows'
        : /Mac OS X/.test(ua)
          ? 'macOS'
          : /Linux/.test(ua)
            ? 'Linux'
            : null
  const browser = /Edg\//.test(ua)
    ? 'Edge'
    : /OPR\//.test(ua)
      ? 'Opera'
      : /Firefox|FxiOS/.test(ua)
        ? 'Firefox'
        : /Chrome|CriOS/.test(ua)
          ? 'Chrome'
          : /Safari/.test(ua)
            ? 'Safari'
            : null
  return [device, os, browser].filter(Boolean).join(' · ')
}

/** "Paris, Île-de-France, FR · Orange S.A.", from the IP address, or null if the lookup fails */
async function describeLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json', {
      signal: AbortSignal.timeout(3000)
    })
    const { city, region, country, org } = (await response.json()) as Partial<
      Record<'city' | 'region' | 'country' | 'org', string>
    >
    const place = [city, region, country].filter(Boolean).join(', ')
    // `org` starts with the network number: "AS3215 Orange S.A."
    const network = org?.replace(/^AS\d+\s*/, '')
    return [place, network].filter(Boolean).join(' · ') || null
  } catch {
    return null
  }
}

/** "1 min 12 s" */
function formatDuration(ms: number) {
  const seconds = Math.round(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  return minutes ? `${minutes} min ${seconds % 60} s` : `${seconds} s`
}

/** Sends a push notification describing who downloaded the CV, as far as the browser and the IP address tell */
export async function notifyDownload() {
  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref') ?? params.get('utm_source')
  const referrer = document.referrer && new URL(document.referrer).hostname
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const timeOnPage = performance.now()
  const location = await describeLocation()

  const lines = [
    [`Version ${lang.toUpperCase()}`, ref && `ref=${ref}`],
    [location],
    [referrer ? `Depuis ${referrer}` : 'Accès direct'],
    [describeDevice()],
    [navigator.language, timeZone],
    [
      `${formatDuration(timeOnPage)} sur la page`,
      visits &&
        (visits.count === 1
          ? '1re visite'
          : `${visits.count}e visite (1re le ${new Date(visits.first).toLocaleDateString('fr-FR')})`)
    ]
  ]
  const message = lines
    .map(line => line.filter(Boolean).join(' · '))
    .filter(Boolean)
    .join('\n')

  const url = new URL(`https://ntfy.sh/${NTFY_TOPIC}`)
  url.searchParams.set('title', 'CV téléchargé')
  url.searchParams.set('tags', 'page_facing_up')

  // Fire and forget: the download must never depend on it
  fetch(url, { method: 'POST', body: message, keepalive: true }).catch(() => {})
}
