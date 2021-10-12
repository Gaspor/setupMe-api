const express = require("express");
const app = express();
const getJson = require("./../../resources/getjsons/processador");

app.get('/processadores', async (req, res) => {
    const processadores = await getJson.getCPU();

    res.json(processadores.json);
    res.status(processadores.status);
});

module.exports = app;