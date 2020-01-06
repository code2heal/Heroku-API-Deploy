const expect = require('expect');
const request  = require('supertest');

const {app} = require('./../user_server.js');
const {studentDetails} = require('./../models/user_data.js'); // create a collection /models

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


const details = [{
  _id: new ObjectID(),
  firstname:"Muhammad",
  lastname:"Abdullahi",
  age: 22,
  phone_number: 23480564324107,
  favourite_quote: "Strive to get rich or die trying Its your choice",
  life_ambition: "Millionaire"
},
{
  _id: new ObjectID(),
  firstname:  "Lukman",
  lastname:  "AbdulMuhmeen",
  age:   20,
  phone_number:   23470333432317,
  favourite_quote:   "Move like a butterfly Sting like a bee",
  life_ambition:    "Cardiothoracic Surgeon"
}];

beforeEach((done)=>{
  studentDetails.deleteMany({}).then(()=> {
    studentDetails.insertMany(details);
  }).then(()=>done());
});
//
describe('POST /details', () =>{
  it('Should Create a new course Module', (done) =>{

   var firstname = "Abdulkareem";

    //To make a request, when request status is correct
    request(app)
    .post('/details')
    .send({firstname}) // using ES6
    .expect(200) // status code
    .expect((res)=>{
      expect(res.body.firstname).toBe(firstname);

    })
    .end((error, res)=>{
      if(error){
        return done(error); // this return the error and break out the code from the stack
      }

      studentDetails.find({firstname}).then((details)=>{
        expect(details.length).toBe(1);
        expect(details[0].firstname).toBe(firstname);
        done();
      }).catch((e)=> done(e));
    });

  });

  //Make a request when request status is bad
  it('should Not Create anything provided we request for bad data', (done)=>{

    request(app)
    .post('/details')
    .send({}) // using ES6
    //we Do Not Need to make assertiin for the body since its not provided here
    .expect(400) // status code
    .end((error, res)=>{
      if(error){
          return done(error); // this return the error and break out the code from the stack
      }

    studentDetails.find().then((details)=>{
        expect(details.length).toBe(2); //expected that beforeEach() runs before the above,would have wiped out the db contents, thus length of db would have been zero
        done();
      }).catch((e)=> done(e));
    });

  });
  });


//Request for the content of the // DEBUG:
describe('GET /details', () =>{
  it('Should Get All course Module', (done) =>{
    //To make a request, when request status is correct
    request(app)
    .get('/details')
    //.send({tutor}) // using ES6
    .expect(200) // status code
    .expect((res)=>{
      expect(res.body.details.length).toBe(2);

    })
    .end(done);
  });
});

describe('GET /details/:id', ()=>{
  it('Should Return Expected Details', (done)=>{
    request(app)
    .get(`/details/${details[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.details.firstname).toBe(details[0].firstname);
    })
    .end(done);
  });
});


it('should return 404 if details Not Found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/detail/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/details/123abc')
      .expect(404)
      .end(done);
  });
