import { PageAreaContext, PageAreaDescriptor } from '../models/pages.model';
import { CustomWorld } from '../world';
import { IPageLoading } from '../core/context-interfaces';
import { getPageDescriptorByName } from '../core/pages';
import { WebDriver } from 'selenium-webdriver';
import config from 'config';

export function getUrlFromPageDescriptor(page: PageAreaDescriptor): string {
    if (page.isFullUrl) {
        return page.pageUrlFormat;
    } else {
        const domain = config.get('applicationDomain');
        return domain + page.pageUrlFormat;
    }
}

export async function openPage(world: CustomWorld, pageName: string) {
    const pageDescriptor = getPageDescriptorByName(pageName);
    if (!pageDescriptor) {
        throw new Error(`PageDescriptor for page "${pageName}" not found`);
    }
    const url = getUrlFromPageDescriptor(pageDescriptor);
    if (!url) {
        throw new Error(`No url address for "${pageName}" page`);
    }
    await world.driver.get(url);
    const pageContext = world.pageContextFactory.createPageContextInstance(pageDescriptor);
    world.pageContextManager.pushContext(pageContext);

    await waitPageLoading(world.driver, pageContext);
}

async function waitPageLoading(driver: WebDriver, pageContext: PageAreaContext | unknown) {
    const override = pageContext as IPageLoading;
    if (override?.waitPageLoading) {
        await override.waitPageLoading();
    } else {
        await defaultWaitPageLoading(driver);
    }
}

async function defaultWaitPageLoading(driver: WebDriver) {
    //TODO: implement Wait Page Loading rules
    await driver.sleep(1000);
}
