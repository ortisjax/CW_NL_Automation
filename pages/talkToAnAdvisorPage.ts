import { Page, Locator } from "@playwright/test";

export class TalkToAnAdvisorPage{


    readonly page: Page;
    readonly chooseAppointmentText: Locator;
    readonly yourInfo: Locator;

    constructor(page: Page){
        this.page = page;
        this.chooseAppointmentText = page.frameLocator('iframe').getByText('Choose Appointment');
        this.yourInfo = page.frameLocator('iframe').getByText('Your Info');
    }


}