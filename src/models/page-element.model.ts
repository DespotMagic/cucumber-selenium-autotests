import { By } from 'selenium-webdriver';

export interface PageElement {
    name: string;
    selector: By;
    type?: unknown;
}
