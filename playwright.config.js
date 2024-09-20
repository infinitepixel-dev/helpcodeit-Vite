// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:5154/', // Update this to match your local development server URL
    // Other configurations...

  },
  // Other configurations...
});