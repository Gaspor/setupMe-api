const db = require('./connection');

async function updatePrice(table, value, url) {
    const query = await db.query(`UPDATE ${table} SET valor='${value}' WHERE productlink='${url}';`);   

}

module.exports = { updatePrice }