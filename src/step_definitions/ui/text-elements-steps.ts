import { CustomWorld } from '../../world';
import { PageAreaContext } from '../../models/pages.model';
import { generateDefaultSelector } from '../../helpers/selector-helpers';
import { When } from '@cucumber/cucumber';

When('Enter text {string} in the field {string}', async function (this: CustomWorld, text: string, elementName: string) {
    const pageContext = this.pageContextManager.getLastContext();
    if (!pageContext) {
        throw new Error(`Page context not defined`);
    }
    await enterTextToField(this, pageContext, text, elementName);
});

async function enterTextToField(world: CustomWorld, pageContext: PageAreaContext, text: string, elementName: string) {
    const pageElement = pageContext.getPageElement(elementName);
    const selector = pageElement?.selector ?? generateDefaultSelector(elementName);
    const textElement = await world.driver.findElement(selector);
    textElement.sendKeys(text);
}
