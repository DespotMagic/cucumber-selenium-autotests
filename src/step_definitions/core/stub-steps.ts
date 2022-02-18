/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

Given('nothing', function () {});

When('nothing happened', function () {});

Then('all ok', function () {
    expect(true).toBe(true);
});

Given('error', function () {
    throw new Error('stub error');
});

When('error happened', function () {
    throw new Error('stub error');
});

Then('all error', function () {
    throw new Error('stub all error');
});
