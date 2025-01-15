const mongoose = require("mongoose");

const ArticleModelSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  favorited: {
    type: Boolean,
    default: false,
  },
  tagList: {
    type: [String],
    default: [],
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  /*
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  */
});

ArticleModelSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Article = mongoose.model("Article", ArticleModelSchema);

module.exports = Article;
