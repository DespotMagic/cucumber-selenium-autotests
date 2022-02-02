import { FeatureContext } from './feature-context';
import { createChromeDriver } from '../helpers/drivers/chrome-driver';
import { FeatureTag } from '../models/tags.model';
import { containTag, featureContainTag, sleep } from '../helpers/helpers';
import { PageAreaContextParams } from '../models/pages.model';
import { PageContextManager } from '../core/page-context-manager';
import { PageContextFactory } from '../core/page-context-factory';
import { After, AfterAll, Before, ITestCaseHookParameter, IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';
import config from 'config';

type CommonScenarioPayloadContext = { [key: string]: string };

const featureContext = new FeatureContext();
let globalDriver: WebDriver;

/** World is an isolated context for each scenario, exposed to the hooks and steps as this, enabling you to set and recall some state across the lifecycle of your scenario */
export class CustomWorld<TScenarioContext = CommonScenarioPayloadContext> extends World {
    readonly scenarioContext: TScenarioContext;
    get featureContext(): FeatureContext {
        return featureContext;
    }

    get driver(): WebDriver {
        return globalDriver;
    }

    readonly pageContextManager: PageContextManager;
    readonly pageContextFactory: PageContextFactory;

    debug = false;
    tags: string[];

    constructor(options: IWorldOptions) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options);

        this.scenarioContext = <TScenarioContext>{};
        this.pageContextManager = new PageContextManager();

        const params: PageAreaContextParams = {
            getDriver: () => this.driver,
        };
        this.pageContextFactory = new PageContextFactory(params);
    }
}

Before<CustomWorld>(async function (this, arg) {
    const isNewFeature = featureContext.isNewFeature(arg);

    if (isNewFeature) {
        featureContext.init(arg);
    }

    this.tags = arg.pickle.tags.map((tag) => tag.name);

    await initDriver(arg, isNewFeature);
});

After<CustomWorld>(async function (this, arg) {
    await closeOrCleanBrowser(arg);
});

AfterAll(async function () {
    await closeBrowser();
});

async function initDriver(arg: ITestCaseHookParameter, isNewFeature: boolean) {
    if (isNewFeature && !!globalDriver) {
        //close Browser befor new feature
        await closeBrowser();
    }

    if (!globalDriver && !containTag(arg, FeatureTag.dontCreateBrowser)) {
        const isHeadless = config.get<string>('headless') === 'true';
        globalDriver = await createChromeDriver(isHeadless);
    }
}

async function closeOrCleanBrowser(arg: ITestCaseHookParameter) {
    if (isRequiredToRestartTheDriverInEveryScenario(arg)) {
        await closeBrowser();
    } else {
        //clenup browser ?
        //await globalDriver.manage().deleteAllCookies();
        await sleep(500);
    }
}

async function closeBrowser() {
    if (globalDriver) {
        await globalDriver.quit();
        await sleep(1000);
        globalDriver = null;
    }
}

function isRequiredToRestartTheDriverInEveryScenario(arg: ITestCaseHookParameter) {
    return featureContainTag(arg, FeatureTag.restartBrowserEveryScenario);
}

setWorldConstructor(CustomWorld);
