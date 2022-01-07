import { ITestCaseHookParameter } from '@cucumber/cucumber';

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function containTag(arg: ITestCaseHookParameter, tag: string) {
    return arg.pickle.tags.some((item) => item.name === tag);
}
