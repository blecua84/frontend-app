// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var cucumberReportDirectory = 'output';
var jsonReportFile = 'cucumber_report.json';

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
    format: 'json:e2e/cucumber_report.json',
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });    
  },
  onComplete: function() {
    var reporter = require('cucumber-html-reporter');
 
    var options = {
        name: 'Ragnarok App',
        theme: 'bootstrap',
        jsonFile: 'e2e/cucumber_report.json',
        output: 'e2e/cucumber_report.html',
        screenshotsDirectory: 'e2e/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.0.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome",
            "Platform": "MacOS",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };
 
    reporter.generate(options);
  }
};