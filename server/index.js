const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

//NodeJS Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});

//MongoDB Server
const mongoDb = process.env.MONGODB_URL;
mongoose.connect(mongoDb);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

//API For Register Route
