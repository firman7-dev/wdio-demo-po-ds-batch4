import Page from "./page.js";
import { $ } from "@wdio/globals"

class DashboardPage extends Page {
    open(path) {
        return super.open("inventory.html")
    }

    get cartIcon() {
        return $("#shopping_cart_container")
    }

    async validateOnPage() {
    this.cartIcon.waitForDisplayed({ timeout: 100000 })
    expect(this.cartIcon).toBeDisplayed()
            
    browser.pause(50000)
    }

}

export default new DashboardPage();