import { Page, Locator } from "@playwright/test";
import Dictionary from "../dictionary.json"


export class MainPage {

    readonly page: Page
    readonly applyForCoursesButton: Locator;
    readonly talkToAnAdvisorButton: Locator;
    readonly nederlandsButton: Locator

    constructor(page: Page, lang: string){
        this.page = page;
        this.applyForCoursesButton = this.page.getByRole('link', { name: `${Dictionary.ApplyNow[lang]}` });
        this.talkToAnAdvisorButton = this.page.getByRole('banner').getByRole('link', { name: `${Dictionary.TalkToAnAdvisor[lang]}` });
    }

    async gotoNL(){
        await this.page.goto('https://www.clarusway.nl');
    }

    async gotoEN(){
        await this.page.goto('https://www.clarusway.nl/en');
    }

    async clickOnApplyForCourses(){
        await this.applyForCoursesButton.click();
    }

    async clickOnTalkToAnAdvisor(){
        await this.talkToAnAdvisorButton.click();
    } 
}