
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

// //DeleteMany From Db
// db.collection('todos').deleteMany({completed: true}).then((result) =>{ //docs is telling the query to fetch all docuents from the 'todos' collection
//
//   console.log(result);
// }, (error)=>{
//   console.log('Unable to delete Document', error);
// });


// //DeleteOne From Db
// db.collection('todos').deleteOne({completed: true}).then((result) =>{ //docs is telling the query to fetch all docuents from the 'todos' collection
//
//   console.log(result);
// }, (error)=>{
//   console.log('Unable to delete Document', error);
// });


//DeleteOne From Db
db.collection('todos').findOneAndDelete({completed: false}).then((result) =>{ //docs is telling the query to fetch all docuents from the 'todos' collection

  console.log(result);
}, (error)=>{
  console.log('Unable to delete Document', error);
});

client.close();

//recall That .findOneAndDelete helps print the object to be deleted on the terminal

});
