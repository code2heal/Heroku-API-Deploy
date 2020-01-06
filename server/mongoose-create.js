var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

//create an instancew of mongoose that connect to a new/ existing Db [codingClass]
mongoose.connect('mongodb://localhost:27017/codingClass', {useNewUrlParser: true});

//define a schematics of your db meaning columns, rows and data types
const codingSchema = new Schema({

  language:{type: String},
  duration: {type: String},
  rating: {type: Number},
  certified: {type: Boolean},
  date: {type: Date, default: Date.now}
});

const stdDetailsSchematics = new Schema({
  firstname:{type: String},
  lastname:{type: String},
  age:{type: Number},
  phone_number:{type: String},
  favourite_quote:{type: String},
  ambition:{type: String}
});


const studentDetails = mongoose.model('studentDetails', stdDetailsSchematics);

const student1 = new studentDetails({
firstname: 'Kamaldeen',
lastname: 'Lukman',
age: 24,
phone_number: '+2348076543341',
favourite_quote: 'never give up',
ambition: 'medical lawyer'

});

const student2 = new studentDetails({
firstname: 'Ibraheem',
lastname: 'Muhammad',
age: 30,
phone_number: '+23480346543563',
favourite_quote: 'No Matter What Keep Moving On',
ambition: 'Paediatric Surgeon'

});

//Define your collection
const courses = mongoose.model('courses', codingSchema);

//create a object variables that defines your Key Value:pairs
const course0 = new courses({
  language: '.NetCore',
  duration: '25 Days',
  rating: 4.27,
  certified: true
});


var course1 = new courses({
  language: 'Javascript',
  duration: '40 Days',
  rating: 4.0,
  certified: true
});

var course2 = new courses({
  language: 'HTML',
  duration: '20 Days',
  rating: 4.3,
  certified: true
});

var course3 = new courses({
  language: 'Advance Css',
  duration: '45 Days',
  rating: 4.5,
  certified: true
});



// //save your Data to the database with callbacks
// course.save((error) => {
//
// if (error){
//   return console.log(`Error has occured: ${error}`);
// }
// console.log("saved Sucessfully");
//

//save your Data to the database with callbacks
course0.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')
});

course1.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')
});

course2.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')
});

course3.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')
});


student1.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')
});

student2.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')

});
