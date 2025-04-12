import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      // Removed alias for react-icons/fa to let Vite resolve it naturally.
      // 'react-icons/fa': path.resolve(__dirname, 'node_modules/react-icons/fa')
    }
  }
})
