const express = require("express");
const router = express.Router();
const db = require("./../database/connection");
const {createJson, deleteJson, readJson} = require("./../JSONs/json");

router.get('/placas_video', async (req, res) => {
    const jsonFileName = "placasvideo";
    var placa_video = {};

    try{
        const query = await db.query("SELECT * FROM placa_video");

        for(i = 0; i < query.rowCount; i++){
            placa_video[i] = {
                nome: query.rows[i].nome,
                
            }        
        }

        deleteJson(jsonFileName);
        createJson(jsonFileName, placa_video);
        
    } catch {
        console.log("Error: Database Connection");
        placa_video = readJson(jsonFileName);

    }
    
    res.send(JSON.stringify(placa_video));
});

module.exports = router;