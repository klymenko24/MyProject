const NewBasePage = require('./NewBasePage');

class NewLoginPage extends NewBasePage {
    constructor() {
        super();
        this.loginManagerBtn = $('button[ng-click="manager()"]');
        this.loginCustomerBtn = $('button[ng-click="customer()"]');
    }

    async login(role) {
        await this.waitForElement(this.loginManagerBtn)
        if (role === 'manager') {
            await this.loginManagerBtn.click()
        } else {
            await this.loginCustomerBtn.click()
        }
    }
}

module.exports = NewLoginPage;
