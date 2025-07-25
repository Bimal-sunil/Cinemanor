import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Tv from "./pages/Tv";
import ContentPage from "./pages/ContentPage";
import CategoryContent from "./pages/CategoryContent";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/categories">
              <Route index element={<Categories type="movie" />} />
              <Route
                path="/categories/movies"
                element={<Categories type="movie" />}
              />
              <Route
                path="/categories/:category"
                element={<CategoryContent type="movie" />}
              />
              <Route
                path="/categories/movies/:category"
                element={<CategoryContent type="movie" />}
              />
              <Route path="/categories/tv">
                <Route index element={<Categories type="tv" />} />
                <Route
                  path="/categories/tv/:category"
                  element={<CategoryContent type="tv" />}
                />
              </Route>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/video/:type/:id" element={<ContentPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
