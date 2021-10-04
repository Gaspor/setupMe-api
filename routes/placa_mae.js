const express = require("express");
const app = express();
const getJson = require("./../resources/getjsons/placa_mae");

app.get('/placas_mae', async (req, res) => {
    var placas_mae = await getJson.getMotherboards();

    res.json(placas_mae.json);
    res.status(placas_mae.status);
});

module.exports = app;