// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 70*1000,
  expect: {
    timeout: 8000,
  },
  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless : false,
  },

});

module.exports = config

