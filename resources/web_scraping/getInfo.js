const pupp = require('puppeteer');
const db = require('./../../src/database/updatePrice');
const chromeOptions = {
    headless: true,
    defaultViewport: null,
    args: [
        "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
        "--disabled-setupid-sandbox"
    ],
};

async function getPriceValue(itens, table) {
    const browser = await pupp.launch(chromeOptions);
    const page = await browser.newPage();
    try {
        for(i = 0; i < itens.length; i++) {
            page.goto(itens[i].link);
            await page.waitForNavigation();

            var price = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x('//*[@itemprop="price"]'))[0]);
            
            price = parseFloat(price.replace(",", ".").replace("R$", ""))
            db.updatePrice(table, price, itens[i].link);

        }

    } catch {

    } finally {
        browser.close();
    }
}

module.exports = { getPriceValue }