import React, { useState } from 'react';
import './css-folder/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">LOGO</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
        <li>
           <select>
              <option value=""><a href="#">Vendors</a></option>
              <option value="">Hotels</option>
              <option value="">Farmers</option>
           </select>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
