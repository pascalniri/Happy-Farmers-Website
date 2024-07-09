import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Vendor from "./components/Vendor";
import Join from "./components/Join";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Card />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vendors" element={<Vendor />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
