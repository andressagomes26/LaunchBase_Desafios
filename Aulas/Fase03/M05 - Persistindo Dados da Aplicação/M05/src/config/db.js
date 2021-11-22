const { Pool } = require('pg')

module.exports = new Poll ({
    user:"postgres",
    password:1234,
    host:'localhost',
    port: 5432,
    database:'gymmanager'
})