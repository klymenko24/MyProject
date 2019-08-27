const NewLoginPage = require('./Page/NewLoginPage');
const CustomersInfoPage = require('./Page/CustomersInfoPage');

browser.ignoreSynchronization = true;

describe('XYZ Bank', function () {

    const newLoginPage = new NewLoginPage();
    const customersInfoPage = new CustomersInfoPage();

    it('test', async function () {
        await newLoginPage.open();
    })

    it('Locators', async function () {
        await newLoginPage.login('manager')
        await browser.sleep(1000);
    });

    it('Choose Add Customer', async function () {
        await customersInfoPage.clickAddCustomerMain()
    })

    it('Add First Name', async function () {
        await customersInfoPage.addFirstName('Tolya')
    });

    it('Add Last Name', async function () {
        await customersInfoPage.addLastName('Potter')
    });

    it('Add Post Code', async function () {
        await customersInfoPage.addPostCode('31071980')
    });

    it('Click add customer btn', async function () {
        await customersInfoPage.clickAddCustomer()
    });

    it('Check text', async function () {
        expect(await customersInfoPage.checkAlertText()).toEqual("Customer added successfully with customer id :6");
    })

    it('Close Alert Window', async function () {
        await customersInfoPage.closeAlertMessage();
    })

    it('Click customer button', async function () {
        await customersInfoPage.clickCustomers()
        await browser.sleep(1000)
    })

    it('Check user in table', async function () {
        await expect(element(by.cssContainingText('.table', 'Tolya')).isPresent()).toBe(true)
    })

    it('Click delete customer', async function () {
        await customersInfoPage.clickDeleteCustomer()
    })

    it('Check user not in table', async function () {
        await expect(element(by.cssContainingText('.table', 'Tolya')).isPresent()).toBe(false)
    })

})


