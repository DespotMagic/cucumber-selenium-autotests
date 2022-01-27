/* eslint-disable prettier/prettier */
var commonArrayParams = [
    '--require-module ts-node/register',
    '--require src/**/*.ts',
    '--format-options \'{ "snippetInterface": "async-await" }\'',
    '--publish-quiet',
    '-f json:reports/cucumber_report.json', // Note: this formatter is deprecated and will be removed in the next major release.
    '-f message:reports/cucumber-messages.ndjson'
];

var defaultParams = commonArrayParams.concat(['--format progress-bar']).join(' ');

var ciParams = commonArrayParams.concat([]).join(' ');

var checkParams = commonArrayParams.concat([' --format summary']).join(' ');

var debugParams = commonArrayParams.concat(['--tags @debug', ' --format cucumber-console-formatter']).join(' ');

var tagOnlyParams = commonArrayParams
    .concat([
        '--tags @only',
        ' --format cucumber-console-formatter',
        ' -f html:reports/build_in_report.html'
    ])
    .join(' ');

var quickRunParams = commonArrayParams
    .concat(['--format cucumber-console-formatter', '--format-options \'{ "colorsEnabled": false }\''])
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
