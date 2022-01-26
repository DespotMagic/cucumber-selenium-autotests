import { getPageDescriptorByName } from './pages';
import { PageArea, PageAreaContextParams, PageAreaDescriptor } from '../models/pages.model';
import { DefaultPageContext } from '../pages/default-page-context';

export class PageContextFactory {
    private params: PageAreaContextParams;

    constructor(params: PageAreaContextParams) {
        this.params = params;
    }

    createPageContextInstance(descriptor: PageAreaDescriptor) {
        return descriptor?.contextFactory?.(this.params) ?? this.createDefaultContext();
    }

    private createDefaultContext() {
        return new DefaultPageContext();
    }

    createPageContextInstanceByName(pageName: PageArea | string) {
        const pageDescriptor = getPageDescriptorByName(pageName);
        return this.createPageContextInstance(pageDescriptor);
    }
}
