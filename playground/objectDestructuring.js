// const MongoClient = require('mongodb').MongoClient;

//Using Object Destructuring To Pull out Variables and Functions From MongoDB client
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (error, client) =>{

if (error) {
  return console.log("Unable to Connect to the Server");
}
console.log("Connected Sucessfully");


client.close();

});
