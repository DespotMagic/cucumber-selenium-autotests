import { PageAreaContext, PageAreaContextParams } from '../../models/pages.model';
import { PageElement } from '../../models/page-element.model';
import { BasePageContext } from '../base-page-context';
import { By } from 'selenium-webdriver';

export class PublicPageContext extends BasePageContext implements PageAreaContext {
    areaSelector = By.css('body');
    elements: PageElement[] = [
        {
            name: 'LogIn',
            selector: By.css('.dvloginlnk, .myLogin'),
        },
    ];

    constructor() {
        super();
    }

    init(params: PageAreaContextParams): void {
        super.init(params);
    }
}
