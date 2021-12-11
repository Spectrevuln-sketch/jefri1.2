const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GambarKomisiSchema = new Schema({
    file_gambar: {
        type: String
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const GambarKomisi = mongoose.model("gambar_komisi", GambarKomisiSchema);
module.exports = { GambarKomisi }
