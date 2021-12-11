const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PaketKomisiSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    judul_komisi: {
        type: String
    },
    harga_lokal_komisi: {
        type: Number
    },
    tag_komisi: {
        type: String
    },
    kategori_komisi_id: {
        type: Number
    },
    harga_internasional_komisi: {
        type: Number
    },
    perkiraan_hari: {
        type: Number
    },
    deskripsi_komisi: {
        type: String
    },
    file_gambar_komisi: {
        type: Schema.Types.ObjectId,
        ref: "gambar_komisi"
    },
    keterangan_tambahan: {
        type: String
    },
    addon_komisi_id: {
        type: Schema.Types.ObjectId,
        ref: "addon_komisi"
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const PaketKomisi = mongoose.model("paket_komisi", PaketKomisiSchema);
module.exports = { PaketKomisi }
