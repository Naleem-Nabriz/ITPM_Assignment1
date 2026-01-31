const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - greeting word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('hi, how is everything?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  // Assert the transliteration result (which is how the system outputs it)
  expect(value).toContain('ஹாய், ஹொவ் ஐஸ் எவேர்ய்திங்?');
});
