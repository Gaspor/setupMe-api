const express = require("express");
const app = express();
const getJson = require("./../../resources/compatibility/placa_video");
const db = require("./../../src/database/connection");

app.get('/placa_video/:name', async (req, res) => {
    const query = await db.query(`SELECT * FROM placa_video WHERE nome=$1`, [
        req.params.name
    ]);

    const itens = await getJson.getVideoboards(query.rows[0]);

    res.send(itens);
});

module.exports = app;
