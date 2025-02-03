"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./pages/Home";
import CatalogScreen from "./pages/CatalogScreen";
import BlogScreen from "./pages/BlogScreen";
import ContactScreen from "./pages/ContactScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/catalog" element={<CatalogScreen />} />
            <Route path="/blogs" element={<BlogScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
