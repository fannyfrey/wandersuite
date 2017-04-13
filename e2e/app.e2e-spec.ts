import { WandersuitePage } from './app.po';

describe('wandersuite App', () => {
  let page: WandersuitePage;

  beforeEach(() => {
    page = new WandersuitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
