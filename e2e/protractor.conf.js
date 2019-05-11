// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var htmlReportFile = 'e2e/cucumber_report.html';
var jsonReportFile = 'e2e/cucumber_report.json';
var screenshotsPath = 'e2e/screenshots/';

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
    format: 'json:' + jsonReportFile,
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
        jsonFile: jsonReportFile,
        output: htmlReportFile,
        screenshotsDirectory: screenshotsPath,
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