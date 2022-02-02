/* eslint-disable @typescript-eslint/no-empty-function */
import { CustomWorld } from '../world';
import { Tags } from '../models/tags.model';
import { createScreenshotsFolder, removeAllScreenshots } from '../helpers/screenshot-helper';
import { Before, BeforeAll, AfterAll, After, Status } from '@cucumber/cucumber';

Before({ tags: Tags.ignore }, async function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return 'skipped' as any;
});

Before({ tags: Tags.debug }, async function (this: CustomWorld) {
    this.debug = true;
});

/**Before hooks run before the first step of each scenario. */
Before(async function (this: CustomWorld) {});

/**After hooks run after the last step of each scenario, even when the step result is failed, undefined, pending, or skipped. */
After(async function (this: CustomWorld, testCase) {
    if (testCase.result.status === Status.FAILED) {
        if (this.driver) {
            const screenshot = await this.driver.takeScreenshot();
            this.attach(Buffer.from(screenshot, 'base64'), 'image/png');

            //OR save screenshot to folder
            //takeScreenshotOnError(this, testCase);
        }
    }
});

/**BeforeAll run before any scenario is run. */
BeforeAll(async function () {
    removeAllScreenshots();
    createScreenshotsFolder();
});

/**AfterAll run after all scenarios have been executed. */
AfterAll(async function () {});
