/// <reference types ="cypress"/>

import Loginpage from "../../../Pages/LoginPage/Login";

const login = new Loginpage();

describe("Login Page",function(){

    it("Login Portal",()=>{
        login.navigate();
        login.username();
        login.pass();
        login.submit();
        

    })
})


