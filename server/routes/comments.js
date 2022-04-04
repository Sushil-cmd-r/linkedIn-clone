const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getComments,
  createComment,
} = require("../controllers/commentControllers");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", getComments);

router.post("/", upload.single("image"), createComment);

module.exports = router;
