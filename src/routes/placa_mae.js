const express = require("express");
const router = express.Router();
const db = require("./../database/connection");

router.get('/placas_mae', async (req, res) => {
    const query = await db.query("SELECT * FROM placa_mae");
    var placas_mae = {};

    for(i = 0; i < query.rowCount; i++){
        placas_mae[i] = {
            nome: query.rows[i].nome,
            marca: query.rows[i].marca,
            socket: query.rows[i].socket,
            ddr: query.rows[i].ddr,
            slotsDeMemoria: query.rows[i].memslots,
            m2support: query.rows[i].m2support,
            link: query.rows[i].productlink
        }        
    }
    
    res.send(JSON.stringify(placas_mae));
});

module.exports = router;