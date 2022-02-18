import { ITestCaseHookParameter } from '@cucumber/cucumber';

export class FeatureContext {
    private featureUri: string;

    //[key: string]: string;

    isNewFeature(testCase: ITestCaseHookParameter) {
        return this.featureUri !== testCase.gherkinDocument.uri;
    }

    init(testCase: ITestCaseHookParameter) {
        this.featureUri = testCase.gherkinDocument.uri;
    }
}
