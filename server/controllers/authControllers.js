const User = require("../models/User");
const validator = require("validator");
const { handleErr } = require("../helper/handleErr");
const { createToken, verifyUser } = require("../helper/jwtAuth");
const bcrypt = require("bcrypt");

const checkAuth = (req, res) => {
  const cookie = req.cookies?.jwt;
  verifyUser(res, cookie);
};

const login = async (req, res) => {
  const { email, passward } = req.body;
  // verify user
  try {
    const user = await User.findOne({ email });
    if (!user) throw Error("Incorrect Email");
    const auth = await bcrypt.compare(passward, user.passward);
    if (!auth) throw Error("Incorrect passward");
    const userName = `${user.name} ${user.lastName}`;

    const token = createToken(email, userName);
    res.cookie("jwt", token, { maxAge: 60000, httpOnly: true });
    res.status(201).json({ email, userName });
  } catch (err) {
    const error = handleErr(res, err);
    console.log(err.message);
    console.log(error);
    res.json(error);
  }
};

const signup = async (req, res) => {
  console.log("inside signup");
  const { email, passward, name, lastName } = req.body;
  try {
    // check if fields are correct
    const isEmail = validator.isEmail(email);
    const checkPsw = passward.length < 6;
    if (!isEmail) throw Error("Invalid Email");
    if (checkPsw) throw Error("Invalid passward");
    // if no errro save user in db
    await User.create({
      email,
      passward,
      name,
      lastName,
    });

    const userName = `${name} ${lastName}`;
    // create jwt and send it to user as cookie
    const token = createToken(email, userName);
    res.cookie("jwt", token, { maxAge: 60000, httpOnly: true });

    res.status(201).json({ email, userName });
  } catch (err) {
    const error = handleErr(res, err);
    res.json(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("jwt");
  res.sendStatus(200);
};

module.exports = { checkAuth, login, signup, logout };
