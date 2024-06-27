import Page from "./page.js";
import { $ } from "@wdio/globals"

class AddCart extends Page {
    open(path) {
        return super.open("inventory.html")
    }

    get buttonadd() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    async dashboard(){
        await this.buttonadd.click()
    }

}

export default new AddCart();