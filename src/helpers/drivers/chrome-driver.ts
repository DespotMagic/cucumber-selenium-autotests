import * as chromedriver from 'chromedriver';
import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
//import { FileDetector } from 'selenium-webdriver/remote';

export async function createChromeDriver(headless = false) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chromedriverPath = chromedriver.path;
    const width = 1920;
    const height = 1080;

    const options = new Options();
    options.setAcceptInsecureCerts(true);

    if (headless) {
        options.headless().windowSize({ width, height });
    }
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    //driver.setFileDetector(new FileDetector());

    if (!headless) {
        await driver.manage().window().maximize();
    }
    return driver;
}
