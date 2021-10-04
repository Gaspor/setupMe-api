const db = require("./../../src/database/connection");

async function getGPU() {
    var itens = [];

    try {
        const query = await db.query("SELECT * FROM placa_video");    
        for(i = 0; i < query.rowCount; i++) {
            itens.push({
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                gbs: query.rows[i].gb,
                wattsFonte: query.rows[i].fonte,
                link: query.rows[i].productlink

            });
        }
        
    } catch (error){
        console.log("Error: Database Connection");
        return { json: "Error", status: 500 };
        
    }

    return { json: itens, status: 200 };
}

module.exports = { getGPU }