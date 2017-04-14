import { ViaporiPage } from './app.po';

describe('viapori App', () => {
  let page: ViaporiPage;

  beforeEach(() => {
    page = new ViaporiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
