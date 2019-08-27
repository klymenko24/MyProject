const NewBasePage = require('./NewBasePage');

class CustomersInfoPage extends NewBasePage {
    constructor() {
        super();
        this.clickAddBtn = $('[ng-click="addCust()"]'),
        this.addCustomerName = $('[ng-model="fName"]'),
        this.addCustomerLastName = $('[ng-model="lName"]'),
        this.addCustomerPostCode = $('[ng-model="postCd"]'),
        this.customerAddBtn = $('.btn-default'),
        this.customersBtn = $('[ng-click="showCust()"]'),
        this.deleteBtn = $('tr:nth-child(6) > td:nth-child(5) > button')
    }

    async clickAddCustomerMain() {
        await this.clickAddBtn.click()
        await browser.sleep(2000)
    }

    async addFirstName(name) {
        await this.addCustomerName.click().sendKeys(name)
    }

    async addLastName(lastname) {
        await this.addCustomerLastName.click().sendKeys(lastname)
    }

    async addPostCode(number) {
        await this.addCustomerPostCode.click().sendKeys(number)
    }

    async clickAddCustomer() {
        await this.customerAddBtn.click()
    }

    async checkAlertText() {
        var alertDialog = browser.switchTo().alert();
        return alertDialog.getText()
    }

    async closeAlertMessage() {
        await browser.switchTo().alert().accept()
    }

    async clickCustomers() {
        await this.customersBtn.click()
    }

    async clickDeleteCustomer() {
        await this.deleteBtn.click()
    }

}

module.exports = CustomersInfoPage;
