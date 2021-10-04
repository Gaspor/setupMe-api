const express = require("express");
const app = express();
const getJson = require("./../resources/getjsons/armazenamento");

app.get('/armazenamentos', async (req, res) => {
    var armazenamentos = await getJson.getHD();

    res.json(armazenamentos.json);
    res.status(armazenamentos.status);
});

module.exports = app;