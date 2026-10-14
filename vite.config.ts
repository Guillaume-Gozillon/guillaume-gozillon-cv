import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Public URL of the deployed site, e.g. `SITE_URL=https://example.com pnpm build`.
// Social networks need absolute URLs for the link preview image.
const siteUrl = (process.env.SITE_URL ?? '').replace(/\/+$/, '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'site-url',
      transformIndexHtml: html => html.replaceAll('%SITE_URL%', siteUrl)
    }
  ]
})
