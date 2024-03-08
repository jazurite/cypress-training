import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "qunw4a",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com"
  }
})
