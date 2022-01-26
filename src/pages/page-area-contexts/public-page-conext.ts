import { PageAreaContext, PageAreaContextParams, PageElement } from '../../models/pages.model';
import { By } from 'selenium-webdriver';

export class PublicPageContext implements PageAreaContext {
    areaSelector = By.css('body');
    elements: PageElement[] = [
        {
            name: 'LogIn',
            selector: By.css('.dvloginlnk, .myLogin'),
        },
    ];

    constructor() {
        //constructor
    }

    init(params: PageAreaContextParams): void {
        //init
    }

    getPageElement(name: string): PageElement {
        return this.elements.find((item) => item.name === name);
    }
}
