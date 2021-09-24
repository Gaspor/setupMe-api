require('dotenv').config({ path: 'src/config/.env' });

async function connect() {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://' + process.env.DB_USERNAME + ':' + 
        process.env.DB_PASSWORD + '@' + 
        process.env.DB_SERVER + ':' + 
        process.env.DB_PORT + '/' + 
        process.env.DB_NAME + "?sslmode=require" 
    });

    const client = await pool.connect();
    client.release();

    global.connection = pool;
    return pool.connect();
}

module.exports = {connect};