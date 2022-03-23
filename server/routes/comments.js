const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: "desc" });
    res.json(comments);
  } catch (err) {
    res.json({ message: "server error" });
  }
});

router.post("/", async (req, res) => {
  const { comment } = req.body;
  const creater = "Sushil Kandhare";

  const newComment = await Comment.create({ comment, creater });

  res.json(newComment);
});

module.exports = router;
