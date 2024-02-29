const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  includeShadowDom: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.ts",
    baseUrl: "https://www.douglas.de/de",
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
