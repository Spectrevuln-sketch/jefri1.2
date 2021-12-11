var express = require('express');
var router = express.Router();
var cors = require('cors')
const UserController = require('../controllers/UsersControllers');
const { validate } = require('../config/validation');
//
// ─── CONFIG SETUP ───────────────────────────────────────────────────────────────
//
const CorsConfig = require('../config/corsConf');

// ────────────────────────────────────────────────────────────────────────────────


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: U S E R   A U T H : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

//
// ─── USER KREATOR Register ────────────────────────────────────────────────────────
//
router.post('/register-user', cors(CorsConfig.option), validate('user_register'), UserController.RegisterUsers);
// ────────────────────────────────────────────────────────────────────────────────

/* ----------------------------- USER AUTH LOGIN ---------------------------- */
router.post('/auth-login', cors(CorsConfig.option), validate('auth_login'), UserController.AuthLogin);
/* -------------------------------------------------------------------------- */
/* ----------------------------- ISLOGIN USERS? ----------------------------- */
router.get('/islogin', cors(CorsConfig.option), UserController.IsLogin);
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              MENU ATUR PROFILE                             */
/* -------------------------------------------------------------------------- */
/* ---------------------------- UPDATE USER DATA ---------------------------- */
router.post('/update-user-data', cors(CorsConfig.option), UserController.UserPersonalData)
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  MENU TIP                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------ BUAT TIP BARU ----------------------------- */
router.post('/create-new-tip', cors(CorsConfig.option), UserController.CreateNewTip);
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               GLOBAL FUNCTION                               */
/* -------------------------------------------------------------------------- */

/* ----------------------- GET CURRENT USER LOGIN DATA ---------------------- */
router.get('/current-user-login', cors(CorsConfig.option), UserController.GetCurrentUserLogin);
/* -------------------------------------------------------------------------- */

/* ------------------------ Get All Kreator Kategori ------------------------ */
router.get('/kategori-kreator', cors(CorsConfig.option), UserController.GetKategoriData)
/* -------------------------------------------------------------------------- */

module.exports = router