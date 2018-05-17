var connection = require('./../config');
var userAuthenticate = function (req,res){
    var email = req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM users where email = ?',[email], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          if(results.length > 0) {
            if(password == results[0].password) {
                res.json({
                    status : true,
                    message : 'successfully authenticated'
                })
            } else {
                res.json({
                    status : false,
                    message : 'Email and password not match'
                })
            }
          } else {
                res.json({
                status:false,    
                message:"Email does not exits"
            });
            }
      }
    });
}

module.exports = {
    userAuthenticate : userAuthenticate
}
