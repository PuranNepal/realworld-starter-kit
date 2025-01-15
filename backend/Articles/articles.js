const express = require("express");
const {
  createArticle,
  getArticles,
} = require("../controllers/articleController");

const router = express.Router();

//Post article
router.post("/", createArticle);

//Get All
router.get("/", getArticles);

//Get single article by slug
router.get("/:slug", (req, res) => {
  res.json({ messg: "get single article" });
});

//Delete
router.delete("/:slug", (req, res) => {
  res.json({ messg: "Delete single article" });
});

//Update
router.put("/:slug", (req, res) => {
  res.json({ messg: "Update single article" });
});

module.exports = router;
