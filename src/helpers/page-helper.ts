import { PageAreaDescriptor } from '../models/pages.model';
import config from 'config';

export function getUrlFromPageDescriptor(page: PageAreaDescriptor): string {
    if (page.isFullUrl) {
        return page.pageUrlFormat;
    } else {
        const domain = config.get('applicationDomain');
        return domain + page.pageUrlFormat;
    }
}
