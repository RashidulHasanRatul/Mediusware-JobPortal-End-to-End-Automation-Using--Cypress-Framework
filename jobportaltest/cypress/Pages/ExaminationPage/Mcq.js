/// <reference types="cypress"/>



export default class LaravelMCQ {

    clickExaminationBTN() {
        return cy.get('[href="/user/examination"] > .dashboard-icon');
    }

    clickonStartExam() {

        return cy.get(':nth-child(1) > .exam-items > .d-flex > .btn-animate');
    }

    startExam(){
        return cy.get('.btn');
        
    }

    QuestionOne(){
        return cy.get('#answer4');
    }








}