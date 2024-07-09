import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Vendor from "./components/Vendor";
import Join from "./components/Join";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {


  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[item.id]) {
        newCart[item.id].quantity += 1;
      } else {
        newCart[item.id] = { ...item, quantity: 1 };
      }
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[itemId].quantity > 1) {
        newCart[itemId].quantity -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Card addToCart={addToCart} />} />
        <Route path="/vendors" element={<Vendor />} />
        <Route path="/join" element={<Join />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={ <Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
