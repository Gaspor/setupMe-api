const express = require("express");
const app = express();

app.get('/fortnite', async (req, res) => {
    const fortnite = [{
        placa_video: "NVIDIA GTX 960 ou AMD R9 280",
        video_memory: "2GB VRAM",
        processador: "Core i5-7300U 3.5 GHz",
        ram: "8GB"
    }];

    res.json(fortnite);
    res.status(200);
});

module.exports = app;