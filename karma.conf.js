// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webdriver-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    hostname: require('./tools/hostIP'),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome-selenium', 'Firefox-selenium'],
    concurrency: 2,
    customLaunchers: {
      'Chrome-selenium': {
        base: 'WebDriver',
        config: {
          hostname: 'localhost',
          port: 4444
        },
        browserName: 'chrome',
      },
      'Firefox-selenium': {
        base: 'WebDriver',
        config: {
          hostname: 'localhost',
          port: 4444
        },
        browserName: 'firefox',
      }
    },
    singleRun: false
  });
};
