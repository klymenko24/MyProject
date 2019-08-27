class NewBasePage {
    open(params) {
        return browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    }

    waitForElement(elm) {
        const EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(elm), 5000);
    }
}

module.exports = NewBasePage;
