import { relative, resolve } from 'node:path'
import { chromium, type Browser, type Page } from 'playwright'
import { preview } from 'vite'
import type { Lang } from '../src/data/types.ts'
import { PLACEHOLDER } from '../src/placeholder.ts'
import { PAGE_PATHS, PDF_FILENAMES } from '../src/versions.ts'

/** Link preview image (1200 × 630) of each version, referenced by the Open Graph tags of its HTML page */
const PREVIEW_FILENAMES: Record<Lang, string> = {
  fr: 'og-image.png',
  en: 'og-image-en.png'
}
const PREVIEW_WIDTH = 1200
/**
 * Captured area in CSS pixels, at the top of the A4 sheet (793.7px wide). Whole
 * pixels keep the zoomed image at exactly 1200 × 630.
 */
const CAPTURE = { width: 792, height: 416 }

// Serves the production build and opens each version of the CV in headless
// Chromium to generate, inside the build output, its PDF and link preview image.
const server = await preview({ logLevel: 'warn' })
let browser: Browser | undefined

try {
  const url = server.resolvedUrls?.local[0]
  if (!url) throw new Error('Unable to resolve the Vite preview server URL')
  const outDir = resolve(server.config.root, server.config.build.outDir)

  browser = await chromium.launch()
  const generated: string[] = []

  for (const lang of Object.keys(PAGE_PATHS) as Lang[]) {
    const open = async (page: Page) => {
      await page.goto(url + PAGE_PATHS[lang], { waitUntil: 'networkidle' })
      await page.evaluate('document.fonts.ready')
      return page
    }

    const pdfPage = await open(await browser.newPage())
    const cvSheet = pdfPage.locator('[data-cv-sheet]')

    // The sheet is exactly one A4 page: whatever does not fit is cut off
    if (await cvSheet.evaluate(el => el.scrollHeight > el.clientHeight)) {
      throw new Error(`The ${lang} CV does not fit on one A4 page`)
    }

    // Information still to fill in must never be deployed (CI is set by GitHub Actions)
    const placeholders = (await cvSheet.innerText()).match(
      new RegExp(PLACEHOLDER, 'g')
    )
    if (placeholders) {
      const message = `The ${lang} CV still has information to fill in:\n- ${placeholders.join('\n- ')}`
      if (process.env.CI) throw new Error(message)
      console.warn(message)
    }

    const pdfPath = resolve(outDir, PDF_FILENAMES[lang])
    await pdfPage.pdf({
      path: pdfPath,
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true
    })

    // Top of the CV, zoomed so that the sheet width fills the image
    const previewPath = resolve(outDir, PREVIEW_FILENAMES[lang])
    const previewPage = await open(
      await browser.newPage({
        viewport: { width: 1280, height: 900 },
        deviceScaleFactor: PREVIEW_WIDTH / CAPTURE.width
      })
    )
    const sheet = await previewPage.locator('[data-cv-sheet]').boundingBox()
    if (!sheet) throw new Error('CV sheet not found')
    await previewPage.screenshot({
      path: previewPath,
      clip: {
        x: sheet.x + (sheet.width - CAPTURE.width) / 2,
        y: sheet.y,
        ...CAPTURE
      }
    })

    generated.push(pdfPath, previewPath)
  }

  for (const path of generated) {
    console.log(`Generated: ${relative(process.cwd(), path)}`)
  }
} finally {
  await browser?.close()
  await server.close()
}
