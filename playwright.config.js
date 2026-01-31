const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.playwright',
  use: {
    browserName: 'chromium',
    channel: 'chrome',   // use your local Chrome
    headless: true
  },
  reporter: [
    ['html', { outputFolder: 'test-results', open: 'always' }],
  ]
});



