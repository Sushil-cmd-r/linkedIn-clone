const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter email"],
  },
  passward: {
    type: String,
    required: [true, "Please enter passward"],
    minlength: [6, "minimum length 6 "],
  },
  name: {
    type: String,
    required: [true, "Please enter valid name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter valid lastName"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.passward = await bcrypt.hash(this.passward, salt);
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
