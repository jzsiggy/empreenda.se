const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startupSchema = new Schema({
  name : {
    type : String,
    required : true,
  },
  numOfEmployees : {
    type : Number,
    required : false,
  },
  category : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  // admin : {
  //   type : mongoose.Schema.Types.ObjectId,
  //   ref : 'User', 
  // },
});

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;