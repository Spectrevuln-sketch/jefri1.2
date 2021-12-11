var bcrypt = require('bcryptjs');
var fs = require('fs');

exports.ComparePassowrd = (password, CompareWith) => {
  bcrypt.compare(password, CompareWith, (err, isMatch) => {
    if (err) throw err;
    // console.log(isMatch)
    if (isMatch) {
      return true
    } else {
      return false
    }
  })
}