/// <reference types ="cypress"/>

import home from "../../../Pages/HomePage/homePage";

const homePage = new home();

describe("HomePage Test",()=>{

 
    // Check Title 
    it("Verify Homepage Title",()=>{
        homePage.navigateURL();

        cy.title().should('eq',"Home");
    })

    // Should check correct URL
   it("Verify Url is correct or Not ",()=>{
      cy.url().should('include','job.mediusware.com');
    })


    // Check logo and Icon visibility
   it("Verify HomePageLogo/Icon is Visible or Not ",()=>{
    homePage.logoAndIcon().should('be.visible');

    })


    // check Back to Home Button is Present or Not
    it("Verify Back to Home Button is Visible or Not ",()=>{
        homePage.backToHomebtn().should('be.visible');
    
        })
    
   
        // Check contactUS Btn is Present or Not
        it("Verify ContactUS Button is Visible or Not ",()=>{
            homePage.contactUsBtn().should('be.visible');
        
            })

            
        it("Verify Login Button is Visible or Not ",()=>{
            homePage.loginBTN().should('be.visible');
        
        })

})

