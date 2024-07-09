import React from 'react'
import { Link } from 'react-router-dom';
const Vendor = () => {
  const vendor = {
    backgroundImage: "url('/vendor.jpg')",
    height: "100vh", // Use 100vh to make the div fill the viewport height
    width: "100%",
    backgroundSize: "cover", // This will ensure the image covers the whole div
    backgroundPosition: "center" // This will center the image in the div
  };
  return (
    <section style={vendor} className=''>
    <div className='flex flex-col lg:p-[100px] font-outfit text-white'>
        <h2 className='font-bold text-[30px] text-white'>Are You a Hotel, Motel or a Restourant.</h2>
        <p className='mt-[40px]'>You Want:</p>
        <p>
            1. Source fresh produce straight from local farmers.<br/>
            2. Elevate your menu with quality ingredients.<br/>
            3. Click to register and simplify your supply chain!
        </p>
        <Link to="/join"><button className='bg-green-500 px-[50px] py-[10px] rounded-[50px] mt-[50px] hover:bg-transparent hover:text-green-500 hover:border hover:border-green-500'>REGISTER</button></Link>
    </div>
    </section>
  )
}

export default Vendor;