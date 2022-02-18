import { PageAreaContext } from '../models/pages.model';

export class PageContextManager {
    private currentContexts: PageAreaContext[] = [];

    pushContext(context: PageAreaContext) {
        this.currentContexts.push(context);
    }

    popContext() {
        return this.currentContexts.pop();
    }

    getLastContext() {
        return this.currentContexts.length > 0 ? this.currentContexts[this.currentContexts.length - 1] : null;
    }
}
