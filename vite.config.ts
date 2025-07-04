import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/assets': '/src/assets',
      '@/public': '/public',
      '/vite.svg': '/__mocks__/fileMock.js',
      './assets/react.svg': '/__mocks__/fileMock.js',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setupTests.ts'],
    exclude: ['tests/e2e/**', 'node_modules/**'],
    deps: {
      optimizer: {
        web: {
          include: ['react', 'react-dom'],
        },
      },
    },
  },
})
