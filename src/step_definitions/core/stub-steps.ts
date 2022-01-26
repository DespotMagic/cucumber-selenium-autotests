/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

Given('nothing', function () {});

When('nothing happand', function () {});

Then('all ok', function () {
    expect(true).toBe(true);
});
