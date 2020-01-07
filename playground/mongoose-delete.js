const {mongoose} = require('./../server/db/mongoose_connect');

const {courses} = require('../server/models/user_course');
const  {studentDetails} = require('../server/models/user_data.js');


//There are three ways to remove files from db
//
// //001.....
// courses.remove({}) .then((result)=>{
//   console.log(result);
// });
//
// //002
// studentDetails.findOneAndRemove('properties').then((doc)=>{
//   console.log(doc);
// });


//003
courses.findByIdAndRemove('5df29e6ba19bef100cf4eb02').then((details)=>{
  console.log(details);
});
