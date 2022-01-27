import { openPage } from '../../helpers/page-helper';
import { CustomWorld } from '../../world';
import { Given, When } from '@cucumber/cucumber';

Given('Opened {string} page', { timeout: 10 * 1000 }, async function (this: CustomWorld, pageName: string) {
    await openPage(this, pageName);
});

When('Open {string} page', { timeout: 10 * 1000 }, async function (this: CustomWorld, pageName: string) {
    await openPage(this, pageName);
});
