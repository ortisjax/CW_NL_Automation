import { Page, Locator } from "@playwright/test";
import { ApplyForCoursesPage } from "./applyForCoursesPage"
import { TalkToAnAdvisorPage } from "./talkToAnAdvisorPage"


export class MainPage {

    readonly page: Page
    readonly applyForCoursesButton: Locator;
    readonly talkToAnAdvisorButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.applyForCoursesButton = this.page.getByRole('link', { name: 'Cursussen Aanvragen' });
        this.talkToAnAdvisorButton = this.page.getByRole('banner').getByRole('link', { name: 'Praat Met Een Adviseur' });
    }


    async goto(){
        await this.page.goto('https://clarusway.getlearnworlds.com');
    }
    
    //cursussenAanvragen
    async clickOnApplyForCourses(){
        await this.applyForCoursesButton.click();
    }

    async talkToAnAdvisorPage(){
        await this.talkToAnAdvisorButton.click();
        return new TalkToAnAdvisorPage(this.page);
    }

    

}