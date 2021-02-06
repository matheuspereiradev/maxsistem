require('dotenv/config');

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host:     'localhost',
        user:     'root',
        password: '1234',
        database: 'dbmax'
    }
});

module.exports = knex;