export const domain = 'https://www.google.com/';

export enum PageArea {
    Home,
    SearchResult,
}

export const PagesUrl = {
    [PageArea.Home]: '/',
    [PageArea.SearchResult]: '/search',
};

export class PageDescriptor {
    pageArea: PageArea;
    context: string;
}

export interface PageAreaManager<T = PageAreaManagerParams> {
    new (params: T): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PageAreaManagerParams {}
