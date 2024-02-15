import React from 'react'
import Home from './components/Home';
import Vendor from './components/Vendor.jsx'
import  { Routes, Route } from 'react-router-dom';
import Join from './components/Join.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vendor" element={<Vendor />}/>
      <Route path="/join" element={<Join />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/cart" element={<Cart />}/>
  </Routes>
  )
}

export default App
