const mysql = require("mysql");

var conn=mysql.createConnection({host:"anuradha-mp01-dbserver.mysql.database.azure.com", user:"mp01dbuser", password:"LB3jG03iswb2qx1", database:"anuradhamp01DB", port:3306, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});

module.exports = connection;
