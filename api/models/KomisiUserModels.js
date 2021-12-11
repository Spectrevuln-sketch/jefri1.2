const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KomisiSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    komisi_type: {
        type: Boolean
    },
    maksimal_slot: {
        type: Number
    },
    peraturan_komisi: {
        type: String
    },
    custom_komisi: {
        type: Number
    },
    paket_komisi_id: {
        type: Number
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const KomisiUser = mongoose.model("komisi_user", KomisiSchema);
module.exports = { KomisiUser }
