import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
/* eslint-disable import/no-extraneous-dependencies */
export default defineConfig({
  plugins: [react()],
});
