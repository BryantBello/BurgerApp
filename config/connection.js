var mysql = require("mysql");


var connection = mysql.CreateConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect();

module.exports = connection;
