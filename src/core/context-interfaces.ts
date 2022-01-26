import { PageElement } from '../models/pages.model';

export interface IClickElement {
    click(element: PageElement): Promise<void>;
}

export interface IPageLoading {
    waitPageLoading(): Promise<void>;
}
