import { Locator, Page } from "@playwright/test";
import Dictionary from "../dictionary.json"


export class ApplyForCoursesPage {

    readonly page: Page
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly city: Locator;
    readonly programCategory: Locator;
    readonly Country: Locator;
    readonly startYourRequestText: Locator;

    constructor(page: Page, lang: string){
        this.page = page;
        this.firstName = this.page.frameLocator('iframe').getByLabel('First');
        this.lastName = this.page.frameLocator('iframe').getByLabel('Last');
        this.email = this.page.frameLocator('iframe').getByLabel('Email \n\n*');
        this.phone = this.page.frameLocator('iframe').getByLabel('Phone \n\n*');
        this.Country = this.page.frameLocator('iframe').getByLabel('Country');
        this.city = this.page.frameLocator('iframe').getByLabel('State-City');
        this.programCategory = this.page.frameLocator('iframe').getByLabel('Choose Program Category \n\n*');
        this.startYourRequestText = this.page.locator('section').filter({ hasText: `${Dictionary.startYourApplication[lang]}` }).frameLocator('iframe').getByText('Name', { exact: true });
    }

    async goto(){
        await this.page.goto('https://clarusway.nl/cursussen-aanvragen/');
    }

    async fillFirstName(fname: string){
        await this.firstName.click();
        await this.firstName.fill(fname);
    }

    async fillLastName(lname: string){
        await this.lastName.click();
        await this.lastName.fill(lname);
    }

    async fillEmail(email: string){
        await this.email.click();
        await this.email.fill(email);
    }

    async fillPhone(phone: string){
        await this.phone.click();
        await this.phone.fill(phone);
    }

    async fillCity(city: string){
        await this.city.click();
        await this.city.fill(city);
    }

    async selectProgramCategory(programCategory: string){
        await this.programCategory.selectOption(programCategory);
    }



}