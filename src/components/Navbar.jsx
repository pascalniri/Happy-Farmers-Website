import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css-folder/Navbar.css';
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img src="" alt="" />
      <ul>
        <li>LOGO</li>
        <li><a href="/">Home</a></li>
        <li><a href="shop">Shop</a></li>
        <li><a href="about">About</a></li>
        <Link to={`${'/vendor'}`}>
           <li>Vendors</li>
        </Link>
      </ul>
      <div className="cart-icon">
      <FaShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
