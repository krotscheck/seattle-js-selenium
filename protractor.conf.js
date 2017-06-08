// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  maxSessions : 2,
  multiCapabilities: [{
    'seleniumAddress': 'http://localhost:4444/wd/hub',
    'browserName': 'chrome'
  }, {
    'seleniumAddress': 'http://localhost:4444/wd/hub',
    'browserName': 'firefox'
  }],
  directConnect: false,
  baseUrl: `http://${ require('./tools/hostIP') }:4200/`,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};
