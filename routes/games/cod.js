const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/cod', async (req, res) => {
    const cod = await getJson.getInfo("cod");

    res.json(cod.json);
    res.status(cod.status);
});

module.exports = app;