const express = require("express");
const router = express.Router();
const db = require("./../database/connection");

router.get('/processadores', async (req, res) => {
    const query = await db.query("SELECT * FROM processador");
    var processadores = {};

    for(i = 0; i < query.rowCount; i++){
        processadores[i] = {
            nome: query.rows[i].nome,
            marca: query.rows[i].marca,
            socket: query.rows[i].socket,
            mhzMaximoDaMemoria: query.rows[i].mhzmx,
            link: query.rows[i].productlink
        }        
    }
    
    res.send(JSON.stringify(processadores));
});

module.exports = router;