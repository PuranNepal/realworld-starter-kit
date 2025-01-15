require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const articlesRouter = require("./Articles/articles");

//Create Express App
const app = express();
app.use(express.json());

//middleware to log request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Article API 
app.use("/api/articles", articlesRouter);

//
app.get("/", (req, res) => {
  res.json({ mess: "Hello World" });
});

//connect to mongodb
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    console.log("connected to the DataBase");
    app.listen(process.env.PORT, () => {
      console.log("Running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
