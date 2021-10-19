const db = require("../../../src/database/connection");

async function getInfo(gameName) {
    var itens = [];

    try {
        const query = await db.query(`SELECT * FROM ${gameName}`);    
        for(i = 0; i < query.rowCount; i++) {
            itens.push({
                placa_video: query.rows[i].placa_video,
                video_memory: query.rows[i].video_memory,
                processador: query.rows[i].processador,
                ram: query.rows[i].ram

            });
        }
        
    } catch (error){
        console.log("Error: Database Connection");
        return { json: "Error", status: 500 };
        
    }

    return { json: itens, status: 200 };
}

module.exports = { getInfo }