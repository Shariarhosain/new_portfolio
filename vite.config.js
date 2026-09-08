import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://shariarhosain.github.io/new_portfolio/
// Without this base, JS/CSS request /assets/* from the wrong path → blank white page.
// If you later use a custom domain at the site root, change this to '/'.
export default defineConfig({
  base: '/new_portfolio/',
  plugins: [react()],
})
