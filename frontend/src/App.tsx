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
import HeaderComponent from "./components/HeadComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
