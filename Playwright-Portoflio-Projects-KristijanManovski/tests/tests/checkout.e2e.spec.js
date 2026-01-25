// tests/saucedemo.e2e.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('SauceDemo E2E happy path', () => {
  test('user can login, buy a product and complete checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.checkout();

    await checkoutPage.fillUserInfo();
    await checkoutPage.finishCheckout();

    await expect(await checkoutPage.getCompleteHeader()).toHaveText(
      'Thank you for your order!'
    );
  });
});
