const express = require("express");
const app = express();
const ws = require("./../../resources/web_scraping/getInfo");
const getJson = require("./../../resources/getjsons/armazenamento");

app.get('/scraping', async (req, res) => {
    var { json } = await getJson.getHD();

    ws.getPriceValue(json, "armazenamento");

    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");

});

module.exports = app;