
//Using Object Destructuring, make an instance of MongoDB Client
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (error, client) =>{

if (error) {
  return console.log("Unable to Connect to the Server");
}
console.log("Connected Sucessfully");

//define the db
var db = client.db('TodoApp');
var db2 = client.db('test');



//Update a document in the collection [TodoApp.users] and increment the int age  by "25"
db.collection('users').findOneAndUpdate({ _id: new ObjectID('5d8ad9d58d2bf90680a6e960')}, {$set:{  name: 'Quadry Ajenifuja'}, $inc:{  age: 5}}, {returnOriginal: false}).then((result) =>{

  console.log(result);
}, (error)=>{
  console.log('Unable to delete Document', error);
});



db.collection('users').findOneAndUpdate({ _id: new ObjectID('5d8ae4e72879c90bc866f8c6')}, {$set:{  name: 'Sulieha Muhammad '}, $inc:{  age: -10}}, {returnOriginal: false}).then((result) =>{

  console.log(result);
}, (error)=>{
  console.log('Unable to delete Document', error);
});

client.close();

//recall That .findOneAndDelete helps print the object to be deleted on the terminal



});

// ORM ...Object Relational Mapping
