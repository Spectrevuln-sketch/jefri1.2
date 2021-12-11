const { check, validationResult } = require('express-validator');
/** Include Models */
const { Users } = require('../models/UserModels')
/** End Models */
exports.validate = (method) => {
    switch (method) {
        /* Validate user Register Page */
        case 'auth_login': {
            return [
                check('auth_user')
                    .notEmpty().withMessage('Username / Email Tidak Boleh Kosong !'),
                check('password')
                    .notEmpty().withMessage('Password tidak boleh kosong !')
                    .isLength({ min: 5 }).withMessage('Password Minimal 5 Karakter !')
            ]
        }
    }
    switch (method) {
        /* Validate user Register Page */
        case 'user_register': {
            return [
                check('username')
                    .notEmpty().withMessage('Username Harus Di isi !')
                    .custom(username => {
                        return Users.findOne({ where: { username: username } }).then(result => {
                            if (result) {
                                return Promise.reject('Username Sudah Di Gunakan');
                            }
                        })
                    }),
                check('nama_akun')
                    .notEmpty().withMessage('Nama Harus Di isi !'),
                check('email_akun')
                    .notEmpty().withMessage('Email Harus Di isi !')
                    .isEmail().withMessage('Format Email Salah !')
                    .custom(email => {
                        return Users.findOne({ where: { email_akun: email } }).then(result => {
                            if (result) {
                                return Promise.reject('Email Sudah Di Gunakan');
                            }
                        })
                    }),
                check('password_user')
                    .notEmpty().withMessage('Password Tidak Boleh Kosong !')
                    .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
            ]
        }

    }



}