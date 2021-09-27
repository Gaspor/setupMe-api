const express = require("express");
const router = express.Router();
const db = require("./../database/connection");
const {createJson, deleteJson, readJson} = require("./../JSONs/json");

router.get('/processadores', async (req, res) => {
    const jsonFileName = "processadores";
    var processadores = {};

    try{
        const query = await db.query("SELECT * FROM processador");

        for(i = 0; i < query.rowCount; i++){
            processadores[i] = {
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                socket: query.rows[i].socket,
                mhzMaximoDaMemoria: query.rows[i].mhzmx,
                link: query.rows[i].productlink
            }        
        }

        deleteJson(jsonFileName);
        createJson(jsonFileName, processadores);
        
    } catch {
        console.log("Error: Database Connection");
        processadores = readJson(jsonFileName);

    }
    
    res.send(JSON.stringify(processadores));
});

module.exports = router;