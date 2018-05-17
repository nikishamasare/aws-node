var authenticateService = require('../service/authenticate-service');
var userAuthenticate = function (req,res){
    authenticateService.userAuthenticate(req,res);
}

module.exports = {
    userAuthenticate : userAuthenticate
}
