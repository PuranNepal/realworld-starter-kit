import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import CreateEdit from "./components/CreateEdit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderAuthenticated from "./components/HeaderAuthenticated";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
        <link
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </head>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/article/how-to-train-your-dragon"
            element={<Article />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
