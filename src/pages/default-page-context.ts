import { PageAreaContext, PageAreaContextParams, PageElement } from '../models/pages.model';
import { By } from 'selenium-webdriver';

export class DefaultPageContext implements PageAreaContext {
    areaSelector = By.css('body');
    elements: PageElement[] = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init(params: PageAreaContextParams): void {
        //init
    }
}
