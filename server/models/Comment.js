const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    creater: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
