class Registerpage{
    constructor(page) {
        this.page = page;
    }
    async register(user){
        await this.page.click('text=Register');
        await this.page.fill('#customer\\.firstName', user.firstname);
        await this.page.fill('#customer\\.lastName', user.lastname);
        await this.page.fill('#customer\\.address\\.street', user.address);
        await this.page.fill('#customer\\.address\\.city', user.ciry);
        await this.page.fill('#customer\\.address\\.state', user.state);
        await this.page.fill('#customer\\.address\\.zipCode', user.zipCode);
        await this.page.fill('#customer\\.phoneNumber', user.phone);
        await this.page.fill('#customer\\.ssn', user.ssn);
        await this.page.fill('#customer\\.username', user.username);
        await this.page.fill('#customer\\.password', user.password);
        await this.page.fill('#repeatedPassword', user.password);
        await this.page.click("input[value='Register']");
    }

}
module.exports=Registerpage;



