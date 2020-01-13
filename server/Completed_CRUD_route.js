require('./config/config.js');

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose_connect_local_or_heroku.js'); //create a connection to mongose and create a db
var {studentDetails} = require('./models/user_data.js'); // create a collection /models

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

var app = express(); // start the express server

app.use(bodyParser.json()); // middleware to accept post request of objects json format
app.use(bodyParser.urlencoded({extended: true})); // middleware to encode url


//Setting Up enviroment Variable for heroku

const port = process.env.PORT;

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


app.get('/details/:id', (req, res)=>{
  var id = req.params.id;

if(!ObjectID.isValid(id)){
  return res.status(404).send();
}

studentDetails.findById(id).then((details)=>{
  if(!details){
    return res.status(404).send();
  }
  res.send({details});
}).catch((e)=>{
  res.status(400).send();
});
});


//To delete a Documents
app.delete('/details/:id', (req, res)=>{
  // get the id
  var id = req.params.id;

  //Validate the id
  if(!ObjectID.isValid(id)){
    return res.status(404).send(); // Only proceed unless this is executed (return) set the status error to 404 And send and Empty response;
  }
    //if Not Deleted
  studentDetails.findByIdAndRemove(id).then((details)=>{
    if(!details){
      return res.status(404).send();
    }
    //Else
    res.send({details});
  }).catch((e)=>{
    res.status(400).send();
  });
});


//To Update Document
app.patch('/details/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['firstname', 'lastname', 'age', 'phone_number', 'favourite_quote', 'life_ambition']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send(); // Only proceed unless this is executed (return) set the status error to 404 And send and Empty response;
  }

  //Custom Check Not Really Neccesary
// if (_.isNumber(body.age)) {
//   body.age = new Date().getTime();
// } else{
//   body.age = null;
// }

studentDetails.findByIdAndUpdate(id, {$set: body}, {new: true}).then((details)=>{
  if (!details) {
    res.status(404).send();
  }
  res.send({details});
}).catch((e)=>{
  res.status(400).send();
})

});
app.listen(port, ()=>{
  console.log(`Satrted on Port ${port}`);
});


module.exports = {app}; // using ES6 Notations
