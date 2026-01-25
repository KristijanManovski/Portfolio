// pages/InventoryPage.js
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addBackpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartLink = '.shopping_cart_link';
  }

  async addBackpackToCart() {
    await this.page.click(this.addBackpackBtn);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
