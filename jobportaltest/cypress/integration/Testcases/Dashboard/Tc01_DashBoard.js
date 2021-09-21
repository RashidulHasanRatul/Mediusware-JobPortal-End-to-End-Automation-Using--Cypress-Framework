/// <reference types="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";
import  Dashboard  from "../../../Pages/DashBoardPage/dashboard";

const login = new Loginpage();
const dash = new Dashboard();

describe("Dashboard Testing",()=>{

    it("Goto Dashboard Page",()=>{
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.wait(3000);
        
    })

    it("Dashboard Button Click",()=>{
        login.Dashboradbtn().click();
        
    })

    it("Welcome Message is Show or Not ",()=>{
        cy.wait(3000);
        cy.get('.welcome-section').should('have.text', ' Welcome to Candidate ');
    })




})


