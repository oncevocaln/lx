const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: String,
  password: String,
  username: String,
  email: String,
  birthday: String,
  gender: String,
  mobile: String,
  address: String,
  grade: String,
});

UserSchema.methods.comparePassword = function (inputPassword, cb) {
  if (inputPassword === this.password) {
    cb(null, true);
  } else {
    cb("error");
  }
};

module.exports = mongoose.model("Users", UserSchema);
