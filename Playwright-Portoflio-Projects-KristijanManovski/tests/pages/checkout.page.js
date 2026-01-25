// pages/CheckoutPage.js
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueBtn = '[data-test="continue"]';
    this.finishBtn = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }

  async fillUserInfo() {
    await this.page.fill(this.firstNameInput, 'John');
    await this.page.fill(this.lastNameInput, 'Doe');
    await this.page.fill(this.postalCodeInput, '1000');
    await this.page.click(this.continueBtn);
  }

  async finishCheckout() {
    await this.page.click(this.finishBtn);
  }

  async getCompleteHeader() {
    return this.page.locator(this.completeHeader);
  }
}

