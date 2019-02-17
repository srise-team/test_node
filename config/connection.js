const mysql = require("mysql");
const dbconfig = require('./database');
const connection = mysql.createConnection(dbconfig.connection);

module.exports = connection ; 