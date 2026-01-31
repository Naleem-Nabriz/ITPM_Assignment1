const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 -  english abriviation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Unnoda NIC ID enga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain(' NIC ID');

  expect(value).toContain('நிக்');
  expect(value).toContain('ஈத்'); 
});


test('Neg_Fun_0002 - English job title abbreviation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 60000 });

  const inputBox = page.locator('textarea').first();
  

  await inputBox.type('Avan HR manager ah');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);  

  const value = await inputBox.inputValue();


  expect(value).not.toContain('HR');  
  expect(value).toContain('மேனேஜர்');  
});



test('Neg_Fun_0003 - Currency format altered', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('ticket price Rs.3000');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('RS.3000');

  expect(value).toContain('ரஸ்.');
  expect(value).toContain('௩௦௦௦');
});

test('Neg_Fun_0004 -English technical term', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Laptop WiFi work aagala');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('WiFi');

  expect(value).toContain('விபி');
   
});

test('Neg_Fun_0005 - english abriviation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('engada veeta thidirana Gas mudiji');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('Gas');

  expect(value).toContain('காஸ்');
   
});

test('Neg_Fun_0006 - Number-only input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('1234567890v');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('1234567890v');

  expect(value).toContain('௧௨௩௪௫௬௭௮௯௦வ்'); 
});

test('Neg_Fun_0007 - Brand name sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Teams la meeting link anuppinen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('Teams meeting link');

  expect(value).toContain('தேம்ஸ்');
  expect(value).toContain('மீட்டிங்'); 
  expect(value).toContain('லிங்க்');
});

test('Neg_Fun_0008 - convert date ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naan 2027/05/25 ennudaiya palkalaikalaha kalvi niraivadaiyum');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('2027/05/25');

  expect(value).toContain('௨௦௨௭/௦௫/௨௫');

});

test('Neg_Fun_0009 - Volume unit formatting issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Next month naan office training ku Bangalore poganum nu plan panninen.Travel date 10-03-2026 nu fix panninen and bus 08:00 AM la start aagum.Bus stand ku reach panna 06:00 AM la veetla irundhu kelambinen.Weather report Bangalore ku 22°C to 30°C nu irukum nu sonnaanga.Training venue hotel irundhu 3 km irundhadhu, daily walk panninen.Return journey 12-03-2026 la evening 07:30 PM ku irukum nu plan panninen.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  //expect(value).not.toContain('2001-04-08 3.5kg 2 ');

  //expect(value).toContain('௨௦௦௧-௦௪-௦௮');
  //expect(value).toContain('௩.௫க்க்'); 
  //expect(value).toContain('௨');
});

test('Neg_Fun_0010 - Unit of measurement formatting issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('Enaku 10 kg seeni thaanga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('10 kg');

  expect(value).toContain('௧௦');
  expect(value).toContain('கஃ'); 
});
