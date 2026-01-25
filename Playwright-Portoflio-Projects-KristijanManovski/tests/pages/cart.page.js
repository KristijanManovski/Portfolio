// pages/CartPage.js
export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '[data-test="checkout"]';
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}
