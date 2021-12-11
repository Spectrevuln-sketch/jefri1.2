var express = require('express');
var router = express.Router();
var cors = require('cors')
const { validate } = require('../config/validation');
const CorsConfig = require('../config/corsConf');
/** Controlers here */
const AuthControllers = require('../controllers/AuthControllers')

/** End Controlers here */


/** Check Login User */
router.get('/islogin', cors(CorsConfig.option), AuthControllers.Islogin);
/** Allow Login */
router.post('/get-login', cors(CorsConfig.option), AuthControllers.LoginUser);
/** Register User */
router.post('/register-user', cors(CorsConfig.option), AuthControllers.RegisterUser);
/** Register Kreator */
router.post('/register-kreator', cors(CorsConfig.option), AuthControllers.RegisterCreator);

module.exports = router;
