import React from 'react'
import './css-folder/Vendor.css';
import Navbar from './Navbar';
import Footer from './Footer';
const Vendor = () => {
  return (
    <section className='vendor-bg'>
      <Navbar/>
    <div className='vendor'>
        <h2>Are You a Hotel, Motel or a Restourant.</h2>
        <p>
            You Want:<br/>
            1. Source fresh produce straight from local farmers.<br/>
            2. Elevate your menu with quality ingredients.<br/>
            3. Click to register and simplify your supply chain!
        </p>
        <button>REGISTER</button>
    </div>
    <Footer/>
    </section>
  )
}

export default Vendor