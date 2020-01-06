const {mongoose} = require('./../server/db/mongoose_connect');

const {courses} = require('../server/models/user_course');
const  {studentDetails} = require('../server/models/user_data.js');


//Using Object Destructuring To Pull out Variables and Functions From MongoDB client
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

var id_course = "5df0f2d7953bdd0214d91119";

var id_students = "5df0eb88cda494025042daf3";

if(!ObjectID.isValid(id_students)){
  console.log('ID is not Valid');
}

if(!ObjectID.isValid(id_course)){
  console.log('ID is not Valid');
}

courses.find({
  _id: id_course
}).then((course)=>{
  console.log('Courses', course);
});


courses.findOne({
  _id: id_course
}).then((course)=>{
  console.log('Course', course);
});


//From studentDetails Model
studentDetails.findById(id_students).then((details)=>{
  if(!details){
    return console.log('Id Not Found On the database'); // Note the word return prevent other scripts from running onwards
  }
  console.log(JSON.stringify(details, undefined, 2));
}, (e)=>{
  console.log(e);
});
