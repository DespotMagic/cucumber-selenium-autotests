import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Stream } from 'stream';

//World is an isolated context for each scenario, exposed to the hooks and steps as this, enabling you to set and recall some state across the lifecycle of your scenario.

//export type MediaType = 'text/plain' | 'image/png' | 'application/json';
// export type AttachBuffer = (data: Buffer, mediaType: MediaType) => void | Promise<void>;
// export type AttachStream = (data: Stream, mediaType: MediaType) => void | Promise<void>;
// export type AttachText = (data: string) => void | Promise<void>;
// export type AttachStringifiedJson = (
//     data: string,
//     mediaType: 'application/json',
// ) => void | Promise<void>;
// export type AttachBase64EncodedPng = (data: string, mediaType: 'image/png') => void | Promise<void>;
// export type AttachFn = AttachBuffer &
//     AttachStream &
//     AttachBase64EncodedPng &
//     AttachStringifiedJson &
//     AttachText;

// export interface CucumberWorldConstructorParams {
//     attach: AttachFn;
//     parameters: { [key: string]: string };
// }

export class CustomWorld extends World {

    // driver = new seleniumWebdriver.Builder()
    //     .forBrowser('firefox')
    //     .build()

    //custom
    public foo = false;
    public debug = false;

    //public helper: MyHelper = new MyHelper();
    //public scenarioContext: ScenarioContext = new ScenarioContext();

    /**
     *
     */
    constructor(options: IWorldOptions) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options)
    }

    // Returns a promise that resolves to the element
    async waitForElement(locator: string) {
        //const condition = seleniumWebdriver.until.elementLocated(locator)
        //return await this.driver.wait(condition)
    }

}

setWorldConstructor(CustomWorld);