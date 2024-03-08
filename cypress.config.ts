import {defineConfig} from 'cypress'
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin")

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

            // Calls the plugin's getCompareSnapshotsPlugin function, passing Cypress' on and config objects, to intialize and register the plugin with Cypress
            getCompareSnapshotsPlugin(on, config);
        },
        baseUrl: "https://demoqa.com"
    },
    viewportWidth: 2048,
    viewportHeight: 1080
})
