import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react", "react/jsx-dev-runtime"],
  },
  esbuild: {
    jsx: 'react',
  },
  plugins: [react()],
});
