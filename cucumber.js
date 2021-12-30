var commonArrayParams = [
    '--require-module ts-node/register',
    '--require env/set-environment-variables.ts',
    '--require src/**/*.ts',
    '--format-options \'{ "snippetInterface": "synchronous" }\'',
    '--publish-quiet',
];

var defaultParams = commonArrayParams.concat(['--format progress-bar']).join(' ');

var ciParams = commonArrayParams.concat(['--format progress']).join(' ');

var checkParams = commonArrayParams.concat([' --format summary']).join(' ');

var debugParams = commonArrayParams
    .concat(['--tags @debug', ' --format cucumber-console-formatter'])
    .join(' ');

var tagOnlyParams = commonArrayParams
    .concat(['--tags @only', ' --format cucumber-console-formatter'])
    .join(' ');

var quickRunParams = commonArrayParams
    .concat([
        '--format cucumber-console-formatter',
        '--format-options \'{ "colorsEnabled": false }\'',
    ])
    .join(' ');

module.exports = {
    default: defaultParams,

    ciParams: ciParams,

    checkParams: checkParams,

    debugParams: debugParams,

    onlyParams: tagOnlyParams,

    /**quickRun used in cucumber-quick plugin. See .vscode/settings.json */
    quickRun: quickRunParams,
};
// '--format json:./reports/cucumber-json-reports/report.json',
//'--require step_definitions/**/*.ts',
//'--require hooks/**/*.ts',
//'--format rerun:@rerun.txt',
//'--format usage:reports/usage.txt',
//'--format message:reports/messages.ndjson',
//'--format html:reports/report.html',
//'--parallel 20',
