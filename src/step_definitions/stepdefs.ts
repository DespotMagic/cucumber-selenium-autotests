import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

function isItFriday(today: string) {
    if (today === 'Friday') {
        return 'TGIF'; //Thank God it's Friday
    } else {
        return 'Nope';
    }
}

Given('today is {string}', function (day) {
    this.today = day;
});

When("I ask whether it's Friday yet", function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer: string) {
    expect(this.actualAnswer).toBe(expectedAnswer);
});
