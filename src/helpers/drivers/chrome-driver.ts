import * as chromedriver from 'chromedriver';
import { Builder } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export async function createChromeDriver(headless = false) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chromedriverPath = chromedriver.path;
    const width = 1920;
    const height = 1080;

    const options = new chrome.Options();
    if (headless) {
        options.headless().windowSize({ width, height });
    }
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    if (!headless) {
        await driver.manage().window().maximize();
    }

    return driver;
}
