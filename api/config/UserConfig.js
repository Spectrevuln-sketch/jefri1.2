const { Users } = require('../models/UserModels');
const jwtDecode = require('jwt-decode');


exports.CurrentUser = async (token) => {
    const { auth_user } = jwtDecode(token);
    const CurrentUserEmail = await Users.findOne({ email_akun: auth_user }).populate('gender_akun').populate('role')
    const CurrentUserUsername = await Users.findOne({ username: auth_user }).populate('gender_akun').populate('role')
    if (CurrentUserEmail !== null || CurrentUserEmail !== undefined) {
        return JSON.stringify(CurrentUserEmail);
    } else {
        if (CurrentUserUsername !== null || CurrentUserUsername !== undefined) {
            return JSON.stringify(CurrentUserUsername)
        } else {
            return false
        }
    }

}