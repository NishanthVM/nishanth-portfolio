import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build date is baked in at build time so the footer's "Last updated"
// reflects when the site was actually published, not the visitor's clock.
const buildDate = new Date().toISOString();

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
});
