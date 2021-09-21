/// <reference types="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";
// import  Dashboard  from "../../../Pages/DashBoardPage/dashboard";

const login = new Loginpage();
// const dash = new Dashboard();

describe("Dashboard Testing",()=>{

    it("Goto Dashboard Page",()=>{
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.wait(2000);
        
    })

    it("Dashboard Button Click",()=>{
        login.Dashboradbtn().click();
        
    })





})


