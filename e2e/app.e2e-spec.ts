import { Workshop1Page } from './app.po';

describe('workshop1 App', function() {
  let page: Workshop1Page;

  beforeEach(() => {
    page = new Workshop1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
