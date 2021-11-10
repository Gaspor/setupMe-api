const express = require("express");
const app = express();
const ws = require("./../../resources/web_scraping/getInfo");

app.get('/armazenamento', async (req, res) => {
    const armazenamento = require("./../../resources/getjsons/armazenamento");
    var { json } = await armazenamento.getHD();
    
    await ws.getPriceValue(json, "armazenamento");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

app.get('/placa_mae', async (req, res) => {
    const placa_mae = require("./../../resources/getjsons/placa_mae");
    var { json } = await placa_mae.getMotherboards();
    
    await ws.getPriceValue(json, "placa_mae");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

app.get('/placa_video', async (req, res) => {
    const placa_video = require("./../../resources/getjsons/placa_video");
    var { json } = await placa_video.getGPU();
    
    await ws.getPriceValue(json, "placa_video");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

app.get('/processador', async (req, res) => {
    const processador = require("./../../resources/getjsons/processador");
    var { json } = await processador.getCPU();
    
    await ws.getPriceValue(json, "processador");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

app.get('/ram', async (req, res) => {
    const ram = require("./../../resources/getjsons/ram");
    var { json } = await ram.getRam();
    
    await ws.getPriceValue(json, "memram");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

app.get('/fonte', async (req, res) => {
    const fonte = require("./../../resources/getjsons/fonte");
    var { json } = await fonte.getFonte();
    
    await ws.getPriceValue(json, "fonte");
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");
    
});

module.exports = app;