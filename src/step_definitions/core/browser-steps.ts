import { getUrlFromPageDescriptor } from '../../helpers/page-helper';
import { getPageDescriptorByName } from '../../core/pages';
import { CustomWorld } from '../../world';
import { PageAreaContext } from '../../models/pages.model';
import { IPageLoading } from '../../core/context-interfaces';
import { Given } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';

Given('Open page {string}', { timeout: 10 * 1000 }, async function (this: CustomWorld, pageName: string) {
    const pageDescriptor = getPageDescriptorByName(pageName);
    if (!pageDescriptor) {
        throw new Error(`PageDescriptor for page "${pageName}" not found`);
    }
    const url = getUrlFromPageDescriptor(pageDescriptor);
    if (!url) {
        throw new Error(`No url address for "${pageName}" page`);
    }
    await this.driver.get(url);
    const pageContext = this.pageContextFactory.createPageContextInstance(pageDescriptor);
    this.pageContextManager.pushContext(pageContext);

    await waitPageLoading(this.driver, pageContext);
});

async function waitPageLoading(driver: WebDriver, pageContext: PageAreaContext | unknown) {
    const override = pageContext as IPageLoading;
    if (override?.waitPageLoading) {
        await override.waitPageLoading();
    } else {
        await defaultWaitPageLoading(driver);
    }
}

async function defaultWaitPageLoading(driver: WebDriver) {
    console.log('defaultWaitPageLoading');
    await driver.sleep(500);
}
