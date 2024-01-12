import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage';
import { ApplyForCoursesPage } from '../pages/applyForCoursesPage';

test('test', async ({ page }) => {

  const mainPage = new MainPage(page);

  mainPage.goto();
  const applyForCoursesPage = mainPage.clickOnApplyForCourses();
  
  await page.getByRole('link', { name: 'Cursussen Aanvragen' }).click();
  await page.frameLocator('iframe').getByRole('form').click();
  await page.frameLocator('iframe').getByLabel('Country').click();
});