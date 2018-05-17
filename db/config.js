var mysql = require('../../node_modules/mysql');
var con = mysql.createConnection({
  host: "partease.cwmmhqq47tge.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "mysqlawsadmin",
  password: "Amazonwebservices123",
  database: "partease"
});
con.connect(function(err) {
  if (err) {
	  console.log('error',err)
  }else{
	console.log("Connected!");  
  }
  
});
module.exports = con;
