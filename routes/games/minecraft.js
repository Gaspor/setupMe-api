const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/minecraft', async (req, res) => {
    const minecraft = await getJson.getInfo("minecraft");

    res.json(minecraft.json);
    res.status(minecraft.status);
});

module.exports = app;