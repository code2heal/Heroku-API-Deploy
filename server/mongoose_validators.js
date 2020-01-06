var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//create an instancew of mongoose that connect to a new/ existing Db [codingClass]
mongoose.connect('mongodb://localhost:27017/validators', {useNewUrlParser: true});

const Schema = mongoose.Schema;

//define a schematics of your db meaning columns, rows and data types
const validatorSchema = new Schema({
  firstname:{type: String,
    //default validator
  required: true,
minlength: 3,
trim: true
},
  lastname:{type: String,
    //default validator
  required: true,
  minlength: 3,
  trim: true },
  age:{type: Number,
    //default validator
    default: null
  },
  phone_number:{type: String,
    //default validator
  default: null},
  favourite_quote:{type: String,
    //default validator
  required: true,
  minlength: 3,
  trim: true },
  ambition:{type: String,
    //default validator
  required: true,
  minlength: 3,
  trim: true},

 married:{type: Boolean,
    //default validator
  required: true,
  default: null
  }
});

//Define your collection
const sampleValidators = mongoose.model('sampleValidators', validatorSchema);

const valid1 = new sampleValidators({
firstname: 'Kamaldeen',
lastname: 'Lukman',
age: 24,
// phone_number: '+2348076543341',
favourite_quote: 'never give up',
ambition: 'medical lawyer',
married: false

});






valid1.save().then((doc)=>{
  console.log('Saved Data', doc);
}, (error)=>{
  console.log('Not Save to db')

client.close();
});
