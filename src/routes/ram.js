const express = require("express");
const router = express.Router();
const db = require("./../database/connection");

router.get('/rams', async (req, res) => {
    var rams = [];

    try{
        const query = await db.query("SELECT * FROM memram");

        for(i = 0; i < query.rowCount; i++){
            rams.push({
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                gbs: query.rows[i].gb,
                ddr: query.rows[i].ddr,
                mhz: query.rows[i].mhz,
                link: query.rows[i].productlink,
                
            });
        }
        
    } catch {
        console.log("Error: Database Connection");

    }
    
    res.json(rams);
});

module.exports = router;