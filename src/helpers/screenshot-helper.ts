import { CustomWorld } from '../world';
import { v4 as uuidv4 } from 'uuid';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { existsSync, writeFileSync, mkdirSync, rmSync } from 'fs';

const screenshotFolder = process.env.SCREENSHOT_PATH ? process.env.SCREENSHOT_PATH : './screenshots/';

export async function takeScreenshot(world: CustomWorld, name?: string) {
    // Returns base64 encoded string
    const encodedString = await world.driver.takeScreenshot();
    const path = getUniqScreenshotPath(screenshotFolder, name);
    await writeFileSync(path, encodedString, 'base64');
}

export async function takeScreenshotOnError(world: CustomWorld, testCase: ITestCaseHookParameter) {
    // Returns base64 encoded string
    const encodedString = await world.driver.takeScreenshot();
    const path = getScreenshotPathForScenario(testCase);
    await writeFileSync(path, encodedString, 'base64');
}

export function removeAllScreenshots() {
    rmSync(screenshotFolder, { force: true, recursive: true });
}

export function createScreenshotsFolder() {
    if (!existsSync(screenshotFolder)) {
        mkdirSync(screenshotFolder);
    }
}

export function getScreenshotPathForScenario(testCase: ITestCaseHookParameter) {
    const feature = testCase.gherkinDocument.uri.replace('features\\', '');
    const folder = screenshotFolder + feature;
    if (!existsSync(folder)) {
        mkdirSync(folder);
    }
    const scenarioName = replaceIllegalCharacter(testCase.pickle.name);
    const path = getUniqScreenshotPath(folder, 'FAILED_' + scenarioName);
    return path;
}

function getUniqScreenshotPath(path: string, name: string): string {
    if (!path.endsWith('/')) {
        path = path + '/';
    }
    name = name ?? getGuidName();
    let filepath = '';
    let count = 0;
    do {
        filepath = path + name + (count === 0 ? '' : '_' + count) + '.jpg';
        count++;
    } while (count < 100 && existsSync(filepath));

    return filepath;
}

function getGuidName(): string {
    const rightNow = new Date();
    const strTime = replaceIllegalCharacter(rightNow.toISOString());
    return strTime + '_' + uuidv4();
}

function replaceIllegalCharacter(path: string) {
    return path.replace(/[/\\?%*:|"<>]/g, '-');
}
