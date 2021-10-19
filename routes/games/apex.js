const express = require("express");
const app = express();
const getJson = require("../../resources/getjsons/games/getGamesInfos");

app.get('/apex', async (req, res) => {
    const apex = await getJson.getInfo("apex");

    res.json(apex.json);
    res.status(apex.status);
});

module.exports = app;