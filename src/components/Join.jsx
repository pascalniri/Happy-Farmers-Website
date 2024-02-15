import React from 'react'
import Footer from './Footer'
import './css-folder/Vendor.css';
import Navbar from './Navbar';
const Join = () => {
  return (
    <section className='join-bg'>
      <Navbar/>
      <div className='join'>
       <h2>Are You a Hotel, Motel or a Restourant.</h2>
        <p>
        We`d love to share more about our business model, traction and sustainable growth. <br />
        Once we`ve confirmed your subscription, you’ll gain access to exclusive materials, news and updates.
        </p>
    <div className='form2'>
        <label>Buyer Name</label>
         <input type="text" />
         <label>Email</label>
         <input type="email" />
         <label>Phone Number</label>
         <input type="text" placeholder='+2507...'/>
         <div>
         <label>You Want Them</label> <br />
          <select name="" id="option">
            <option >Choose</option>
            <option >Daily</option>
            <option >Weekly</option>
            <option >Monthly</option>
            <option >Other options contact us</option>
          </select>
         </div>
         <button>SUBMIT</button>
     </div>
       
    </div>
    <Footer/>
    </section>
    
  )
}

export default Join