import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Deployment settings, provided by the GitHub Pages workflow:
// - BASE_PATH: path the site is served from, e.g. `/guillaume-gozillon-cv/`
// - SITE_URL: public URL of the site. Social networks need absolute URLs for
//   the link preview image.
const base = (process.env.BASE_PATH ?? '/').replace(/\/*$/, '/')
const siteUrl = (process.env.SITE_URL ?? '').replace(/\/+$/, '')

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'site-url',
      transformIndexHtml: html => html.replaceAll('%SITE_URL%', siteUrl)
    }
  ]
})
