import React from 'react'
import Home from './components/Home';
// import Navbar from './components/Navbar'
// import Body from './components/Body'
// import Body2 from './components/Body2'
import Vendor from './components/Vendor.jsx'
// import Footer from './components/Footer'
import  { Routes, Route } from 'react-router-dom';
import Join from './components/Join.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vendor" element={<Vendor />}/>
      <Route path="/join" element={<Join />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
  </Routes>
  )
}

export default App

