/// <reference types="cypress"/>

export default class Application {

    clickapplication(){
        return cy.get('[href="/user/application"]');
    }

    jobapplicationHistory(){
       return cy.get('.applied-job-section > h2');
    }

}