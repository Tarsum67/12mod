const mysql = require("mysql12");
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"employees"
});
connection.conneect(function(err){
    if (err)throw err;
});
module.exports = connection;