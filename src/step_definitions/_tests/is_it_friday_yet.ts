import { CustomWorld } from '../../world';
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

function isItFriday(today: string) {
    if (today === 'Friday') {
        return 'TGIF'; //Thank God it's Friday
    } else {
        return 'Nope';
    }
}

Given('Today is {string}', function (this: CustomWorld, day: string) {
    this.scenarioContext.today = day;
});

When('I ask whether it is Friday yet', function (this: CustomWorld) {
    this.scenarioContext.actualAnswer = isItFriday(this.scenarioContext.today);
});

Then('I should be told {string}', function (this: CustomWorld, expectedAnswer: string) {
    expect(this.scenarioContext.actualAnswer).toBe(expectedAnswer);
});
