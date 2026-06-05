class AccountPage {
    constructor(page) {
        this.page = page;
    }
    async getBalance() {
        await this.page.waitForTimeout(5000);
        console.log("current url:", await this.page.url());
        const balance=await this.page.locator('body').textContent();
         console.log(balance);
         return balance;
    }
}
module.exports = AccountPage;
