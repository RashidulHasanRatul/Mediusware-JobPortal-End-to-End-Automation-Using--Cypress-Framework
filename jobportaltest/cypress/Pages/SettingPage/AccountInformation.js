export default class AccountInformation {




    clickOnSettingButton() {
        return cy.get('[href="/user/settings"] > .dashboard-icon');
    }

    profilePicture() {
        return cy.get('#imgInp');
    }

    cvUpload() {
        return cy.get('#resume');
    }

    confirmPassword(){
        return cy.get(':nth-child(5) > .form-control');
    }


    saveButton(){
       return  cy.get('.save-btn');
    }

    succesfullySaveMsg(){
        return cy.get('.mt-4')
    }




}