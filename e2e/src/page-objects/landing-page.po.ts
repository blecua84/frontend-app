import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitle() {
    return element(by.css('app-root h1'));
  }

  getTitleText() {
    return this.getTitle().getText() as Promise<string>;
  }
}
