import { test , expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage'
import { ApplyForCoursesPage } from '../pages/applyForCoursesPage';
import { TalkToAnAdvisorPage } from '../pages/talkToAnAdvisorPage'; 

var mainPage: MainPage;

test.beforeEach(async({page}) => {
    await page.goto('https://www.clarusway.nl/en');
    mainPage = new MainPage(page, 'en');
})


test('Apply For Courses EN', async({page}) => {
    await mainPage.clickOnApplyForCourses();
    const applyForCoursesPage: ApplyForCoursesPage = new ApplyForCoursesPage(page);
    await expect(applyForCoursesPage.startYourRequestText).toBeVisible();
    await expect(applyForCoursesPage.firstName).toBeVisible();
    await expect(applyForCoursesPage.lastName).toBeVisible();
    await expect(applyForCoursesPage.email).toBeVisible();
    await expect(applyForCoursesPage.phone).toBeVisible();
    await expect(applyForCoursesPage.city).toBeVisible();
    await expect(applyForCoursesPage.Country).toBeVisible();
    await expect(applyForCoursesPage.programCategory).toBeVisible();
})

test('Talk to an Advisor page EN', async({page}) => {
    await expect(page.url()).toBe('https://clarusway.nl/en/');
    await mainPage.clickOnTalkToAnAdvisor();
    const talkToAnAdvisorPage = new TalkToAnAdvisorPage(page);
    await expect(talkToAnAdvisorPage.chooseAppointmentText).toBeVisible();
})

test.afterEach(async({page}) => {
    page.close();
})