import { createChromeDriver } from '../helpers/drivers/chrome-driver';
import { Tags } from '../shared/tags.model';
import { containTag } from '../helpers/helpers';
import { After, Before, IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';

type CommonScenarioContext = { [key: string]: string };

/** World is an isolated context for each scenario, exposed to the hooks and steps as this, enabling you to set and recall some state across the lifecycle of your scenario */
export class CustomWorld<TScenarioContext = CommonScenarioContext> extends World {
    driver: WebDriver;
    scenarioContext: TScenarioContext = <TScenarioContext>{};

    debug = false;
    tags: string[];

    constructor(options: IWorldOptions) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options);
        this.scenarioContext = <TScenarioContext>{};
    }
}

Before<CustomWorld>(async function (this, arg) {
    if (!containTag(arg, Tags.dontCreateBrowser)) {
        if (!this.driver) {
            this.driver = await createChromeDriver();
        }
        //OR clear Cookies And Storages;
    }
});

After<CustomWorld>(async function (this) {
    if (this.driver) {
        await this.driver.close();
        await this.driver.quit();
    }
});

setWorldConstructor(CustomWorld);
