import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  root: 'src',
  build: { outDir: 'dist' },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})