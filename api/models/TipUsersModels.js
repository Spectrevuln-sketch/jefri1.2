const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TipUserSchema = new Schema({
    harga_per_unit: {
        type: Number
    },
    pesan_halaman_tip: {
        type: String
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const TipUser = mongoose.model("tipusers", TipUserSchema);
module.exports = { TipUser }
