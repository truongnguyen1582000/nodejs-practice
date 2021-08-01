const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
