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

var multer = require('multer')
var Upload = require('../config/UploadFile');
/** End  Configuration Require */


/* -------------------------------------------------------------------------- */
/*                                 AUTH USERS                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------- user registration --------------------------- */
exports.RegisterUsers = async (req, res) => {
    const { password_user, username, email, role } = req.body;
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(404).send({ errMsg: alert });
    } else {
        console.log(req.body)
        if (role === undefined) {
            const { password_user, username, email, role } = req.body;
            var DefaultRole = 'KREATOR';
            var hashPassword = bcrypt.hashSync(password_user, 15);
            let CreateUser = new Users({
                username,
                email_akun: email,
                password_user: hashPassword,
                role: DefaultRole,
            })
            const RegisterdUser = await CreateUser.save()
            console.log(RegisterdUser)
            if (RegisterdUser) {
                res.status(200).send({ message: `User Berhasil Teregistrasi Atas Nama ${RegisterdUser.username}` });
            } else {
                res.status(403).send({ message: `User Tidak berhasil Teregistrasi` });
            }
        } else {
            const { password_user, username, email, role } = req.body;
            const UserRole = await RoleUser.findOne({ type: role });
            var hashPassword = bcrypt.hashSync(password_user, 15);
            let CreateUser = new Users({
                username,
                email_akun: email,
                password_user: hashPassword,
                role: UserRole
            })
            const RegisterdUser = await CreateUser.save()
            if (RegisterdUser) {
                res.status(200).send({ message: `User Berhasil Teregistrasi Atas Nama ${RegisterdUser.username}` });
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
        const payloadData = {
            auth_user: AuthUser.username
        }
        if (AuthUser !== null) {
            await bcrypt.compare(password, AuthUser.password_user, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {

                    var PrivateKey = fs.readFileSync('private.key');
                    const GenerateToken = jwt.sign(payloadData, PrivateKey, { algorithm: 'HS256' });
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
                        var PrivateKey = fs.readFileSync('private.key');
                        const GenerateToken = jwt.sign(payloadData, PrivateKey, { algorithm: 'HS256' });
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
    const TipData = await CreateNewTip.save()
    console.log(TipData)
    if (TipData !== null) {
        res.status(200).send({ message: `Tip Berhasil Di Simpan` })
    } else {

        res.status(400).send({ message: `Tip Tidak Berhasil Di Simpan` })
    }
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
    if (CreatedKomisi !== null) {
        res.status(200).send({ message: `Komisi Berhasil Di Simpan` })
    } else {
        res.status(400).send({ message: `Komisi Berhasil Di Simpan` })
    }
}
/* -------------------------------------------------------------------------- */

exports.BuatPaketKomisi = async (req, res) => {
    const { } = req.body
}



/** Create Komisi Data */
exports.CreateAksesKomisi = async (req, res) => {
    const tokenUser = req.cookies.my_token
    const {
        access,
        min_harga
    } = req.body
    const UserData = await CurrentUser(tokenUser);
    const CreateKomisi = new KomisiUser({
        komisi_type: access,
        maksimal_slot: min_harga,
        user_id: UserData._id
    })

    await CreateKomisi.save()
        .then(data => {
            res.status(200).send({ message: `Berhasil Di Simpan` })

        }).catch(err => {
            res.status(400).send({ message: `Data Tidak Berhasil Di Simpan` })
        })
}


/*** Update User Data */
var imageTask = Upload.fields([{ name: 'upload_background', maxCount: 1 }, { name: 'upload_picture', maxCount: 1 }])
exports.UpdateUser = async (req, res) => {

    imageTask(req, res, (err) => {
        if (req.fileValidationError) {
            return res.status(400).send({ message: `${req.fileValidationError}` });
        }
        if (err instanceof multer.MulterError) {
            return res.status(501).send(err.code);
        }
        if (err) {
            return res.status(502).send({ message: err });
        }
        if (!req.files) {
            return res.status(404).send({ message: 'Harap Uplaod Gambar Dahulu' });
        }
        if (req.files && !err && !req.fileValidationError) {

            const tokenUser = req.cookies.my_token
            const payload = jwtDecode(tokenUser)
            if (tokenUser) {


                const upload_background = req.files.upload_background[0]
                const upload_picture = req.files.upload_picture[0]

                console.log('BACKGROUND', upload_background)
                console.log('PICC', upload_picture)
                const { nama_akun, location, role } = req.body
                RoleUser.findOne({ type: role }).then(current_role => {
                    Users.findOneAndUpdate({ username: payload.auth_user }, {
                        nama_akun,
                        lokasi: location,
                        role: current_role._id,
                        image_background: upload_background.filename,
                        image_profile: upload_picture.filename
                    })
                        .then(data => {
                            res.status(200).send({ message: `Data Berhasil di Simpan !` })
                        }).catch(err => {
                            console.log(err)
                            res.status(401).send({ message: `Data Tidak berhasil di simpan !` })
                        })
                })




            }
        }
    })
}
/*** End  Update User Data */


/* Logout Admin */
exports.Logout = async (req, res) => {
    const token = req.cookies.my_token;
    if (token) {
        res.cookie("my_token", "", {
            httpOnly: true,
            expires: new Date(0)
        }).send({ message: 'Success Logout' });
    } else {
        res.status(500).send({ message: "Token Tidak Ditemukan" });
    }
}
/* End Logout Admin */


/* -------------------------------------------------------------------------- */
/*                            GLOBAL USAGE FUNCTION                           */
/* -------------------------------------------------------------------------- */
/* --------------------- CURRENT USER LOGIN IN DASHBOARD -------------------- */
exports.GetCurrentUserLogin = async (req, res) => {
    const token = req.cookies.my_token;
    const tokenUser = jwtDecode(token);
    const CurrentUserEmail = await Users.findOne({ email_akun: tokenUser.auth_user }).populate('gender_akun').populate('role')
    const CurrentUserUsername = await Users.findOne({ username: tokenUser.auth_user }).populate('gender_akun').populate('role');
    if (CurrentUserEmail !== null) {
        res.status(200).json(CurrentUserEmail);
    } else {
        if (CurrentUserUsername !== null) {
            res.status(200).json(CurrentUserUsername);
        } else {
            res.status(403).json(false);
        }
    }

}
/* -------------------------------------------------------------------------- */

/*** Upload Publication */
var imageTask = Upload.fields([{ name: 'upload_publikasi', maxCount: 1 }])
exports.UploadPublication = async (req, res) => {

    imageTask(req, res, (err) => {
        if (req.fileValidationError) {
            return res.status(400).send({ message: `${req.fileValidationError}` });
        }
        if (err instanceof multer.MulterError) {
            return res.status(501).send(err.code);
        }
        if (err) {
            return res.status(502).send({ message: err });
        }
        if (!req.files) {
            return res.status(404).send({ message: 'Harap Uplaod Gambar Dahulu' });
        }
        if (req.files && !err && !req.fileValidationError) {

            const tokenUser = req.cookies.my_token
            const payload = jwtDecode(tokenUser)
            if (tokenUser) {


                const upload_background = req.files.upload_publikasi[0]

                Users.findOneAndUpdate({ username: payload.auth_user }, {
                    $addToSet: {
                        publikasi: upload_background.filename
                    }
                })
                    .then(data => {
                        res.status(200).send({ message: `Data Berhasil di Simpan !` })
                    }).catch(err => {
                        console.log(err)
                        res.status(401).send({ message: `Data Tidak berhasil di simpan !` })
                    })
            }
        }
    })
}
/*** End  Upload Publication */



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


/** Get Public Data */
exports.GETPUBLIC = async (req, res) => {

}
/** End Get Public Data */






