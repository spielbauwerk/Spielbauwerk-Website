import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        impressum: 'impressum.html',
        datenschutz: 'datenschutz.html',
      }
    }
  }
})