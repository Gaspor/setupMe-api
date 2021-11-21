const express = require("express");
const app = express();
const getJson = require("./../../resources/compatibility/fonte");
const db = require("./../../src/database/connection");

app.get('/fonte/:name', async (req, res) => {
    const query = await db.query(`SELECT * FROM fonte WHERE nome=$1`, [
        req.params.name
    ]);
    const itens = await getJson.getFonte(query.rows[0]);

    res.send(itens);
});

module.exports = app;