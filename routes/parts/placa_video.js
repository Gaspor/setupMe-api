const express = require("express");
const app = express();
const getJson = require("./../../resources/getjsons/placa_video");

app.get('/placas_video', async (req, res) => {
    const placa_video = await getJson.getGPU();

    res.json(placa_video.json);
    res.status(placa_video.status);
});

module.exports = app;