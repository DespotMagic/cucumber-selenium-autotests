import { sleep } from '../../helpers/helpers';
import { CustomWorld } from '../../world';
import { Given, Then, When } from '@cucumber/cucumber';
import expect from 'expect';
import { By, Key, until } from 'selenium-webdriver';
import { IKey } from 'selenium-webdriver/lib/input';

Given('test1 Open url {string}', async function (this: CustomWorld, url: string) {
    await this.driver.get(url);
});

When('test1 enter text {string}', async function (this: CustomWorld, searchTerm: string) {
    const element = await this.driver.findElement(By.name('q'));
    await element.sendKeys(searchTerm);
});

When('test1 enter text {string} and submit form', async function (this: CustomWorld, searchTerm: string) {
    const inputElement = await this.driver.findElement(By.name('q'));
    await inputElement.sendKeys(searchTerm, Key.RETURN);
    await inputElement.submit();
});

When('test1 send special key {string}', async function (this: CustomWorld, keyCode: keyof IKey) {
    const key: string = <string>Key[keyCode];
    sleep(1000);
    await this.driver.switchTo().activeElement().sendKeys(key);
});

When('test1 click search button', async function (this: CustomWorld) {
    const element = await this.driver.findElement(By.name('btnK'));
    await this.driver.wait(until.elementIsVisible(element), 1000);
    await element.click();
});

Then('test1 the page title should start with {string}', { timeout: 60 * 1000 }, async function (this: CustomWorld, searchTerm: string) {
    const title = await this.driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
    expect(isTitleStartWithCheese).toBe(true);
});
