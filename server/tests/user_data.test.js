// const expect = require('expect');
// const request  = require('supertest');
//
// const {app} = require('./../user_server.js');
// const {studentDetails} = require('./../models/user_data.js');
//
//
// const details = [{
//   firstname:"Nurudeen",
//   lastname:"Kamaludeeen",
//   age: 32,
//   phone_number: 2347056432107,
//   favourite_quote: "its Your choice to Do Good But, Remember Nobody get out of life alive",
//   life_ambition: "Futurist"
// },
// {
//   firstname:  "Uthman",
//   lastname:  "Salahudeen",
//   age:   65,
//   phone_number:   2349054343217,
//   favourite_quote:   "All Those things arround you called life are made by people who are not smarter than you",
//   life_ambition:    "Medicat Technician"
// }];
//
// beforeEach((done)=>{
//   studentDetails.deleteMany({}).then(()=> {
//     studentDetails.insertMany(details);
//   }).then(()=>done());
// });
// //
// describe('POST /details', () =>{
//   it('Should Create a new course Module', (done) =>{
//
//    var firstname = "Abdulkareem";
//
//     //To make a request, when request status is correct
//     request(app)
//     .post('/details')
//     .send({firstname}) // using ES6
//     .expect(200) // status code
//     .expect((res)=>{
//       expect(res.body.firstname).toBe(firstname);
//
//     })
//     .end((error, res)=>{
//       if(error){
//         return done(error); // this return the error and break out the code from the stack
//       }
//
//       studentDetails.find({firstname}).then((details)=>{
//         expect(details.length).toBe(1);
//         expect(details[0].firstname).toBe(firstname);
//         done();
//       }).catch((e)=> done(e));
//     });
//
//   });
//
//   //Make a request when request status is bad
//   it('should Not Create anything provided we request for bad data', (done)=>{
//
//     request(app)
//     .post('/details')
//     .send({}) // using ES6
//     //we Do Not Need to make assertiin for the body since its not provided here
//     .expect(400) // status code
//     .end((error, res)=>{
//       if(error){
//           return done(error); // this return the error and break out the code from the stack
//       }
//
//     studentDetails.find().then((details)=>{
//         expect(details.length).toBe(2); //expected that beforeEach() runs before the above,would have wiped out the db contents, thus length of db would have been zero
//         done();
//       }).catch((e)=> done(e));
//     });
//
//   });
//   });
//
//
// //Request for the content of the // DEBUG:
// describe('GET /details', () =>{
//   it('Should Get All course Module', (done) =>{
//     //To make a request, when request status is correct
//     request(app)
//     .get('/details')
//     //.send({tutor}) // using ES6
//     .expect(200) // status code
//     .expect((res)=>{
//       expect(res.body.details.length).toBe(2);
//
//     })
//     .end(done)
//   });
// });
