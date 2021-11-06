const db = require("./../../src/database/connection");

async function getHD() {
    var itens = [];

    try {
        const query = await db.query("SELECT * FROM armazenamento");    
        for(i = 0; i < query.rowCount; i++) {
            itens.push({
                nome: query.rows[i].nome,
                marca: query.rows[i].marca,
                gb: query.rows[i].gb,
                m2: query.rows[i].m2,
                link: query.rows[i].productlink,
                preco: query.rows[i].valor

            });
        }
        
    } catch (error){
        console.log("Error: Database Connection");
        return { json: "Error", status: 500 };
        
    }

    return { json: itens, status: 200 };
}

module.exports = { getHD }