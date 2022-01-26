import { PublicPageContext } from '../pages/page-area-contexts/public-page-conext';
import { PageArea, PageAreaContext, PageAreaContextConstructor, PageAreaContextParams, PageAreaDescriptor } from '../models/pages.model';
import { LoginPageContext } from '../pages/page-area-contexts/login-page-context';

const pages: PageAreaDescriptor[] = [
    {
        pageArea: PageArea.Public,
        pageUrlFormat: '/',
        contextFactory: (params) => createPageAreaContext(PublicPageContext, params),
    },
    {
        pageArea: PageArea.Login,
        pageUrlFormat: '/login',
        contextFactory: (params) => createPageAreaContext(LoginPageContext, params),
    },
];

export function getPageDescriptorByName(name: PageArea | string) {
    return pages.find((item) => item.pageArea === name) ?? null;
}

function createPageAreaContext<T extends PageAreaContextParams = PageAreaContextParams>(
    ctor: PageAreaContextConstructor,
    params?: T,
): PageAreaContext {
    const context = new ctor(params);
    context.init(params);
    return context;
}
