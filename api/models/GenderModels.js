const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GEN_GENDER = [
    { type_gender: "Male" },
    { type_gender: "Female" },
    { type_gender: "Other" },
]

var GendersSchema = new Schema({
    type_gender: {
        type: String
    }
});
const Gender = mongoose.model("genders", GendersSchema);

for (let i = 0; i < GEN_GENDER.length; i++) {
    const GenGendersData = GEN_GENDER[i];
    Gender.find({})
        .then(genders => {
            if (!genders || genders === undefined || genders.length <= 0) {
                const NewGender = new Gender({
                    type_gender: GenGendersData.type_gender
                })

                NewGender.save()
            }
        }).catch(err => {
            console.log(err)
        })
}



module.exports = { Gender }
