import React from 'react'
import './css-folder/Vendor.css';
import { Link } from 'react-router-dom';
const Vendor = () => {
  return (
    <section className='vendor-bg'>
    <div className='vendor'>
        <h2>Are You a Hotel, Motel or a Restourant.</h2>
        <p>
            You Want:<br/>
            1. Source fresh produce straight from local farmers.<br/>
            2. Elevate your menu with quality ingredients.<br/>
            3. Click to register and simplify your supply chain!
        </p>
        <Link to={`${'/join'}`}><button>REGISTER</button></Link>
    </div>
    </section>
  )
}

export default Vendor