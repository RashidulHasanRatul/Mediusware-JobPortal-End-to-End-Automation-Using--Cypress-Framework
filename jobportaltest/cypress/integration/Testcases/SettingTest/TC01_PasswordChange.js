import 'cypress-file-upload';
import AccountInformation from '../../../Pages/SettingPage/AccountInformation.js';
import Loginpage from "../../../Pages/LoginPage/Login";
import ChangePassword from "../../../Pages/SettingPage/ChangePassword"

const login = new Loginpage();

const acinfo = new AccountInformation();
const changePassword = new ChangePassword();

describe("Change Password ",function () {

    it("Login Application  ", () => {

        // Login from Custom command Page
        cy.login('rashidulmediusware@gmail.com', '123456');
        cy.wait(3000);
        login.Dashboradbtn().click();
        cy.wait(3000);

    })


    it('should Click Setting Button', function () {
        acinfo.clickOnSettingButton().click();
    });

    it('Click on Change Pass', function () {

        changePassword.changePass().click();
    });



})