import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MovieDetail from "./components/Movie/MovieDetail";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
