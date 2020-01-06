

var mongoose = require('mongoose')


 const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstname:{type: String},
  lastname:{type: String},
  age:{type: Number},
  phone_number:{type: String},
  favourite_quote:{type: String},
  life_ambition:{type: String}
});

//Define your collection
const studentDetails = mongoose.model('studentdetails', userSchema);


module.exports = {studentDetails};
