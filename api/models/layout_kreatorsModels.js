const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LayoutKreatorSchema = new Schema({
  tab_type: {
    type: String
  }
});
const LayoutKreator = mongoose.model("layout_kreators", LayoutKreatorSchema);
module.exports = { LayoutKreator }
