const { Pool } = require('pg');

const pool = new Pool({
    user: 'saeed',
    host: 'localhost',
    database: 'contactdetails',
    password: 'saeed1122',
    port: 8080,
});

module.exports = pool;