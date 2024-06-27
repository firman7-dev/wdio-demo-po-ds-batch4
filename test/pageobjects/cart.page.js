import Page from "./page.js";

class CartPage extends Page {
    open(path) {
        return super.open("cart.html")
    }
    get cartPage() {
        return $("#cart_contents_container");
    }

        async validateOnPage() {
        this.cartPage.waitForDisplayed({ timeout: 100000 })
        expect(this.cartPage).toBeDisplayed()
        
        browser.pause(50000)
    }

}

export default new CartPage();