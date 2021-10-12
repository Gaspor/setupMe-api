const express = require("express");
const app = express();

app.get('/basica', async (req, res) => {
    const basica = [{
        processador: "Pentium Gold G5420 ‎3.80GHz",
        ram: "4GB",
        placa_mae: "AFOX IH81-MA5",
        armazenamento: "240GB",
        placa_video: ""

    }];

    res.json(basica);
    res.status(200);
});

module.exports = app;