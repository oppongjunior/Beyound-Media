import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Company from "./Pages/Company";
import Category from "./Pages/Category";
import AuthorPost from "./Pages/AuthorPost";
import Details from "./Pages/Details";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/company" element={<Company />} />
        <Route path="/author/root" element={<AuthorPost />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
