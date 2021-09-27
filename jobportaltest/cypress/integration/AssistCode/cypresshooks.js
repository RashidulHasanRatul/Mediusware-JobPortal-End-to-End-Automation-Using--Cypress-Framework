describe("All About Cypress Hooks",()=>{

    before(function () {
        cy.log("This is Setup/Load Data from outside  block")
    });
    
    after(function () {
        cy.log("This is Teardown block")
    })
    
    beforeEach(function () {
        cy.log("This is Login Block")
    })
    
    afterEach(function () {
        cy.log("Thi is Logout Block")
    })


    it('Searching Test ', function () {
        cy.log("This is Searching Test");
    });

    it('Advanced Searching  ', function () {
        cy.log("This is Searching Test");
    });

    it('Listing Products', function () {
        cy.log("This is Searching Test");
    });
})