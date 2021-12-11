const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ParaPendukungSchema = new Schema({
    pendukung_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    pesan_pendukung: {
        type: String
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const ParaPendukung = mongoose.model("para_pendukung", ParaPendukungSchema);
module.exports = { ParaPendukung }
