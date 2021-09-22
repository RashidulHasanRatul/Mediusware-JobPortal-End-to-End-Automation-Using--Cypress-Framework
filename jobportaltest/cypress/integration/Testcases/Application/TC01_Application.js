/// <reference types="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";
import Dashboard from "../../../Pages/DashBoardPage/dashboard";
import Application from "../../../Pages/ApplicationPage/ApplicationPage";


const login = new Loginpage();
const application = new Application();


describe("Application Page Test", () => {


    it("Goto Dashboard Page", () => {
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.wait(4000);
        login.Dashboradbtn().click();
    })


    it("Click on Application Button", () => {

        application.clickapplication().click();

    })
    it(" verify  Job application history Section is visible or Not ", () => {

        application.jobapplicationHistory().should('have.text', "Job application history");

    })


})