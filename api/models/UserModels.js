const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
    username: {
        type: String
    },
    email_akun: {
        type: String
    },
    nama_akun: {
        type: String
    },
    bio_akun: {
        type: String
    },
    password_user: {
        type: String
    },
    lokasi: {
        type: String
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "roleusers"
    },
    kategori: {
        type: Schema.Types.ObjectId,
        ref: "kategori_kreators"
    },
    gender_akun: {
        type: Schema.Types.ObjectId,
        ref: "genders"
    },
    layout: {
        type: Number,
    },
    image_background: {
        type: String,
    },
    image_profile: {
        type: String,
    },
    pendukung_id: [{
        type: Schema.Types.ObjectId,
        ref: "para_pendukung"
    }],
    komisi_id: [{
        type: Schema.Types.ObjectId,
        ref: "komisi_user"
    }],
    publikasi: []
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Users = mongoose.model("users", UsersSchema);
module.exports = { Users }