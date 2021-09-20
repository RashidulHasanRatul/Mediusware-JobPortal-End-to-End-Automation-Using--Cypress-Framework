
export default class Loginpage {
 
    url ="https://job.mediusware.com/login";
    uname="#email";
    password = '.input-group > .form-control'
    submitbtn= '.login-btn';

    DashBoard='.nav-link btn-bg' ;

    navigate(){
        cy.visit(this.url);
    }

    username(){
        cy.get(this.uname).type("rhratul12@gmail.com");
    }

    pass(){
        cy.get(this.password).type("123456");
    }

    submit(){
       return cy.get(this.submitbtn).click();
    }

    Dashboradbtn(){
        return cy.get(':nth-child(3) > .nav-link');

    }




    
    

}
