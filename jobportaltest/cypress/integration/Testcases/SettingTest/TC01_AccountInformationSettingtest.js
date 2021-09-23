import 'cypress-file-upload';
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


    it('Change Profile Picture', function () {
        const imgpath = 'Asset/Birds.jpeg';
        acinfo.profilePicture().attachFile(imgpath);


    });

    it('Change Profile Picture', function () {
        const imgpath = 'Asset/Birds.jpeg';
        acinfo.profilePicture().attachFile(imgpath);


    });

    it('Cv Upload', function () {
        const cv = 'Asset/cv.pdf';
        acinfo.cvUpload().attachFile(cv);
    });

    it('Confirm Password', function () {
        acinfo.confirmPassword().type("123456");

    });

    it('Click on Save Button', function () {
       acinfo.saveButton().click();

    });

    it('After save Account information Confirmation should be Show', function () {
        acinfo.succesfullySaveMsg().should('contain.text','Your profile has been saved successfully');
    });


})