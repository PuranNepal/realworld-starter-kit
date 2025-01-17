const express = require("express");
const { registerUser } = require("../controllers/usersController");

const router = express.Router();

//Post
router.post("/", registerUser);

module.exports = router;
