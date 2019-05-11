import { Given, Before, When, Then, After } from 'cucumber';
import { browser, element, by, ExpectedConditions } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { AppPage } from '../page-objects/landing-page.po';
const expect = chai.use(chaiAsPromised).expect;

let appPage: AppPage = new AppPage();

Before(() => {
  appPage = new AppPage();
});

Given('A user who opens Landing page', function () {
  return browser.get('/');
});

When('Landing page loads', () => {
  return browser.wait(ExpectedConditions.visibilityOf(appPage.getTitle()), 5000);
});

Then('title {string} is diplayed', function (title) {
  return appPage.getTitleText()
    .then(text => {
      expect(text).to.have.string(title)
    })
});

After(async function (scenario) {
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});