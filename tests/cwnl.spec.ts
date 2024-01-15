import { test , expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage'
import { ApplyForCoursesPage } from '../pages/applyForCoursesPage';


var mainPage: MainPage;

test.beforeEach(async({page}) => {
    await page.goto('https://www.clarusway.nl');
    mainPage = new MainPage(page);
})


test('Apply For Courses Page', async({page}) => {
    await mainPage.clickOnApplyForCourses();
    var applyForCoursesPage: ApplyForCoursesPage = new ApplyForCoursesPage(page);
    await expect(applyForCoursesPage.startYourRequestText).toBeVisible();
    await expect(applyForCoursesPage.firstName).toBeVisible();
    await expect(applyForCoursesPage.lastName).toBeVisible();
    await expect(applyForCoursesPage.email).toBeVisible();
    await expect(applyForCoursesPage.phone).toBeVisible();
    await expect(applyForCoursesPage.city).toBeVisible();
    await expect(applyForCoursesPage.Country).toBeVisible();
    await expect(applyForCoursesPage.programCategory).toBeVisible();
})

// test('Talk to an Advisor page', async({page}) => {
// })

test.afterEach(async({page}) => {
    page.close();
})