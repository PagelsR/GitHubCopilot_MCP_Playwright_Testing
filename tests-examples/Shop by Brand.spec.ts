import { test, expect } from '@playwright/test';

test('Shop by Brand - Simple Scenario', async ({ page }) => {
  // 1. Go to the site
  await page.goto('https://app-6swivue3g4dqc-qa.azurewebsites.net/');

  // 2. Select ".Net" from the "Shop by Brand" dropdown
  await page.selectOption('#CatalogModel_BrandFilterApplied', { label: '.NET' });

  // 3. Click "Submit"
  await page.click('input.esh-catalog-send');

  // 4. Click "[ ADD TO BASKET ]" for ".NET Bot Black Sweatshirt"
  const sweatshirtAddBtn = page.locator(
    'div.esh-catalog-item:has(div.esh-catalog-name:has-text(".NET Bot Black Sweatshirt")) input.esh-catalog-button'
  );
  await sweatshirtAddBtn.click();

  // 5. Change quantity to 99 in basket
  const qtyInput = page.locator(
    'article.esh-basket-items:has(section.esh-basket-item:has-text(".NET Bot Black Sweatshirt")) input.esh-basket-input'
  );
  await qtyInput.fill('99');

  // 6. Click "[ CONTINUE SHOPPING ]"
  await page.click('a.btn.esh-basket-checkout.text-white');

  // Assert we are back on the catalog page
  await expect(page).toHaveURL(/.*\/$/);
});
