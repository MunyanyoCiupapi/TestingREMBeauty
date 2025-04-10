const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a2dhmy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
