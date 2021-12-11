const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AddonKomisiSchema = new Schema({
    file_gambar: {
        type: String
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const GambarKomisi = mongoose.model("addon_komisi", AddonKomisiSchema);
module.exports = { GambarKomisi }
