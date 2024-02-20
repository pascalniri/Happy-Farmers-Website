import React from 'react';
import Home from './components/Home';
import Vendor from './components/Vendor.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './components/Join.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Shop from './components/Shop.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/join" element={<Join />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
