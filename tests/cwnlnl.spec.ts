import { test, expect } from "@playwright/test";
import { MainPage } from '../pages/mainPage'
import { ApplyForCoursesPage } from '../pages/applyForCoursesPage';
import { TalkToAnAdvisorPage } from '../pages/talkToAnAdvisorPage'; 

var mainPage: MainPage;

test.beforeEach(async({page}) => {
    await page.goto('https://www.clarusway.nl/');
    mainPage = new MainPage(page, 'nl');
})