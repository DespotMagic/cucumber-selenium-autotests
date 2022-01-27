import { CustomWorld } from '../../world';
import { When } from '@cucumber/cucumber';

When('Wait {string}', async function (this: CustomWorld, timeString: string) {
    const regexpTime = /(\d+)(\w+)/;
    const match = timeString.match(regexpTime);

    let delay: number = +match[1];
    switch (match[2]) {
        case 's':
            delay = delay * 1000;
            break;
        case 'ms':
            break;
    }

    await this.driver.sleep(delay);
});
