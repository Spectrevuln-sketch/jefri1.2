const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SubKatSchema = new Schema({
    description: {
        type: String
    },
    name: {
        type: String
    },
    parent_id: {
        type: Schema.Types.ObjectId,
        ref: "kategori_kreators"
    },
    status: {
        type: String
    },
    updated_at: {
        type: Date
    },
    created_at: {
        type: Date
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const SUB_KAT = mongoose.model("sub_kat", SubKatSchema);
module.exports = { SUB_KAT }
