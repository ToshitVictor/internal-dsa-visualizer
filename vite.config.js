import { defineConfig } from 'vite';

export default defineConfig({
  // Vercel handles the base path automatically for their own domains, 
  // but this ensures everything is relative correctly in production.
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'terser', // Or 'esbuild' (default) for faster builds.
    sourcemap: false,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true
  }
});
