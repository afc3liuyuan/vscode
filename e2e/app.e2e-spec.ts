import { NgSystemPage } from './app.po';

describe('ng-system App', () => {
  let page: NgSystemPage;

  beforeEach(() => {
    page = new NgSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
