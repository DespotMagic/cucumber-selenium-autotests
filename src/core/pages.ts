import { PublicPageContext } from '../pages/page-area-contexts/public-page-conext';
import { PageArea, PageAreaDescriptor } from '../models/pages.model';
import { LoginPageContext } from '../pages/page-area-contexts/login-page-context';
import { createPageAreaContext } from '../helpers/page-context.helper';
import { BasePageContext } from '../pages/base-page-context';

export function getPageDescriptorByName(name: PageArea | string) {
    return pages.find((item) => item.pageArea === name) ?? null;
}

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
    {
        pageArea: PageArea.PullRequests,
        pageUrlFormat: '/pulls',
        contextFactory: (params) => createPageAreaContext(BasePageContext, params),
    },
    {
        pageArea: PageArea.Issues,
        pageUrlFormat: '/issues',
        contextFactory: (params) => createPageAreaContext(BasePageContext, params),
    },
    {
        pageArea: PageArea.Profile,
        pageUrlFormat: '/{accountName}',
        contextFactory: (params) => createPageAreaContext(BasePageContext, params),
    },
];
