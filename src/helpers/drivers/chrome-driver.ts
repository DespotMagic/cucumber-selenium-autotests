import * as chromedriver from 'chromedriver';
import { Builder, Capabilities } from 'selenium-webdriver';

export async function createChromeDriver() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chromedriverPath = chromedriver.path;

    // driver setup
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', {
        w3c: false,
        args: ['start-maximized', 'disable-extensions'],
    });

    //capabilities.set('path', chromedriverPath);
    const driver = await new Builder().withCapabilities(capabilities).build();

    await driver.manage().window().maximize();

    return driver;
}
