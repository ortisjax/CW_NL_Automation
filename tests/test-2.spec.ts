import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://clarusway.nl/');
  await page.getByRole('link', { name: 'Cursussen Aanvragen' }).click();
  await page.frameLocator('iframe').getByLabel('First').click();
  await page.frameLocator('iframe').getByLabel('First').fill('Name');
  await page.frameLocator('iframe').getByLabel('Last').click();
  await page.frameLocator('iframe').getByLabel('Last').fill('LastName');
  await page.frameLocator('iframe').getByLabel('Email \n\n*').click();
  await page.frameLocator('iframe').getByLabel('Email \n\n*').fill('mail@mail.com');
  await page.frameLocator('iframe').getByLabel('Phone \n\n*').click();
  await page.frameLocator('iframe').getByLabel('Phone \n\n*').fill('123123123');
  await page.frameLocator('iframe').getByLabel('Country').click();
  await page.frameLocator('iframe').getByLabel('Country').selectOption('Sweeden');
  await page.frameLocator('iframe').getByLabel('State-City').click();
  await page.frameLocator('iframe').getByLabel('State-City').fill('City');
  await page.frameLocator('iframe').getByLabel('Choose Program Category \n\n*').selectOption('Full Stack Development');
});