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
  area : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
});

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;