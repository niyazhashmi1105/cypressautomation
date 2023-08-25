const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vobtxu',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
