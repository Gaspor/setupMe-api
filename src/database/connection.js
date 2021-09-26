const { Pool } = require('pg');

require('dotenv').config({ path: 'src/config/.env' });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
if (global.connection)
    return global.connection.connect();

const pool = new Pool({
    connectionString: 'postgres://' + process.env.DB_USERNAME + ':' + 
    process.env.DB_PASSWORD + '@' + 
    process.env.DB_SERVER + ':' + 
    process.env.DB_PORT + '/' + 
    process.env.DB_NAME + "?sslmode=require" 
});

pool.on("connect", () => {
    console.log("Database connected!");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    
};