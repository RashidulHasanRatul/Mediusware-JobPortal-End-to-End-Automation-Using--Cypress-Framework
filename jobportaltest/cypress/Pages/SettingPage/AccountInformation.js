
export  default  class AccountInformation {


    hey(){
        cy.log("Test");
    }

    clickOnSettingButton(){
       return  cy.get('[href="/user/settings"] > .dashboard-icon');
    }


}