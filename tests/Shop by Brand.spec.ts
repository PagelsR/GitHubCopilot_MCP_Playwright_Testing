import { test, expect } from '@playwright/test';

test('Shop by Brand', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://app-6swivue3g4dqc-qa.azurewebsites.net/');

  // Select .NET from Shop by Brand dropdown
  await page.selectOption('#CatalogModel_BrandFilterApplied', { label: '.NET' });
  await page.click('input.esh-catalog-send');

  // Add .NET Bot Black Sweatshirt to basket
  await page.locator('.esh-catalog-item:has-text(".NET Bot Black Sweatshirt") .esh-catalog-button').click();

  // Update quantity to 99
  await page.fill('input[name="Items[0].Quantity"]', '99');

  // Click [ CONTINUE SHOPPING ]
  await page.click('a.btn.esh-basket-checkout.text-white:has-text("[ Continue Shopping ]")');

  // Verify we are back on the catalog page
  await expect(page).toHaveURL(/\/$/);
});
