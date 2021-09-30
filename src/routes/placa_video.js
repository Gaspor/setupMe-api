const express = require("express");
const router = express.Router();
const db = require("./../database/connection");

router.get('/placas_video', async (req, res) => {
    var placa_video = {};

    try{
        const query = await db.query("SELECT * FROM placa_video");

        for(i = 0; i < query.rowCount; i++){
            placa_video[i] = {
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                gbs: query.rows[i].gb,
                wattsFonte: query.rows[i].fonte,
                link: query.rows[i].productlink
                
            }        
        }
        
    } catch {
        console.log("Error: Database Connection");

    }
    
    res.json(placa_video);
});

module.exports = router;