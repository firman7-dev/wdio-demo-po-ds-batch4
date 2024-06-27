import DashboardPage from "../pageobjects/dashboard.page.js";
import LoginPage from "../pageobjects/login.page.js";

describe('Login test', () => {
    it('Successful Login', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD)

        await DashboardPage.validateOnPage()
    });
});