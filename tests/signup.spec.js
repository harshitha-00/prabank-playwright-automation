const {test} = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const Accountpage = require('../pages/Accountpage');
const user=require('../test-data/userdata');




test('create account and login', async({page}) => {
await page.goto('https://parabank.parasoft.com/parabank/index.htm');
const registerPage=new RegisterPage(page);
const loginPage=new LoginPage(page);
const accountPage=new Accountpage(page);
await registerPage.register(user);
await page.waitForLoadState('networkidle');


const balance=await accountPage.getBalance();
console.log('Account balance:', balance);
await page.screenshot({path:'screenshot/result.png',fullPage:true});
});