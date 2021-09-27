const express = require("express");
const router = express.Router();
const db = require("./../database/connection");
const {createJson, deleteJson, readJson} = require("./../JSONs/json");

router.get('/armazenamentos', async (req, res) => {
    const jsonFileName = "armazenamentos";
    var armazenamentos = {};

    try{
        const query = await db.query("SELECT * FROM armazenamento");

        for(i = 0; i < query.rowCount; i++){
            armazenamentos[i] = {
                nome: query.rows[i].nome,
                
            }        
        }

        deleteJson(jsonFileName);
        createJson(jsonFileName, armazenamentos);
        
    } catch {
        console.log("Error: Database Connection");
        armazenamentos = readJson(jsonFileName);

    }
    
    res.send(JSON.stringify(armazenamentos));
});

module.exports = router;