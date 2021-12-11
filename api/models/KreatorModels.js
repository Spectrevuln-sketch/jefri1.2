const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KreatorSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  kategori_kreator_id: {
    type: Schema.Types.ObjectId,
    ref: "kategori_kreators"
  },
  layout_kreator: {
    type: Schema.Types.ObjectId,
    ref: "layout_kreators"
  },
  tab_kreator_id: {
    type: Schema.Types.ObjectId,
    ref: "tab_pengunjungs"
  }
});
const KreatorUser = mongoose.model("kreators", KreatorSchema);
module.exports = { KreatorUser }
