const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");
const morgan = require("morgan");
require("dotenv").config();

// Initialize app
const app = express();

// middlewares
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

// Connecting to DB
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(app.listen(PORT, console.log("Listening on port", PORT)))
  .catch((err) => console.log(err));

// Routes
app.use("/auth", authRoutes);
app.use(commentRoutes);
