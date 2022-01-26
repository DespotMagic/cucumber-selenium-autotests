import { By, WebDriver } from 'selenium-webdriver';

export const domain = 'https://www.google.com/';

export enum PageArea {
    Public = 'Public',
    Login = 'Login',
    PropertiesMy = 'PropertiesMy',
    PropertiesCompany = 'PropertiesCompany',
    PropertyCreate = 'PropertyCreate',
}

export class PageAreaDescriptor {
    pageArea: PageArea | string;
    contextFactory?: ContextFactory | null;

    pageUrlFormat?: string;
    isFullUrl?: boolean;
}

type ContextFactory<T extends PageAreaContextParams = PageAreaContextParams> = (params: T) => PageAreaContext;

export interface PageAreaContext<T extends PageAreaContextParams = PageAreaContextParams> {
    readonly areaSelector: By;
    readonly elements: PageElement[];

    init(params: T): void;
    //getPageElement(name: string): PageElement;
}

export interface PageAreaContextParams {
    getDriver: () => WebDriver;
}

export interface PageAreaContextConstructor<T extends PageAreaContextParams = PageAreaContextParams> {
    new (params?: T): PageAreaContext;
}

export interface PageElement {
    name: string;
    selector: By;
    type?: unknown;
}
