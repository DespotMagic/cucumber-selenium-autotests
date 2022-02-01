import { ITestCaseHookParameter } from '@cucumber/cucumber';

export class FeatureContext {
    private featureUri: string;

    //[key: string]: string

    isNewFeature(arg: ITestCaseHookParameter) {
        return this.featureUri !== arg.gherkinDocument.uri;
    }

    init(arg: ITestCaseHookParameter) {
        this.featureUri = arg.gherkinDocument.uri;
    }
}
