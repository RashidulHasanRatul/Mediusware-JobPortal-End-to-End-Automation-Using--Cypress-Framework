/// <reference types="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";
import  Dashboard  from "../../../Pages/DashBoardPage/dashboard";

const login = new Loginpage();
const dash = new Dashboard();

describe("Dashboard Testing",()=>{

    it("Goto Dashboard Page",()=>{
        cy.login('rashidulmediusware@gmail.com','123456');
        cy.wait(3000);
        
    })



    it("Dashboard Button Click",()=>{
        login.Dashboradbtn().click();
        
    })

    
    it("Verify Dashboard Button is Visible or not",()=>{
        login.Dashboradbtn().should('be.visible');
      })


    it("Welcome Message is Show or Not ",()=>{
        cy.wait(3000);
        dash.wellcomemsg().should('have.text', ' Welcome to Candidate ');
        // cy.log(dash.welcomeMessage());
    })




})


