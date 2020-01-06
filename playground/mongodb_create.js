const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (error, client) =>{

if (error) {
  return console.log("Unable to Connect to the Server");
}
console.log("Connected Sucessfully");

var db = client.db('TodoApp');
//Creating Our collections and Adding Values into them
db.collection('todos').insertOne({
assignment: 'Go to Market',
Date: '20-10-2019',
time: '1300:GMT'

}, (error, result)=>{
  if (error) {
    return console.log("Unable to Insert Data", error); // second error shows up on the terminal incase there is an error
  }
  console.log(JSON.stringify(result.ops, undefined, 2)); //result.ops Also make the result shows up on the terminal
});


db.collection('users').insertOne({
name: "Muhammad Jamiu",
age: 25,
email: 'muhjamo@hotmail.com',
phone: '+2348076543523',
Address: 'No 45 Akerebiata Off sobi Road Ilorin'

}, (error, result)=>{
  if (error) {
    return console.log("Unable to Insert Data into the collection users", error); // second error shows up on the terminal incase there is an error
  }
  console.log(JSON.stringify(result.ops, undefined, 2)); //result.ops Also make the result shows up on the terminal
});

//Important!! close the db connection
  client.close();
});
