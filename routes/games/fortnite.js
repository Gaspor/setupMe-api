const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/fortnite', async (req, res) => {
    const fortnite = await getJson.getInfo("fortnite");

    res.json(fortnite.json);
    res.status(fortnite.status);
});

module.exports = app;