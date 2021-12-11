const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TypeUser = new Schema({
  type: {
    type: String
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});
const RoleUser = mongoose.model("roleusers", TypeUser);
module.exports = { RoleUser }
