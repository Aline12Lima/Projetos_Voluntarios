import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ande-projeto/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    globals: true,
  }
})
