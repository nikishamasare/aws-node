var config = require('./config');
var express=require("express");
var bodyParser=require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var app = express();
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
   res.header('Content-Type', 'application/json; charset=UTF-8',);
   res.header('Accept', 'application/json');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
/* route to handle login and registration */
app.post('/api/register',registerController.userRegister);
app.post('/api/authenticate',authenticateController.userAuthenticate);
app.listen(8080);