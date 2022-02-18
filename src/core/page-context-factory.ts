import { getPageDescriptorByName } from './pages';
import { PageArea, PageAreaContextParams, PageAreaDescriptor } from '../models/pages.model';
import { BasePageContext } from '../pages/base-page-context';
import { createPageAreaContext } from '../helpers/page-context.helper';

export class PageContextFactory {
    private params: PageAreaContextParams;

    constructor(params: PageAreaContextParams) {
        this.params = params;
    }

    createPageContextInstance(descriptor: PageAreaDescriptor) {
        return descriptor?.contextFactory?.(this.params) ?? this.createDefaultContext();
    }

    private createDefaultContext() {
        return createPageAreaContext(BasePageContext, this.params);
    }

    createPageContextInstanceByName(pageName: PageArea | string) {
        const pageDescriptor = getPageDescriptorByName(pageName);
        return pageDescriptor ? this.createPageContextInstance(pageDescriptor) : null;
    }
}
