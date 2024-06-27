import AddCart from "../pageobjects/addcart.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";



describe('Add Cart', () => {
    it('Successful Cart', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD)
        await AddCart.open()
        await AddCart.buttonadd.click()

        await CartPage.validateOnPage()
    });
});