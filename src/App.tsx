import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Categories from "./pages/Categories";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
