const Comment = require("../models/Comment");

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
  const creater = "Sushil Kandhare";

  const newComment = await Comment.create({ comment, creater });

  res.json(newComment);
};

module.exports = { getComments, createComment };
