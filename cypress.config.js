const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
})

// Вторая конфигурация для мобильных устройств
module.exports.mobileConfig = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  viewportWidth: 375,
  viewportHeight: 667,
}