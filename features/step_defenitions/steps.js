const {Given, When, Then} = require('cucumber');
const LoginPage = require('./Page/LoginPage.js');
const CustomersInfoPage = require('./Page/CustomersInfoPage');
const CustomersDataPage = require('./Page/CustomersDataPage');
const chai = require('chai');
var expect = chai.expect;

const newLoginPage = new LoginPage();
const customersInfoPage = new CustomersInfoPage();

Given('I open page', async function () {
    await newLoginPage.open();
});

When('I choose manager account', async function () {
    await newLoginPage.login('manager')
});

When('I choose Add Customer', async function () {
    await customersInfoPage.clickAddCustomerMain()
})

When('Add First Name', function () {
    return customersInfoPage.addFirstName(CustomersDataPage.name)
});

When('Add Last Name', function () {
    return customersInfoPage.addLastName(CustomersDataPage.lastName)
});

When('Add Post Code', function () {
    return customersInfoPage.addPostCode(CustomersDataPage.postCode)
});

When('Click add customer btn', async function () {
    await customersInfoPage.clickAddCustomer()
});

Then('Check text in alert message', async function () {
    await customersInfoPage.checkAlertText().then(function (text) {
        expect(text).to.equal(CustomersDataPage.alertMessage)
    })
})

When('Close alert message', async function () {
    await customersInfoPage.closeAlertMessage();
})

When('Click customer button', async function () {
    await customersInfoPage.clickCustomers()
})

Then('Check user in table', async function () {
    await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
        expect(text).to.equal(true)
    })
})

When('Delete user', async function () {
    await customersInfoPage.deleteByName(CustomersDataPage.name)
})

Then('Check user not in table', async function () {
    await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
        expect(text).to.equal(false)
    })
})
