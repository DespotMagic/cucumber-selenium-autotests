import { By } from 'selenium-webdriver';

export function generateDefaultSelector(elementName: string): By {
    return By.css(`*[data-at=${elementName}]`);
}
