const express = require("express");
const app = express();
const getJson = require("./../../resources/compatibility/placa_mae");
const db = require("./../../src/database/connection");

app.get('/placa_mae/:name', async (req, res) => {
    const query = await db.query(`SELECT * FROM placa_mae WHERE nome=$1`, [
        req.params.name
    ]);
    const itens = await getJson.getMotherboards(query.rows[0]);

    res.send(itens);
});

module.exports = app;
