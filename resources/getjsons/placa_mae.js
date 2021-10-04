const db = require("./../../src/database/connection");

async function getMotherboards() {
    var itens = [];

    try {
        const query = await db.query("SELECT * FROM placa_mae");    
        for(i = 0; i < query.rowCount; i++) {
            itens.push({
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                socket: query.rows[i].socket,
                ddr: query.rows[i].ddr,
                slotsDeMemoria: query.rows[i].memslots,
                m2support: query.rows[i].m2support,
                link: query.rows[i].productlink
            });
        }
        
    } catch (error){
        console.log("Error: Database Connection");
        return { json: "Error", status: 500 };
        
    }

    return { json: itens, status: 200 };
}

module.exports = { getMotherboards }