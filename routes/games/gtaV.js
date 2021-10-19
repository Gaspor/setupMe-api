const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/gtaV', async (req, res) => {
    const gtaV = await getJson.getInfo("gta");

    res.json(gtaV.json);
    res.status(gtaV.status);
});

module.exports = app;