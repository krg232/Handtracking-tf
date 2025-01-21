import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '3000')
  },
  build: {
    outDir: './build',
  }
})
