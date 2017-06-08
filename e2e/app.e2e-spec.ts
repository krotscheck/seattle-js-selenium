import { SeattleJsSeleniumPage } from './app.po';

describe('seattle-js-selenium App', () => {
  let page: SeattleJsSeleniumPage;

  beforeEach(() => {
    page = new SeattleJsSeleniumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
