/* eslint-disable @typescript-eslint/no-empty-function */
import { CustomWorld } from '../world';
import { Tags } from '../models/tags.model';
import { Before, BeforeAll, AfterAll, After } from '@cucumber/cucumber';

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
After(async function (this: CustomWorld) {});

/**BeforeAll run before any scenario is run. */
BeforeAll(async function () {});

/**AfterAll run after all scenarios have been executed. */
AfterAll(async function () {});
