const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert time-based routine', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('naan kaalaila  nerathutan ezhundhiruven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan kaalaila  nerathutan ezhundhiruven');
});


test('Pos_Fun_0002 - convert a short sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('sapitiya?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('sapitiya?');
});


test('Pos_Fun_0003 - Convert polite instruction', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('door close pannunga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('door close pannunga');
});


test('Pos_Fun_0004 - Convert past activity sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('naan innikku velai senjen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan innikku velai senjen');
});


test('Pos_Fun_0005 - Convert conditional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('nearam irundha message anuppu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('nearam irundha message anuppu');
});


test('Pos_Fun_0006 - convert a complex sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('romba kashtama iruku');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('romba kashtama iruku');
});


test('Pos_Fun_0007 - Convert a compound sentences', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('enakku thalai vali kaaranamaaha naan kallurikku sellavillai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enakku thalai vali kaaranamaaha naan kallurikku sellavillai');
});


test('Pos_Fun_0008 -  respectful pronoun sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('avanga phone edukala');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('avanga phone edukala');
});


test('Pos_Fun_0009 - polite request sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('konjam wait pannunga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('konjam wait pannunga');
});


test('Pos_Fun_0010 -  daily language word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('naan naalaikku galle poven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan naalaikku galle poven');
});

test('Pos_Fun_0011 - command with urgency', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('seekiram kelambu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('seekiram kelambu');
});

test('Pos_Fun_0012 -  multiple space word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('Naan saapida poran');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('Naan saapida poran');
});

test('Pos_Fun_0013 - multi line word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('enakku velai irukku naan poran');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enakku velai irukku naan poran');
});

test('Pos_Fun_0014 - encouragement sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('nee try pannu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('nee try pannu');
});

test('Pos_Fun_0015 -  reason-based sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('mazhai peithathanaal velai pogala');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('mazhai peithathanaal velai pogala');
});

test('Pos_Fun_0016 - short confirmation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('sari paakalaam');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('sari paakalaam');
});

test('Pos_Fun_0017 - descriptive emotional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('indha project mudiyala du romba tension aa irundhen aana ippo konjam relief iruku');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('indha project mudiyala du romba tension aa irundhen aana ippo konjam relief iruku');
});

test('Pos_Fun_0018 -  negative statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('enakku theriyala');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enakku theriyala');
});

test('Pos_Fun_0019 -  future intention', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('naalaiku veetuku poren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naalaiku veetuku poren');
});

test('Pos_Fun_0020 - word without space', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('sapdavanthiya?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('sapdavanthiya?');
});

test('Pos_Fun_0021 -  emotional complaint', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('romba bore adikuthu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('romba bore adikuthu');
});

test('Pos_Fun_0022 - word with name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('naan nalaikku examku padikka poren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan nalaikku examku padikka poren');
});

test('Pos_Fun_0023 -  Greeting conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('nee nalla irukiya?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('nee nalla irukiya?');
});

test('Pos_Fun_0024 - English+ thanglish Negative present tense', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('nee enna sonnalum naan yenthe website la vaara thariyathe link ethaum click panna maattan eanda ennakku spam thotarpana arivu irukku ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('nee enna sonnalum naan yenthe website la vaara thariyathe link ethaum click panna maattan eanda ennakku spam thotarpana arivu irukku ');
});



















/*test('Pos_Fun_0001 - Greeting conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('thayavu seidhu indha file anuppunga.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(4000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('தயவு செய்து இந்த file அனுப்புங்க.');
});


test('Neg_Fun_0001 - Random characters input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.type('@@@###$$$');
  await page.keyboard.press('Space');
  await page.waitForTimeout(4000);

  const value = await inputBox.inputValue();

  // Negative behavior: no meaningful conversion
  expect(value).toContain('@@@');
});

test('Pos_UI_0001 - Real-time update on space key', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();

  await inputBox.type('nee');
  let value1 = await inputBox.inputValue();
  
  await page.keyboard.press('Space');
  await page.waitForTimeout(4000);
  let value2 = await inputBox.inputValue();

  expect(value1).not.toEqual(value2);
});

test('Pos_Fun_0002 - Simple daily sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan veedu pogiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(4000);

  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan veedu pogiren');
});
test('Neg_Fun_000X - wrong word produced', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();

  await inputBox.type('Enaku 2 kg arisu thaanga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  // Negative validation: system produces wrong Tamil word
  expect(value).toContain('அரசு');     // wrong word appears
  expect(value).not.toContain('அரிசி'); // correct word missing
});
*/