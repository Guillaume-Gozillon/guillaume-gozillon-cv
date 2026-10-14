import { relative, resolve } from 'node:path'
import { chromium, type Browser } from 'playwright'
import { preview } from 'vite'
import { PDF_FILENAME } from '../src/pdf.ts'

// Serves the production build, opens it in headless Chromium and prints it to
// PDF inside the build output, so the page can link to it for download.
const server = await preview({ logLevel: 'warn' })
let browser: Browser | undefined

try {
  const url = server.resolvedUrls?.local[0]
  if (!url) throw new Error('Unable to resolve the Vite preview server URL')

  browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.evaluate('document.fonts.ready')

  const { root, build } = server.config
  const path = resolve(root, build.outDir, PDF_FILENAME)
  await page.pdf({
    path,
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true
  })
  console.log(`PDF generated: ${relative(process.cwd(), path)}`)
} finally {
  await browser?.close()
  await server.close()
}
