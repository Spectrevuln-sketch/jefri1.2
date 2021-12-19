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
router.post('/register-user', validate('user_register'), UserController.RegisterUsers);
// ────────────────────────────────────────────────────────────────────────────────

/* ----------------------------- USER AUTH LOGIN ---------------------------- */
router.post('/auth-login', cors(CorsConfig.option), validate('auth_login'), UserController.AuthLogin);
/* -------------------------------------------------------------------------- */
/* ----------------------------- ISLOGIN USERS? ----------------------------- */
router.get('/islogin', cors(CorsConfig.option), UserController.IsLogin);
/* -------------------------------------------------------------------------- */
/** Logout User */
router.get('/logout', cors(CorsConfig.option), UserController.Logout)
/** End Logout User */


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

/** Buat Access Tip */
router.post('/create-komisi-akses', cors(CorsConfig.option), UserController.CreateAksesKomisi)
/** End Buat Access Tip */

/** Update User */
router.post('/update-user', cors(CorsConfig.option), UserController.UpdateUser)
/** Update User  */

/* -------------------------------------------------------------------------- */
/*                               GLOBAL FUNCTION                               */
/* -------------------------------------------------------------------------- */

/* ----------------------- GET CURRENT USER LOGIN DATA ---------------------- */
router.get('/current-user-login', cors(CorsConfig.option), UserController.GetCurrentUserLogin);
/* -------------------------------------------------------------------------- */

/* ------------------------ Get All Kreator Kategori ------------------------ */
router.get('/kategori-kreator', cors(CorsConfig.option), UserController.GetKategoriData)
/* -------------------------------------------------------------------------- */

/** UPDATE USER DATA */
router.post('/update-data-user/:user_email', cors(CorsConfig.option), UserController.UpdateNewDataUser)
/** END UPDATE USER DATA */
/** GET ROLE DATA */
router.get('/get-roles', cors(CorsConfig.option), UserController.GETROLEDATA)
/** END GET ROLE DATA */


/** GET GENDER DATA */
router.get('/get-genders', cors(CorsConfig.option), UserController.GETGENDERDATA)
/** END GET GENDER DATA */

/** GET PUBLICATION */
router.get('/get-publication', cors(CorsConfig.option), UserController.GETPUBLIC)
/** eND GET PUBLICATION */
router.post('/post-public', cors(CorsConfig.option), UserController.UploadPublication)


module.exports = router