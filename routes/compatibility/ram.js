const express = require("express");
const app = express();
const getJson = require("./../../resources/compatibility/ram");
const db = require("./../../src/database/connection");

app.get('/ram/:name', async (req, res) => {
    const query = await db.query(`SELECT * FROM memram WHERE nome=$1`, [
        req.params.name
    ]);
    const itens = await getJson.getRam(query.rows[0]);

    res.send(itens);
});

module.exports = app;
