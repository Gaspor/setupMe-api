const express = require("express");
const app = express();
const getJson = require("./../../resources/getjsons/fonte");

app.get('/fontes', async (req, res) => {
    const fonte = await getJson.getFonte();

    res.json(fonte.json);
    res.status(fonte.status);
});

module.exports = app;