import AccountInformation from '../../../Pages/SettingPage/AccountInformation.js';
import Loginpage from "../../../Pages/LoginPage/Login";


const login = new Loginpage();

const acinfo = new AccountInformation();


describe("Account Information", () => {
    it("Verify Successfully Login or Not ", () => {
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        cy.url().should("be.eq", "https://job.mediusware.com/");
        login.Dashboradbtn().click();

    })


    it('should Click Setting Button', function () {
        acinfo.clickOnSettingButton().click();
    });


})