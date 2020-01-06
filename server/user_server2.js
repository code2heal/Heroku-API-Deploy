var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose_connect.js'); //create a connection to mongose and create a db
var {studentDetails} = require('./models/user_data.js'); // create a collection /models


var app = express(); // start the express server

app.use(bodyParser.json()); // middleware to accept post request of objects json format
app.use(bodyParser.urlencoded({extended: true})); // middleware to encode url

//create a doc call todos
app.post('/details', (req, res) =>{
  // console.log(req.body);


  var users = new studentDetails({
      //requesting the text content of the body
      firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    phone_number: req.body.phone_number,
    favourite_quote:  req.body.favourite_quote,
    life_ambition:  req.body.life_ambition
    });

  users.save().then((doc)=>{
  res.send(doc);
  }, (e)=>{
  res.status(400).send(e);

  client.close();
  });
});


// Read all Our Todos in the collection
app.get('/details', (req, res)=>{
  studentDetails.find().then((details)=>{
    res.send({details});
  }, (e)=>{
     res.status(400).send(e);
  });


});

app.listen(3000, ()=>{
  console.log('App Started On Port 3000');
});


module.exports = {app}; // using ES6 Notations
