const express = require("express");
const app = express();
const ws = require("./../../resources/web_scraping/getInfo");
const getJson = require("./../../resources/getjsons/armazenamento");

app.get('/scraping', async (req, res) => {
    var { json } = await getJson.getHD();

    ws.getPriceValue(json, "armazenamento");

});

module.exports = app;