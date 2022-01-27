import { PageElement } from './page-element.model';
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

export interface BasePageAreaContext<T extends PageAreaContextParams = PageAreaContextParams> {
    readonly areaSelector: By;
    readonly elements: PageElement[];
    getPageElement(name: string): PageElement;
    init(params: T): void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PageAreaContext<T extends PageAreaContextParams = PageAreaContextParams> extends BasePageAreaContext<T> {
    //todo...
}

export interface PageAreaContextParams {
    getDriver: () => WebDriver;
}

export interface PageAreaContextConstructor<T extends PageAreaContextParams = PageAreaContextParams> {
    // eslint-disable-next-line prettier/prettier
    new(params?: T): PageAreaContext;
}
