const jwt = require("jsonwebtoken");

const maxAge = 60;

const createToken = (email, userName) => {
  return jwt.sign({ email, userName }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const verifyUser = (res, cookie) => {
  let statusCode = 401;
  let message = { message: "Unauthorized" };
  if (cookie) {
    jwt.verify(cookie, process.env.JWT_SECRET, (err, { email, userName }) => {
      if (!err) {
        statusCode = 200;
        message = { email, userName };
      }
    });
  }
  res.statusCode = statusCode;
  res.json(message);
};

module.exports = { verifyUser, createToken };
