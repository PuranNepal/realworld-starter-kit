const ArticleModel = require("../Models/ArticleModel");
const slugify = require("slugify");

// Get all Articles
const getArticles = async (req, res) => {
  const articles = await ArticleModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({ articles: articles });
};

// get a single article

//create new article
const createArticle = async (req, res) => {
  const { title, description, body, tagList = [] } = req.body.article;
  //sluify the tile
  const slug = slugify(title, { lower: true, strict: true });

  try {
    const article = await ArticleModel.create({
      slug,
      title,
      description,
      body,
      tagList,
    });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      details: error.errors || null,
    });
  }
};

// delete a article

//update article

module.exports = {
  createArticle,
  getArticles,
};
