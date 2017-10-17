import { ProductCartPage } from './app.po';

describe('product-cart App', () => {
  let page: ProductCartPage;

  beforeEach(() => {
    page = new ProductCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
