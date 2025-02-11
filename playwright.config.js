import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'https://epicbet.com/',
    headless: true,
    screenshot: 'only-on-failure'
  },
  reporter: [
    ['html'],
    ['list'],
    ['./tests/reporters/custom.js']
  ],
  projects: [
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 14 Pro Max'],
      },
      testMatch: /.*mobile.*\.spec\.js/  // Only run files with 'mobile' in the name
    },
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
      testIgnore: /.*mobile.*\.spec\.js/  // Skip files with 'mobile' in the name
    }
  ],
});