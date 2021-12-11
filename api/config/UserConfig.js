const { Users } = require('../models/UserModels');
const jwtDecode = require('jwt-decode');


exports.CurrentUser = async (token) => {
    const { auth_user } = jwtDecode(token);
    const CurrentUserEmail = await Users.findOne({ email_akun: auth_user }).populate('gender_akun').populate('pendukung_id')
    if (CurrentUserEmail !== null) {
        return CurrentUserEmail;
    } else {
        const CurrentUserUsername = await Users.findOne({ username: auth_user }).populate('gender_akun').populate('pendukung_id');
        if (CurrentUserUsername !== null) {
            return CurrentUserUsername
        } else {
            return false
        }
    }

}