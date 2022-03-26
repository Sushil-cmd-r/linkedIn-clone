const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: "desc" });
    res.json(comments);
  } catch (err) {
    res.json({ message: "server error" });
  }
};

const createComment = async (req, res) => {
  const { comment } = req.body;
  const cookie = req.cookies?.jwt;
  if (!cookie) res.status(522).json({ message: "Connection timeout" });

  // extract user from jwt
  let creater = jwt.verify(
    cookie,
    process.env.JWT_SECRET,
    (err, { email, userName }) => userName
  );

  const newComment = await Comment.create({ comment, creater });

  res.json(newComment);
};

module.exports = { getComments, createComment };
