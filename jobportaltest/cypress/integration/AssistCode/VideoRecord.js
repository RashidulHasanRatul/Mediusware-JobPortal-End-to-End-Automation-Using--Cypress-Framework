describe("ScreenShot",function () {

    it('Screenshot using default', function () {

        cy.visit("https://www.cypress.io/");
        cy.screenshot();
    });
})