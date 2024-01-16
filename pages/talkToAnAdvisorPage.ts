import { Page, Locator } from "@playwright/test";

export class TalkToAnAdvisorPage{


    readonly page: Page;
    readonly chooseAppointmentText: Locator;

    constructor(page: Page){
        this.page = page;
        this.chooseAppointmentText = page.frameLocator('iframe').getByText('Choose Appointment');
    }


}