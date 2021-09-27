const express = require("express");
const router = express.Router();
const db = require("./../database/connection");
const {createJson, deleteJson, readJson} = require("./../JSONs/json");

router.get('/rams', async (req, res) => {
    const jsonFileName = "ram";
    var rams = {};

    try{
        const query = await db.query("SELECT * FROM memram");

        for(i = 0; i < query.rowCount; i++){
            rams[i] = {
                nome: query.rows[i].nome,
                
            }        
        }

        deleteJson(jsonFileName);
        createJson(jsonFileName, rams);
        
    } catch {
        console.log("Error: Database Connection");
        rams = readJson(jsonFileName);

    }
    
    res.send(JSON.stringify(rams));
});

module.exports = router;