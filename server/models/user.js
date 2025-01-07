const mongoose = require('mongoose');
const { v4 : uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  userID : { type : String, default : uuidv4, required : true, unique : true},
  first_name : { type : String, required : true},
  last_name : { type : String, required : true},
  phone_number : { type : String, reqired : false},
  email : { type : String, required : true },
  created_at : { type : Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
