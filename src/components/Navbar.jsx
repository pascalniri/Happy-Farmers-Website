import React from 'react';
import './css-folder/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import hf from './images/hf.png';
function Navbar() {
   const cart = useSelector( state => state.cart);
  return (
    <nav className="navbar">
      <div className='logo'>
        <Link to="/"><img src={hf} alt="" style={{width:'50px'}}/></Link>
      </div>
      <div className='listOption'>
        <ul>
           <li><a href="/">HOME</a></li>
           <li><Link to="/shop">SHOP</Link></li>
           <li><a href="/blog">BLOG</a></li>
           <li><a href="/vendor">VENDORS</a></li>
        </ul>
      </div>
      <div className='nav-signin'>
          <button><Link to="/signin">SIGN IN</Link></button>
          <Link to ="/checkout"className='cart'><FaCartShopping /><strong>{cart.cart.length}</strong></Link>
      </div>
    </nav>
  );
}

export default Navbar;
