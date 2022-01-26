import { CustomWorld } from '../world';
import { When } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';

When('click search button', async function (this: CustomWorld) {
    const element = await this.driver.findElement(By.name('btnK'));
    await this.driver.wait(until.elementIsVisible(element), 1000);
    await element.click();
});
