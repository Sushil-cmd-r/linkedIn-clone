const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");
const { convertToBase64 } = require("../helper/convertToBase64");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: "desc" });
    res.json(comments);
  } catch (err) {
    res.json({ message: "server error" });
  }
};

const createComment = async (req, res) => {
  const cookie = req.cookies?.jwt;
  const comment = req.body?.comment;

  if (!cookie) {
    res.status(522).json({ message: "Connection timeout" });
    return;
  }
  let img = "";
  const image = req?.file;
  if (image) {
    const { buffer, mimetype } = image;
    img = await convertToBase64(buffer, mimetype);
  }
  // extract user from jwt
  let creater = jwt.verify(
    cookie,
    process.env.JWT_SECRET,
    (err, { email, userName }) =>
      err ? res.status(400).json({ message: "Something went wrong" }) : userName
  );
  const newComment = await Comment.create({ comment, creater, img });

  res.json(newComment);
};

module.exports = { getComments, createComment };
