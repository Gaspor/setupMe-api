const express = require("express");
const app = express();
const getJson = require("./../../resources/compatibility/processador");
const db = require("./../../src/database/connection");

app.get('/processador/:name', async (req, res) => {
    const query = await db.query(`SELECT * FROM processador WHERE nome=$1`, [
        req.params.name
    ]);
    const itens = await getJson.getProcessor(query.rows[0]);

    res.send(itens);
});

module.exports = app;
