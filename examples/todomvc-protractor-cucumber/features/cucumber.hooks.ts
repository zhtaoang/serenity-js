import { protractor } from 'protractor/globals';
import * as serenity from 'serenity-js/lib/serenity-cucumber';

export = function () {

    this.registerListener(serenity.scenarioLifeCycleNotifier());

    serenity.synchronise(this, protractor.browser.driver.controlFlow());
};
