const express = require("express");
const router = express.Router();
const db = require("./../database/connection");
const {createJson, deleteJson, readJson} = require("./../../resources/json");

router.get('/placas_mae', async (req, res) => {
    const jsonFileName = "placasmae";
    var placas_mae = {};

    try {
        const query = await db.query("SELECT * FROM placa_mae");
    
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

        //await createJson(jsonFileName, placas_mae);
        
    } catch (error){
        console.log("Error: Database Connection");
        //placas_mae = readJson(jsonFileName);
        
    }
    
    res.json(placas_mae);
});

module.exports = router;