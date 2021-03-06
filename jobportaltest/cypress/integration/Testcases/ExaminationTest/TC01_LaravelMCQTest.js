/// <reference types="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";
import LaravelMCQ from "../../../Pages/ExaminationPage/Mcq";

const login = new Loginpage();
const mcq = new LaravelMCQ();

describe("Dashboard Testing", () => {

    it("Goto Dashboard Page", () => {
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.wait(3000);
        login.Dashboradbtn().click();
    })


    it("Click on Examination Button", () => {
        mcq.clickExaminationBTN().click();

    })

    it("Click on Start Exam", () => {


        mcq.clickonStartExam().click({
            multiple: true
        });


        cy.wait(3000);
        mcq.startExam().click();
    })

    // it("Resume Exam",()=>{
    //     cy.get('[data-top="833"]').click();
    // })






    //  it("Q1",()=>{

    //     cy.wait(5000);
    //      mcq.QuestionOne().click();

    //  })





})