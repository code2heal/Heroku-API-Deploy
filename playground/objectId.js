const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (error, client) =>{

if (error) {
  return console.log("Unable to Connect to the Server");
}
console.log("Connected Sucessfully");

var db = client.db('TodoApp');
//Creating Our collections and Adding Values into them
db.collection('testObj').insertOne({
assignment: 'Travel to Kano',
Date: '13th of December, 2019',
time: '1700:GMT'

}, (error, result)=>{
  if (error) {
    return console.log("Unable to Insert Data", error); // second error shows up on the terminal incase there is an error
  }
  //Print The Id And the time of creattion
  console.log(JSON.stringify(result.ops + " " + result.ops[0]._id.getTimestamp())); //result.ops Also make the result shows up on the terminal
});

//Using Object destructuring
var user = {name: 'Math', age: 56};
var {name} = user;
console.log(name);

client.close();
});
