

var mongoose = require('mongoose')


const Schema = mongoose.Schema;

const userDetails = new Schema({


  tutor:{type: String},
  duration: {type: String},
  rating: {type: Number, default: null},
  certified: {type: Boolean},
  date: {type: Date, default: Date.now}
});

//Define your collection
const courses = mongoose.model('courses', userDetails);


module.exports = {courses};
