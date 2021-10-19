const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/csgo', async (req, res) => {
    const csgo = await getJson.getInfo("csgo");

    res.json(csgo.json);
    res.status(csgo.status);
});

module.exports = app;