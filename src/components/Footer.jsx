import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import hf from '../components/images/hf.png';
import '../index.css'
const Footer = () => {
  return (
   
        <div className=' mx-auto px-4 sm:px-[50px] lg:px-[100px] font-outfit flex justify-between bg-green-500 py-[50px]' >
            <div className=''>
                 <img src={hf} alt='' className='w-[100px] h-[100px]'/>
            </div>

            <div className='leading-[40px]'>
               <h3 className='text-[20px] font-semibold'>Useful Links</h3>
               <p>Home</p>
               <p>Your cart</p>
               <p>Vendors</p>
               <p>Contact us</p>
              
            </div>

            <div className='leading-[40px]'>
            <h3 className='text-[20px] font-semibold'>Get in touch</h3>
            <div className='flex flex-row gap-[30px] mt-[30px]'>
            <FaLinkedinIn className='text-[30px]' />
            <FaXTwitter className='text-[30px]' />
            <FaInstagram className='text-[30px]'/>
            </div>
           <div className='flex flex-row mt-[30px]'>
           <input type='text' placeholder='Enter Email' className='px-[10px] py-[5px] rounded-l-[5px] outline-none' />
           <button className='bg-black text-white px-[20px] rounded-r-[5px]'>Submit</button>
           </div>
            </div>
        </div>
    
  )
}

export default Footer