import { PageAreaContext, PageAreaContextParams } from '../../models/pages.model';
import { PageElement } from '../../models/page-element.model';
import { IPageLoading } from '../../core/context-interfaces';
import { BasePageContext } from '../base-page-context';
import { By, until } from 'selenium-webdriver';

export class LoginPageContext extends BasePageContext implements PageAreaContext, IPageLoading {
    areaSelector = By.css('body');
    elements: PageElement[] = [
        {
            name: 'Username',
            selector: By.id('login_field'),
            type: 'input',
        },
        {
            name: 'Password',
            selector: By.id('password'),
            type: 'input',
        },
        {
            name: 'Sign in',
            selector: By.css('input[type=submit]'),
            type: 'button',
        },
    ];

    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init(params: PageAreaContextParams): void {
        super.init(params);
    }

    async waitPageLoading(): Promise<void> {
        const emailSelector = By.id('login_field');
        await this.driver.sleep(1000);
        const element = await this.driver.wait(until.elementLocated(emailSelector), 10000);
        await this.driver.wait(until.elementIsVisible(element), 3000);
    }
}
