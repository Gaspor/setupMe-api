const ws = require("./../../resources/web_scraping/getInfo");
const armazenamento = require("./../../resources/getjsons/armazenamento");

app.get('/scraping', async (req, res) => {
    var { json } = await getJson.getHD();

    ws.getPriceValue(json, "armazenamento");

});