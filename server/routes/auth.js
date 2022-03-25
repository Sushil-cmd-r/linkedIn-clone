const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  checkAuth,
} = require("../controllers/authControllers");

router.get("/", checkAuth);

router.get("/logout", logout);

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
