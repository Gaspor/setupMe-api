const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/dota2', async (req, res) => {
    const dota2 = await getJson.getInfo("dota2");

    res.json(dota2.json);
    res.status(dota2.status);
});

module.exports = app;