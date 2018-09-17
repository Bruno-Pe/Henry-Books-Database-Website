var mysql      = require('mysql');
var connection = mysql.createConnection({
  //change to work on your host
  host     : 'localhost', 
  user     : 'root', 
  password : 'password', 
  database : 'books' 
});
 
connection.connect();//establish connection
 
module.exports = connection;//export connection for use with app.js