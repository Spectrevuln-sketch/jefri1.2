const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PublicationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    publication: [],

});
const Public = mongoose.model("kreators", PublicationSchema);
module.exports = { Public }
