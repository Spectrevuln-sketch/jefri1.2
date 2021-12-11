const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TabKreatorSchema = new Schema({
  tab_type: {
    type: String
  },
});
const TabKreator = mongoose.model("tab_pengunjungs", TabKreatorSchema);
module.exports = { TabKreator }
