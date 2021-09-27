describe('CustomCommad', function () {


    it('CustomTest', function () {
       cy.login("admin@yourstore.com","admin");
    });

    it('Add customer ', function () {
        cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get("input[name=Email]").clear().type("admin@yourstore.com");
        // cy.get("#Password").type('admin');
        cy.get('.button-1').click();
        console.log("Adding Customer");
    });

    it('Edit Customer', function () {
        cy.visit("https://admin-demo.nopcommerce.com/login");
        // cy.get("input[name=Email]").clear().type("admin@yourstore.com");
        // cy.get("#Password").type('admin');
        cy.get('.button-1').click();
        console.log("Edit Customer");
    });



})