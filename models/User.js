    // const mongoose = require('mongoose') ;
    // const Schema = mongoose.Schema ;


    // const UserSchema = new Schema({
    //     email : String ,
    //     password : String  ,
    //     name : String ,
    // }) ;

    // const User = mongoose.model('User',UserSchema)



    // module.exports = User ;

    // models/User.js

const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,

  },
  imageUrl: {
    type: String,
  },
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);