import { BasePageAreaContext, PageAreaContextParams } from '../models/pages.model';
import { PageElement } from '../models/page-element.model';
import { By, WebDriver } from 'selenium-webdriver';

export class BasePageContext implements BasePageAreaContext {
    areaSelector = By.css('body');
    elements: PageElement[] = [];
    protected driver: WebDriver;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init(params: PageAreaContextParams): void {
        //init
        this.driver = params.getDriver();
    }

    getPageElement(name: string): PageElement {
        return this.elements.find((el) => el.name === name);
    }
}
