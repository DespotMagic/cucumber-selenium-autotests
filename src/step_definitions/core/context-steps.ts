import { CustomWorld } from '../../world';
import { When } from '@cucumber/cucumber';

When('Switch context to {string}', function (this: CustomWorld, pageAreaName: string) {
    const pageContext = this.pageContextFactory.createPageContextInstanceByName(pageAreaName);
    if (!pageContext) {
        throw new Error(`PageContext "${pageAreaName}" not found`);
    }
    this.pageContextManager.pushContext(pageContext);
});

When('Switch context back', function (this: CustomWorld) {
    this.pageContextManager.popContext();
});
