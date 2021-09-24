describe("All About Cypress Hooks",()=>{

    before(function () {
        cy.log("This is Setup block")
    });
    
    after(function () {
        cy.log("This is Teardown block")
    })
    
    beforeEach(function () {
        cy.log("")
    })
    
    afterEach(function () {
        
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