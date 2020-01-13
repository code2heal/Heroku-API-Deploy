var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//create an instancew of mongoose that connect to a new/ existing Db [codingClass]
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/allpurpose', {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});


module.exports = {
  mongoose // ES6 Since the properties and the variables have thesame name
};
