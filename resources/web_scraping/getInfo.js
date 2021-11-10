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
    console.log("Starting " + table);
    const browser = await pupp.launch(chromeOptions);
    const page = await browser.newPage();

    try {
        for(i = 0; i < itens.length; i++) {
            await new Promise(r => setTimeout(() => r(), 3000));
            page.goto(itens[i].link);
            await page.waitForNavigation();

            var price = await page.evaluate(element => {
                return element?.textContent;
            }, (await page.$x('//*[@itemprop="price"]'))[0]);
            
            if (price != undefined) {
                price = parseFloat(price.replace(".", "").replace(",", ".").replace("R$", ""))
                
            } else {
                price = 0;
            }

            console.log(price);
            db.updatePrice(table, price, itens[i].link);

        }
    } catch {


    } finally {
        console.log(table + " is over!");
        browser.close();
    }
}

module.exports = { getPriceValue }