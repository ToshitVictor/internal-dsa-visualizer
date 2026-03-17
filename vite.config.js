import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths to avoid base path issues on Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
