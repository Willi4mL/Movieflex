import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: 'MovieFlex',
    chunkSizeWarningLimit: 1600,}
})
