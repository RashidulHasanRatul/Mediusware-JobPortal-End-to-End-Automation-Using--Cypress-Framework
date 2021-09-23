import 'cypress-file-upload';


describe("All About Fileupload", () => {

    it('Single File upload', function () {
        cy.visit('http://automationpractice.com/index.php?controller=contact');

        const imgpath = 'Asset/Birds.jpeg';

        cy.get('#fileUpload').attachFile(imgpath);


    });

    it('Drag And Drop File Upload', function () {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/');

        const imgpath = 'Asset/Birds.jpeg';

        cy.get('#file').attachFile(imgpath);
        //Assertion Done Message is Show or Not
        cy.get('.box__success').should('contain.text','Done! Upload more?');

    });

    it('Multiple File Upload', function () {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        const img1 = 'Asset/Birds.jpeg';
        const img2 = 'Asset/sampletext.txt';

        cy.get('#filesToUpload').attachFile([img1,img2]);








        //Assertion Done Message is Show or Not
        // cy.get('.box__success').should('contain.text','Done! Upload more?');

    });




})