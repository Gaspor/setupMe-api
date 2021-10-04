const express = require("express");
const app = express();
const getJson = require("./../resources/getjsons/ram");

app.get('/rams', async (req, res) => {
    var rams = await getJson.getRam();

    res.json(rams.json);
    res.status(rams.status);
});

module.exports = app;