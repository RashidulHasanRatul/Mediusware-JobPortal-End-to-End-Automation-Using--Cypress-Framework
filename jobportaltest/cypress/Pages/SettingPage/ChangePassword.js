

 export default  class ChangePassword {



    changePass(){
        return cy.get('.setting-left > :nth-child(2)');
    }

    curentPass(){
        return cy.get(':nth-child(1) > .input-group > .form-control')
    }

    newPass(){
        return cy.get(':nth-child(2) > .input-group > .form-control').type('1234567')
    }

    confirmpass(){
        return cy.get(':nth-child(3) > .input-group > .form-control').type('1234567');
    }

}