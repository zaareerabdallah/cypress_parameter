const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/*.js"
  },
  chromeWebSecurity:false,
  pageLoadTimeout:240000,
});
