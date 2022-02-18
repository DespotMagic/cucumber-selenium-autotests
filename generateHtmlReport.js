/* eslint-disable @typescript-eslint/no-var-requires */
var reporter = require('cucumber-html-reporter');
var chromedriver = require('chromedriver');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        Browser: 'Chrome ' + chromedriver.version,
        Platform: process.platform,
        Parallel: 'Scenarios',
        Executed: 'Remote',
    },
};

reporter.generate(options);
