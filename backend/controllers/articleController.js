const ArticleModel = require("../Models/ArticleModel");
const slugify = require("slugify");

// Get all Articles
const getArticles = async (req, res) => {
  const articles = await ArticleModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({ articles: articles });
};

// get a single article
const getArticle = async (req, res) => {
  const { slug } = req.params;
  const article = await ArticleModel.findOne({ slug });

  if (!article) {
    res.status(400).json({ error: "No Article Found" });
  }

  res.status(200).json({ article: article });
};

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
const deleteArticle = async (req, res) => {
  const { slug } = req.params;

  const article = await ArticleModel.findOneAndDelete({ slug });

  if (!article) {
    res
      .status(400)
      .json({ error: "Article can't be delete because it doesn't exist" });
  }

  res.status(200).json({
    messsage: "Article Deleted!",
    article,
  });
};

//updated article
const updateArticle = async (req, res) => {
  const { slug } = req.params;
  const { title, description, body, tagList = [] } = req.body.article;

  if (!title) {
    return res.status(400).json({ error: "Title is required!" });
  }

  const newSlug = slugify(title, { lower: true, strict: true });

  const updateFields = { title, slug: newSlug };

  if (description !== undefined) updateFields.description = description;
  if (body !== undefined) updateFields.body = body;
  if (tagList !== undefined) updateFields.tagList = tagList;

  try {
    const updatedArticle = await ArticleModel.findOneAndUpdate(
      { slug },
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedArticle) {
      res.status(400).json({ error: "Article Doesn't exist to update" });
    }

    res.status(200).json({
      message: "Article updated successfully",
      article: updatedArticle,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle,
};
