import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    
    sentryVitePlugin({
      org: "aline-lima-ads",     
      project: "ong-ande-spa",  
    }),
  ],
  // Importante: Habilita os mapas para o Sentry ler o código
  build: {
    sourcemap: true,
  },
 
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    globals: true,
  }
})