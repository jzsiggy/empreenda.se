const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
  username : { 
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  description : {
    type : String,
  },
  startup : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Startup",
  },
  likers : {
    type : Array,
  },
}, 
{
  timestamps : true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;