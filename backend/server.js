require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const articlesRouter = require("./Router/articles");
const userRouter = require("./Router/users");

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

//Register
app.use("/api/users", userRouter);

//Current User

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
