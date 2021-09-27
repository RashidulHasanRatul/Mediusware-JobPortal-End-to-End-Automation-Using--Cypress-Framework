/// <reference types ="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";

const login = new Loginpage();

describe("Login Page",function(){

    // it("Verify Successfully Login or Not ",()=>{
    //     login.navigate();
    //     login.username();
    //     login.pass();
    //     login.submit();
    //     cy.url().should("be.eq","https://job.mediusware.com/");
    //     // login.Dashboradbtn().click();
    //
    // })

    it('Login To Application', function () {
        cy.login('rashidulmediusware@gmail.com','123456');
    });


})


