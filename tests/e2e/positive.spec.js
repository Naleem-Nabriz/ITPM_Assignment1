const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Greeting conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.fill('nee epdi iruka?');
  await page.waitForTimeout(1000);
  await expect(page.locator('body')).toContainText('நீ எப்படி இருக்க?');
});

