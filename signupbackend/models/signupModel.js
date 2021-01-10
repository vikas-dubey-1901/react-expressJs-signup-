const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name']
  },

  userName: {
    type: String,
    required: [true, 'Please provide your user name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email']
  },
  password: {
    type: String,
    required: [true, 'Please provide your password']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
