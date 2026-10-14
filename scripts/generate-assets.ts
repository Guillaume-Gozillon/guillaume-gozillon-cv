import { relative, resolve } from 'node:path'
import { chromium, type Browser, type Page } from 'playwright'
import { preview } from 'vite'
import { PDF_FILENAME } from '../src/pdf.ts'

/** Link preview image (1200 × 630), referenced by the Open Graph tags of index.html */
const PREVIEW_FILENAME = 'og-image.png'
const PREVIEW_WIDTH = 1200
/**
 * Captured area in CSS pixels, at the top of the A4 sheet (793.7px wide). Whole
 * pixels keep the zoomed image at exactly 1200 × 630.
 */
const CAPTURE = { width: 792, height: 416 }

// Serves the production build and opens it in headless Chromium to generate,
// inside the build output, the PDF of the CV and the link preview image.
const server = await preview({ logLevel: 'warn' })
let browser: Browser | undefined

try {
  const url = server.resolvedUrls?.local[0]
  if (!url) throw new Error('Unable to resolve the Vite preview server URL')
  const outDir = resolve(server.config.root, server.config.build.outDir)

  browser = await chromium.launch()
  const open = async (page: Page) => {
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate('document.fonts.ready')
    return page
  }

  const pdfPath = resolve(outDir, PDF_FILENAME)
  const pdfPage = await open(await browser.newPage())
  await pdfPage.pdf({
    path: pdfPath,
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true
  })

  // Top of the CV, zoomed so that the sheet width fills the image
  const previewPath = resolve(outDir, PREVIEW_FILENAME)
  const previewPage = await open(
    await browser.newPage({
      viewport: { width: 1280, height: 900 },
      deviceScaleFactor: PREVIEW_WIDTH / CAPTURE.width
    })
  )
  const sheet = await previewPage.locator('article').boundingBox()
  if (!sheet) throw new Error('CV sheet not found')
  await previewPage.screenshot({
    path: previewPath,
    clip: {
      x: sheet.x + (sheet.width - CAPTURE.width) / 2,
      y: sheet.y,
      ...CAPTURE
    }
  })

  for (const path of [pdfPath, previewPath]) {
    console.log(`Generated: ${relative(process.cwd(), path)}`)
  }
} finally {
  await browser?.close()
  await server.close()
}
