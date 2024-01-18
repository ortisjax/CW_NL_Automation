import { test , expect } from "@playwright/test";
import { MainPage } from '../pages/mainPage'
import { ApplyForCoursesPage } from '../pages/applyForCoursesPage';
import { TalkToAnAdvisorPage } from '../pages/talkToAnAdvisorPage'; 

var mainPage: MainPage;

test.beforeEach(async({page}) => {
    await page.goto('https://www.clarusway.nl/');
    mainPage = new MainPage(page, 'nl');
    await page.getByRole('link', { name: 'Nederlands' }).click();
})


test('Apply For Courses NL', async({page}) => {
    await expect(page.url()).toBe('https://clarusway.nl/');
    await mainPage.clickOnApplyForCourses();
    const applyForCoursesPage: ApplyForCoursesPage = new ApplyForCoursesPage(page, 'nl');
    await expect(applyForCoursesPage.startYourRequestText).toBeVisible();
    await expect(applyForCoursesPage.firstName).toBeVisible();
    await expect(applyForCoursesPage.lastName).toBeVisible();
    await expect(applyForCoursesPage.email).toBeVisible();
    await expect(applyForCoursesPage.phone).toBeVisible();
    await expect(applyForCoursesPage.city).toBeVisible();
    await expect(applyForCoursesPage.Country).toBeVisible();
    await expect(applyForCoursesPage.programCategory).toBeVisible();
})

test('Talk to an Advisor page NL', async({page}) => {
    await expect(page.url()).toBe('https://clarusway.nl/');
    await mainPage.clickOnTalkToAnAdvisor();
    const talkToAnAdvisorPage = new TalkToAnAdvisorPage(page);
    await expect(talkToAnAdvisorPage.chooseAppointmentText).toBeVisible();
})

test.afterEach(async({page}) => {
    page.close();
})