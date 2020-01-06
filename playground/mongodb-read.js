
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

//Pull Out All The content of 'todos''s collection from the 'TodoApp' db
db.collection('todos').find().toArray().then((docs) =>{ //docs is telling the query to fetch all docuents from the 'todos' collection

  console.log('todos');
  console.log(JSON.stringify(docs, undefined, 2));

}, (error)=>{
  console.log('Unable to Fetch Todos in the db', error);
});


//Pull Out All The content of 'users''s collection from the 'TodoApp' db with the condition
db.collection('users').find({name: 'Math Fred'}).toArray().then((docs) =>{

  console.log('users');
  console.log(JSON.stringify(docs, undefined, 2));

}, (error)=>{
  console.log('Unable to Fetch Todos in the db', error);
});


//Pull Out All The content of 'users''s collection from the 'TodoApp' db with the given '_id'
db.collection('users').find({_id: new ObjectID("5d8adb51e0820a17280cf084")}).toArray().then((docs) =>{

  console.log('users');
  console.log(JSON.stringify(docs, undefined, 2));

}, (error)=>{
  console.log('Unable to Fetch Todos in the db', error);
});


//Count All documentys inside the collection 'users'
db.collection('users').find().count().then((count) =>{

  console.log(`users count: ${count}`);

}, (error)=>{
  console.log('Unable to Fetch Todos in the db', error);
});

//Pull Out All The content of 'TestDb''s collection from the 'test' db
db2.collection('TestDb').find().toArray().then((docs) =>{

  console.log('TestDb');
  console.log(JSON.stringify(docs, undefined, 2));

}, (error)=>{
  console.log('Unable to Fetch Todos in the db', error);
});


client.close();
});
