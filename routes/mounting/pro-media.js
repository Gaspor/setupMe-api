const express = require("express");
const app = express();

app.get('/media', async (req, res) => {
    const media = [{
        processador: "Core i7-7700 3.6GHz",
        ram: "8GB",
        placa_mae: "ASRock H310CM-HG4",
        armazenamento: "1TB",
        placa_video: "GTX 760"

    }];

    res.json(media);
    res.status(200);
});

module.exports = app;