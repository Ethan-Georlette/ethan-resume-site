import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative assets work both on the repository Pages URL and on ethangeorlette.com.
  base: './',
});
