/**model require */
const { Users } = require('../models/UserModels');
const { Gender } = require('../models/GenderModels');
const { RoleUser } = require('../models/TypeUserModels');
const { SocialMedia } = require('../models/social_media_data');
const { KreatorUser } = require('../models/KreatorModels');
const { LayoutKreator } = require('../models/layout_kreatorsModels');
const { TabKreator } = require('../models/tab_pengunjusModels');
const { TipUser } = require('../models/TipUsersModels');
const { KomisiUser } = require('../models/KomisiUserModels');
const { KategoriKreator } = require('../models/kategoriKreatorModels')
/**End model require */
/** Configuration Require */
const { validationResult } = require('express-validator');
const jwtDecode = require('jwt-decode');
var bcrypt = require('bcryptjs');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var { CurrentUser } = require('../config/UserConfig');
/** End  Configuration Require */


/* -------------------------------------------------------------------------- */
/*                                 AUTH USERS                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------- user registration --------------------------- */
exports.RegisterUsers = async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(404).send({ errMsg: alert });
    } else {
        const { password_user, username, email_akun, lokasi, gender_akun, nama_akun, role } = req.body;
        const GenderData = await Gender.findOne({ type_gender: gender_akun })
        if (role === undefined) {
            var UserRole = 'KREATOR';
            var hashPassword = bcrypt.hashSync(password_user, 15);
            console.log(GenderData);
            let CreateUser = new Users({
                username,
                email_akun,
                nama_akun,
                password_user: hashPassword,
                lokasi,
                role: UserRole,
                gender_akun: GenderData._id
            })
            const RegisterdUser = await CreateUser.save()
            if (RegisterdUser) {
                res.status(200).send({ message: `User Berhasil Teregistrasi Atas Nama ${RegisterdUser.nama_akun}` });
            } else {
                res.status(403).send({ message: `User Tidak berhasil Teregistrasi` });
            }
        } else {
            const UserRole = await RoleUser.findOne({ type: role });
            var hashPassword = bcrypt.hashSync(password_user, 15);
            const GenderData = await Gender.findOne({ type_gender: gender_akun })
            let CreateUser = new Users({
                username,
                email_akun,
                nama_akun,
                password_user: hashPassword,
                lokasi,
                role: UserRole._id,
                gender_akun: GenderData._id
            })
            const RegisterdUser = await CreateUser.save()
            if (RegisterdUser) {
                res.status(200).send({ message: `User Berhasil Teregistrasi Atas Nama ${RegisterdUser.nama_akun}` });
            } else {
                res.status(403).send({ message: `User Tidak berhasil Teregistrasi` });
            }
        }
    }
}
/* -------------------------------------------------------------------------- */

/* --------------------------- USER LOGIN FUNCTION -------------------------- */
exports.AuthLogin = async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(404).send({ errMsg: alert });
    } else {
        const { auth_user, password } = req.body
        const AuthUser = await Users.findOne({ username: auth_user })
        if (AuthUser !== null) {
            await bcrypt.compare(req.body, AuthUser.password_user, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    var PrivateKey = fs.readFileSync('../private.key');
                    const GenerateToken = jwt.sign(auth_user, PrivateKey, { algorithm: 'HS256' });
                    res.status(200).cookie("my_token", GenerateToken).send({ message: `Selamat Datang Kreator ${AuthUser.nama_akun}`, data: AuthUser.role });
                } else {
                    res.status(404).send({ message: `Password Salah!` })
                }
            })
        } else {
            const AuthEmail = await Users.findOne({ email_akun: auth_user })
            if (AuthEmail !== null) {
                await bcrypt.compare(password, AuthEmail.password_user, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        var PrivateKey = fs.readFileSync('../private.key');
                        const GenerateToken = jwt.sign(req.body, PrivateKey, { algorithm: 'HS256' });
                        res.status(200).cookie("my_token", GenerateToken).send({ message: `Selamat Datang ${AuthEmail.role === 1 ? 'Kreator' : 'Member'} ${AuthEmail.nama_akun}`, data: AuthEmail.role });
                    } else {
                        res.status(404).send({ message: `Password Salah!` })
                    }
                })
            }

        }
    }
}
/* -------------------------------------------------------------------------- */

/* ------------------------------ IS USER LOGIN? Let`s Check ----------------------------- */
exports.IsLogin = async (req, res) => {
    try {
        const token = req.cookies.my_token;
        if (token === undefined || !token) {
            res.json(false);
        } else {
            var PrivateKey = fs.readFileSync('../private.key');
            jwt.verify(token, PrivateKey);
            res.send(true);
        }
    } catch (err) {
        if (err) {
            res.json(false)
        }
    }
}
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                               DASHBOARD PAGE                               */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                           MENU EDIT USER KREATOR                           */
/* -------------------------------------------------------------------------- */
/* ------------------------- EDIT USER PERSONAL DATA ------------------------ */
/**
*untuk body tab_pengunjung, kategori_kreator,layout_kreator = ObjectId Masing masing Table
*
 */
exports.UserPersonalData = async (req, res) => {
    const tokenUser = req.cookies.my_token
    const { nama_akun, bio_akun, lokasi, type, gender_akun, kategori_kreator, layout_kreator, tab_pengunjung, website_link, facebook_link, youtube_link, twitter_link, instagram_link, github_link, twitch_link, spotify_link } = req.body;
    const UserData = await CurrentUser(tokenUser);
    const GenderData = await Gender.findOne({ type_gender: gender_akun })
    const UpdateUser = await Users.findOneAndUpdate({ _id: UserData._id }, {
        nama_akun,
        bio_akun,
        lokasi,
        gender_akun: GenderData._id
    })
    if (UpdateUser) {
        const UpdateSocialMedia = new SocialMedia({
            website_link,
            facebook_link,
            youtube_link,
            twitter_link,
            instagram_link,
            github_link,
            twitch_link,
            spotify_link,
            user_id: UpdateUser._id
        })
        await UpdateSocialMedia.save()

        const TypeUser = await RoleUser.findOneAndUpdate({ user_id: UpdateUser._id }, {
            type
        })
        if (TypeUser) {
            if (TypeUser.type === 'KREATOR') {
                await KreatorUser.findOneAndUpdate({ user_id: UpdateUser._id }, {
                    tab_kreator_id: tab_pengunjung,
                    kategori_kreator_id: kategori_kreator,
                    layout_kreator: layout_kreator,
                })
            }
        }
    } else {
        res.status(404).send({ message: `Data Tidak Berhasil Di update` });
    }

}
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                          TIP MENU PADA MANAGE USER                         */
/* -------------------------------------------------------------------------- */


/* ------------------------------ BUAT TIP BARU ----------------------------- */
exports.CreateNewTip = async (req, res) => {
    const tokenUser = req.cookies.my_token
    const UserData = await CurrentUser(tokenUser);
    const { harga_per_unit, pesan_halaman_tip } = req.body
    const CreateNewTip = new TipUser({
        harga_per_unit,
        pesan_halaman_tip,
        user_id: UserData._id
    })
    const TipUser = await CreateNewTip.save()
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 KOMISI MENU                                */
/* -------------------------------------------------------------------------- */
/* ---------------------------- BUAT KOMISI BARU ---------------------------- */
exports.CreateNewKomisi = async (req, res) => {
    const tokenUser = req.cookies.my_token
    const UserData = await CurrentUser(tokenUser);
    const { komisi_type, maksimal_slot, peraturan_komisi, custom_komisi } = req.body
    let Komisi = new KomisiUser({
        user_id: UserData._id,
        komisi_type,
        maksimal_slot,
        peraturan_komisi,
        custom_komisi,
    })
    const CreatedKomisi = await Komisi.save()
}
/* -------------------------------------------------------------------------- */

exports.BuatPaketKomisi = async (req, res) => {
    const { } = req.body
}


/* -------------------------------------------------------------------------- */
/*                            GLOBAL USAGE FUNCTION                           */
/* -------------------------------------------------------------------------- */
/* --------------------- CURRENT USER LOGIN IN DASHBOARD -------------------- */
exports.GetCurrentUserLogin = async (req, res) => {
    const token = req.cookies.my_token;
    const { auth_user } = jwtDecode(token);
    const CurrentUserEmail = await Users.findOne({ email_akun: auth_user }).populate('gender_akun').populate('pendukung_id')
    if (CurrentUserEmail !== null) {
        res.status(200).json(CurrentUserEmail);
    } else {
        const CurrentUserUsername = await Users.findOne({ username: auth_user }).populate('gender_akun').populate('pendukung_id');
        if (CurrentUserUsername !== null) {
            res.status(200).json(CurrentUserUsername);
        } else {
            res.status(403).json(false);
        }
    }

}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                            GET ALL DATA FUNCTION                           */
/* -------------------------------------------------------------------------- */

/* -------------------------- GET KREATOR KATEGORI -------------------------- */
exports.GetKategoriData = async (req, res) => {
    await KategoriKreator.find({})
        .populate('categories')
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).send({ message: `Data Tidak Di Temukan` })
            }
        }).catch(err => {
            console.log(err)
        })
}
/* -------------------------------------------------------------------------- */

/* ---------------------------- UPDATE USER DATA ---------------------------- */
exports.UpdateNewDataUser = async (req, res) => {
    const { user_email } = req.params
    const {
        layout,
        user_cat,
        kategori_user
    } = req.body

    const FindRole = await RoleUser.findOne({ type: user_cat })
    if (FindRole) {
        await Users.findOneAndUpdate({ email_akun: user_email }, {
            role: FindRole._id,
            kategori: kategori_user,
            layout: layout
        }).then(data => {
            res.status(200).send({ message: `Data Berhasil Di Tambahkan !` })
        }).catch(err => {
            console.log(err)
            res.status(500).send({ message: `Terjadi Kesalahan Internal` })
        })
    }
}

/* -------------------------------------------------------------------------- */

/* ---------------------------- GET ALL ROLE DATA --------------------------- */
exports.GETROLEDATA = async (req, res) => {
    await RoleUser.find({})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            console.log(err)
        })
}

/* -------------------------------------------------------------------------- */

/* -------------------------- FIND ALL GENDER DATA -------------------------- */
exports.GETGENDERDATA = async (req, res) => {
    await Gender.find({})
        .then(results => {
            res.status(200).json(results)
        }).catch(err => {
            console.log(err)
        })
}
/* -------------------------------------------------------------------------- */






