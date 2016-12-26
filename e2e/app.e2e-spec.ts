import { TrackingBooksFrontendPage } from './app.po';

describe('tracking-books-frontend App', function() {
  let page: TrackingBooksFrontendPage;

  beforeEach(() => {
    page = new TrackingBooksFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
