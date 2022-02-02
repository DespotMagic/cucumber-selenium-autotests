import { PageAreaContext, PageAreaContextConstructor, PageAreaContextParams } from '../models/pages.model';

export function createPageAreaContext<T extends PageAreaContextParams = PageAreaContextParams>(
    ctor: PageAreaContextConstructor,
    params?: T,
): PageAreaContext {
    const context = new ctor(params);
    context.init(params);
    return context;
}
