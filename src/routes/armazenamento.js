const express = require("express");
const router = express.Router();
const db = require("./../database/connection");

router.get('/armazenamentos', async (req, res) => {
    var armazenamentos = [];

    try{
        const query = await db.query("SELECT * FROM armazenamento");

        for(i = 0; i < query.rowCount; i++) {
            armazenamentos.push({
                nome: query.rows[i].nome,
                
            });   
        }
        
    } catch {
        console.log("Error: Database Connection");

    }
    
    res.json(armazenamentos);
});

module.exports = router;