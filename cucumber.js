// module.exports = {
//     default: `--format-options '{"snippetInterface": "synchronous"}'`
// }

var commonParams = [
    // '--format json:./reports/cucumber-json-reports/report.json',

    '--require-module ts-node/register',
    '--require env/set-environment-variables.ts',
    '--require src/**/*.ts',
    //'--require step_definitions/**/*.ts',
    //'--require hooks/**/*.ts',

    '--format summary',
    //'--format rerun:@rerun.txt',
    //'--format usage:reports/usage.txt',
    //'--format message:reports/messages.ndjson',
    //'--format html:reports/report.html',
    //'--parallel 20',
    '--format-options \'{ "snippetInterface": "synchronous" }\'',
    '--publish-quiet'
];

var checkParams = commonParams.concat([
    ' --format progress',
    ' --format progress-bar'
]);

var defaultParams = commonParams.concat([
    // '--format json:./reports/cucumber-json-reports/report.json',

    `--format ${process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'}`,
    //'--format rerun:@rerun.txt',
    //'--format usage:reports/usage.txt',
    //'--format message:reports/messages.ndjson',
    //'--format html:reports/report.html',
    //'--parallel 20',
    '--format-options \'{ "snippetInterface": "synchronous" }\'',
    '--publish-quiet'
]);

module.exports = {
    default: defaultParams.join(' '),
    checkParams: checkParams.join(' '),
};

// module.exports = {
//     default:
//         'features/**/*.feature --require env/set-environment-variables.ts --require world/custom-world.ts --require step-definitions/**/*.ts --require hooks/**/*.ts  --require-module ts-node/register --format-options \'{"snippetInterface": "async-await"}\' --publish-quiet',
// };