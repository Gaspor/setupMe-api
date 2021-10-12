const express = require("express");
const app = express();

app.get('/avancada', async (req, res) => {
    const avancada = [{
        processador: "Core i7-10700K",
        ram: "32GB",
        placa_mae: "TUF Gaming Z490-Plus",
        armazenamento: "2TB",
        placa_video: "RTX 3080 Ti 12GB"

    }];

    res.json(avancada);
    res.status(200);
});

module.exports = app;