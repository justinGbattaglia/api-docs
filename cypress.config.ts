import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: 'http://localhost:3000'
  },
  projectId: "oz7rpf",
  requestTimeout: 30000,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,  
  retries: 1,
});