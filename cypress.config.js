const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9vv1q9',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/", setupNodeEvents(on, config) {

    }
  }
});