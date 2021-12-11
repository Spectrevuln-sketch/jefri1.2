const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GendersSchema = new Schema({
    type_gender: {
        type: String
    }
});
const Gender = mongoose.model("genders", GendersSchema);
module.exports = { Gender }
