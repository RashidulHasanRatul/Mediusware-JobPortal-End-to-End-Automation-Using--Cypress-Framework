import config from '../../../../cypress.json'

describe('Test Mediusware  Broken Links', () => {

    it('verify navigation accross the pages', () =>{

        cy.visit(`${config.URL1}`)

        // for handle uncaught exception
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.wrap('passed').as('ctrl')
        cy.get("a:not([href*='mailto:]']").each($el => {

            if ($el.prop('href').length > 0) {
                const message = $el.text()
                expect($el, message).to.have.attr("href").not.contain("undefined")
                cy.log($el.attr('href'))
            }
        })
    })
})