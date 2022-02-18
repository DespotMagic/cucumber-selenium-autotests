import { PageElement } from '../models/page-element.model';
import { By } from 'selenium-webdriver';

export interface IClickElement {
    click(selector: By, element?: PageElement): Promise<void>;
}

export interface IPageLoading {
    waitPageLoading(): Promise<void>;
}
