import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type ArticleType = {
  _id: string; // MongoDB ObjectID, represented as a string
  slug: string; // Unique slug for the article
  title: string; // Title of the article
  description: string; // Short description
  body: string; // Main content of the article
  favorited: boolean; // Indicates if the article is favorited
  tagList: string[]; // List of tags associated with the article
  favoritesCount: number; // Number of times the article was favorited
  createdAt: string; // ISO date string for article creation
  updatedAt: string; // ISO date string for last update
  __v: number; // Internal versioning field from MongoDB
};

const Home = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles");
        setArticles(response.data.articles);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {loading && <p>Loading</p>}

            {!loading &&
              articles.map((article) => (
                <div key={article.slug} className="article-preview">
                  <div className="article-meta">
                    <a href="/profile/eric-simons">
                      <img src="http://i.imgur.com/Qr71crq.jpg" />
                    </a>
                    <div className="info">
                      <a href="/profile/eric-simons" className="author">
                        Eric Simons
                      </a>
                      <span className="date">{article.createdAt}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> 29
                    </button>
                  </div>
                  <Link
                    to={"/article/" + article.slug}
                    className="preview-link"
                  >
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      {article.tagList.map((tag, index) => (
                        <li
                          key={index}
                          className="tag-default tag-pill tag-outline"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              ))}

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
