const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/valorant', async (req, res) => {
    const valorant = await getJson.getInfo("valorant");

    res.json(valorant.json);
    res.status(valorant.status);
});

module.exports = app;