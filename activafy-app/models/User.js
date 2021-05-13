const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validator: {
        validator(name) {
          return validator.isAlpha(name);
        },
      },
    },
    email: {
      type: String,
      required: true,
      validator: {
        validator(email) {
          return validator.isEmail(email);
        },
      },
    },
    password: {
      type: String,
      required: true,
      validator: {
        validator(password) {
          return validator.isAlphanumeric(password);
        },
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);