// const expect = require('expect');
// const request  = require('supertest');
//
// const {app} = require('./../server.js');
// const {courses} = require('./../models/user_course.js');
//
//
// const course = [{
//   tutor: 'Dr AbdulGafar',
//   duration: '32 weeks',
//   rating: 3.98,
//   certified: true,
//   date: ''
// }, {
//   tutor: 'Dr Habeeb',
//   duration: '8 weeks',
//   rating: 4.32,
//   certified: true,
//   date: ''
// }];
//
// beforeEach((done)=>{
//   courses.deleteMany({}).then(()=> {
//     courses.insertMany(course);
//   }).then(()=>done());
// });
//
// describe('POST /course', () =>{
//   it('Should Create a new course Module', (done) =>{
//     var tutor = "Dr Abdulkareem";
//
//     //To make a request, when request status is correct
//     request(app)
//     .post('/course')
//     .send({tutor}) // using ES6
//     .expect(200) // status code
//     .expect((res)=>{
//       expect(res.body.tutor).toBe(tutor);
//
//     })
//     .end((error, res)=>{
//       if(error){
//         return done(error); // this return the error and break out the code from the stack
//       }
//
//       courses.find({tutor}).then((course)=>{
//         expect(course.length).toBe(1);
//         expect(course[0].tutor).toBe(tutor);
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
//     .post('/course')
//     .send({}) // using ES6
//     //we Do Not Need to make assertiin for the body since its not provided here
//     .expect(400) // status code
//     .end((error, res)=>{
//       if(error){
//           return done(error); // this return the error and break out the code from the stack
//       }
//
//       courses.find().then((course)=>{
//         expect(course.length).toBe(2); //expected that beforeEach() runs before the above,would have wiped out the db contents, thus length of db would have been zero
//         done();
//       }).catch((e)=> done(e));
//     });
//
//   });
//   });
//
//
//   //Request for the content of the // DEBUG:
//   describe('GET /course', () =>{
//     it('Should Get All course Module', (done) =>{
//       //To make a request, when request status is correct
//       request(app)
//       .get('/course')
//       //.send({tutor}) // using ES6
//       .expect(200) // status code
//       .expect((res)=>{
//         expect(res.body.course.length).toBe(2);
//
//       })
//       .end(done);
//     });
//   });
