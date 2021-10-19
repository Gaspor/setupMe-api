const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/lol', async (req, res) => {
    const lol = await getJson.getInfo("lol");

    res.json(lol.json);
    res.status(lol.status);
});

module.exports = app;