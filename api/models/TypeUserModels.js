const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenRoles = [
  {
    type: 'Creator'
  },
  {
    type: 'Penikmat Karya'
  }
]

var TypeUser = new Schema({
  type: {
    type: String
  }

});
const RoleUser = mongoose.model("roleusers", TypeUser);

for (let i = 0; i < GenRoles.length; i++) {
  const ROLE = GenRoles[i];
  RoleUser.find({})
    .then(results => {
      if (!results || results.length <= 0 || results === undefined) {
        let NewRole = new RoleUser({
          type: ROLE.type
        })
        NewRole.save()
      }
    }).catch(err => {
      console.log(err)
    })


}

module.exports = { RoleUser }
