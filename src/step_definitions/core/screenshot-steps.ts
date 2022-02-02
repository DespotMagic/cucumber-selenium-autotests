import { takeScreenshot } from '../../helpers/screenshot-helper';
import { CustomWorld } from '../../world';
import { When } from '@cucumber/cucumber';

When('Take screenshot', async function (this: CustomWorld) {
    await takeScreenshot(this);
});

When('Take screenshot and save with name {string}', async function (this: CustomWorld, name: string) {
    await takeScreenshot(this, name);
});
