import { PageAreaContext, PageAreaContextParams, PageElement } from '../../models/pages.model';
import { IPageLoading } from '../../core/context-interfaces';
import { By, until, WebDriver } from 'selenium-webdriver';

export class LoginPageContext implements PageAreaContext, IPageLoading {
    areaSelector = By.css('body');
    elements: PageElement[] = [
        {
            name: 'email',
            selector: By.name('email'),
        },
        {
            name: 'password',
            selector: By.name('password'),
        },
    ];

    private driver: WebDriver;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init(params: PageAreaContextParams): void {
        //init
        this.driver = params.getDriver();
    }

    async waitPageLoading(): Promise<void> {
        const emailSelector = By.name('email');
        await this.driver.sleep(1000);
        const element = await this.driver.wait(until.elementLocated(emailSelector), 10000);
        await this.driver.wait(until.elementIsVisible(element), 3000);
        console.log('custom waitPageLoading 2');
    }
}
