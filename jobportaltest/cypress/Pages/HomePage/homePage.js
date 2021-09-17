/// <reference types ="cypress"/>

export default class home {

baseURL = "https://job.mediusware.com/";
imageAndLogo =".img-fluid"
backToHome= '.navbar-nav > :nth-child(1) > .router-link-exact-active'
contactBTN =':nth-child(2) > .nav-link'
loginButton=':nth-child(3) > .nav-link'
navigateURL(){
    cy.visit(this.baseURL);
}

logoAndIcon(){
  return  cy.get(this.imageAndLogo);
}

backToHomebtn(){
    return cy.get(this.backToHome);
}

contactUsBtn(){
    return cy.get(this.contactBTN);
}


loginBTN(){
    return cy.get(this.loginButton)
}



}