import { test, expect } from '@playwright/test';

test('Shop by Brand with Login', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://app-6swivue3g4dqc-qa.azurewebsites.net/');

  // Login
  await page.click('text=Login');
  await page.fill('input[name="Input.Email"]', 'demouser@microsoft.com');
  await page.fill('input[name="Input.Password"]', 'Pass@word1');
  await page.click('button[type="submit"]:has-text("Log in")');

  // Shop by Brand: select .NET and submit
  await page.selectOption('#CatalogModel_BrandFilterApplied', { label: '.NET' });
  await page.click('input.esh-catalog-send');

  // Add .NET Bot Black Sweatshirt to basket
  await page.locator('.esh-catalog-item:has-text(".NET Bot Black Sweatshirt") .esh-catalog-button').click();

  // Update quantity to 100
  await page.fill('input[name="Items[0].Quantity"]', '100');
  await page.click('button[formaction="/Basket/Update"]');

  // Checkout
  await page.click('a[href="/Basket/Checkout"]');
  await page.click('input[type="submit"][value="[ Pay Now ]"]');

  // Log out
  await page.click('a.esh-identity-item:has-text("Log Out")');

  // Verify we are logged out
  await expect(page.locator('text=Login')).toBeVisible();
});
