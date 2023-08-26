const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
      }
  
  
})

const Users = mongoose.model("Users", userSchema);

module.exports = Users;