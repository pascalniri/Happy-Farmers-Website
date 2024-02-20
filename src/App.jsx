import React from 'react';
import Home from './components/Home';
import Vendor from './components/Vendor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './components/Join';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Shop from './components/Shop';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
