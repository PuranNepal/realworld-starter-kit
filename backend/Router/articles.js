const express = require("express");
const {
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/articleController");

const router = express.Router();

//Post article
router.post("/", createArticle);

//Get All
router.get("/", getArticles);

//Get single article by slug
router.get("/:slug", getArticle);

//Delete
router.delete("/:slug", deleteArticle);

//Update
router.put("/:slug", updateArticle);

module.exports = router;
