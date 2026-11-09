import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig, type Connect } from 'vite'
import { PAGE_PATHS } from './src/versions.ts'

// Deployment settings, provided by the GitHub Pages workflow:
// - BASE_PATH: path the site is served from, e.g. `/guillaume-gozillon-cv/`
// - SITE_URL: public URL of the site. Social networks need absolute URLs for
//   the link preview image.
const base = (process.env.BASE_PATH ?? '/').replace(/\/*$/, '/')
const siteUrl = (process.env.SITE_URL ?? '').replace(/\/+$/, '')

/**
 * Paths of the versions served from a folder, without their trailing slash,
 * e.g. `/ch`: the dev and preview servers would serve the French page there
 */
const folderPaths = Object.values(PAGE_PATHS)
  .filter(Boolean)
  .map(path => `${base}${path}`.slice(0, -1))

/** Redirects `/ch` to `/ch/`, as GitHub Pages does, keeping the query string */
const addTrailingSlash: Connect.NextHandleFunction = (req, res, next) => {
  const [path = '', query = ''] = req.url?.split(/(?=\?)/) ?? []
  if (!folderPaths.includes(path)) return next()
  res.writeHead(301, { Location: `${path}/${query}` }).end()
}

// https://vite.dev/config/
export default defineConfig({
  base,
  build: {
    // One page per version of the CV, see src/versions.ts
    rolldownOptions: {
      input: {
        fr: resolve(import.meta.dirname, 'index.html'),
        en: resolve(import.meta.dirname, 'en/index.html'),
        'fr-CH': resolve(import.meta.dirname, 'ch/index.html'),
        'en-CH': resolve(import.meta.dirname, 'ch/en/index.html')
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'site-url',
      transformIndexHtml: html => html.replaceAll('%SITE_URL%', siteUrl)
    },
    {
      // Only for the local servers: GitHub Pages already redirects
      name: 'trailing-slash',
      configureServer: server => {
        server.middlewares.use(addTrailingSlash)
      },
      configurePreviewServer: server => {
        server.middlewares.use(addTrailingSlash)
      }
    }
  ]
})
