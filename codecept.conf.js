exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://qainterview.pythonanywhere.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    factorialPage: './TestAutomation/pages/factorialPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './TestAutomation/features/*.feature',
    steps: './TestAutomation/step_definitions/*_steps.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './TestAutomation/tests/*_test.js',
  name: 'TestProject'
}