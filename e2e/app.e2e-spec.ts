import { MynewngappPage } from './app.po';

describe('mynewngapp App', () => {
  let page: MynewngappPage;

  beforeEach(() => {
    page = new MynewngappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
