import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/weatherApp/',
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: { 
      src: new URL('./src', import.meta.url).pathname 
    },
  },
});