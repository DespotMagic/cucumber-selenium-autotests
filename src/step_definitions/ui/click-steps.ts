import { CustomWorld } from '../../world';
import { PageAreaContext } from '../../models/pages.model';
import { IClickElement } from '../../core/context-interfaces';
import { generateDefaultSelector } from '../../helpers/selector-helpers';
import { When } from '@cucumber/cucumber';
import { By, until, WebDriver } from 'selenium-webdriver';

When('Click {string} button', async function (this: CustomWorld, elementName: string) {
    const pageContext = this.pageContextManager.getLastContext();
    if (!pageContext) {
        throw new Error(`Page context not defined`);
    }

    await click(this.driver, pageContext, elementName);
});

async function click(driver: WebDriver, pageContext: PageAreaContext, elementName: string) {
    const element = pageContext.getPageElement(elementName);
    const selector = element?.selector ?? generateDefaultSelector(elementName);

    const override = pageContext as unknown as IClickElement;
    if (override?.click) {
        await override.click(selector, element);
    } else {
        await defaultClick(driver, selector);
    }
}

async function defaultClick(driver: WebDriver, selector: By) {
    const element = await driver.findElement(selector);
    await driver.wait(until.elementIsVisible(element), 1000);
    await element.click();
}
