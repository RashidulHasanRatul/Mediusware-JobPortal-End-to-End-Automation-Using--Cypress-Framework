/// <reference types ="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";

const login = new Loginpage();

describe("Login Page",function(){

    it("Verify Successfully Login or Not ",()=>{
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.url().should("be.eq","https://job.mediusware.com/");

    })

    it("Verify Dashboard Button is Visible or not",()=>{
      login.Dashboradbtn().should('be.visible');
    })

    console.log("Hey");



})

