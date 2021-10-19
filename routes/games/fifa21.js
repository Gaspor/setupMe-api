const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/fifa21', async (req, res) => {
    const fifa21 = await getJson.getInfo("fifa21");

    res.json(fifa21.json);
    res.status(fifa21.status);
});

module.exports = app;