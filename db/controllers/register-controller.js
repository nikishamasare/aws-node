var registerService = require('../service/register-service');
var userRegister = function (req,res){
    registerService.register(req,res);
}
module.exports = {
    userRegister : userRegister
}

// module.exports.userRegister();