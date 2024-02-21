import React from 'react'
import './css-folder/Vendor.css';
import { useState } from 'react'; 
import axiosClient from './GlobalApi';

const Join = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [deliver,setDeliver]=useState("");
  const [role,setRole]=useState("");

  const SIGN_UP_URL = '/vendors';

 const handleSubmit = async(e) =>{
  e.preventDefault();
   setEmail("");
     setName("");
     setPhone("");
     setRole("");
     setDeliver("");
     
   try{
      const response = await axiosClient.post(SIGN_UP_URL, {name,email,phone, deliver, role});
      console.log(response)
   }catch(err){
    if(!err?.response){
      alert('No server response');
    }
    else if(err.response.status === 409){
      alert('Your order was received successfully')
    }
    else if(err.response.status === 400){
      alert('Email already exist!, try another')
    }
    else if (err.response.status === "failed"){
      alert(err.response.message)
    }
   }
 } 

  return (
    <section className='join-bg'>
      <div className='join'>
       <h2>Are You a Hotel, Motel or a Restourant.</h2>
        <p>
        We`d love to share more about our business model, traction and sustainable growth. <br />
        Once we`ve confirmed your subscription, you’ll gain access to exclusive materials, news and updates.
        </p>
    <form className='form2' onSubmit={handleSubmit}>
        <label>Vendor`s Name</label>
         <input type="text" value={name} required onChange={(e)=> setName(e.target.value)} />
         <label>Email</label>
         <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
         <label>Phone Number</label>
         <input type="text" placeholder='+2507...' required value={phone} onChange={(e)=> setPhone(e.target.value)} />
         <div>
         <label>You Want Them</label> <br />
          <select name="" id="option" required value={deliver} onChange={(e) => setDeliver(e.target.value)} >
            <option >Choose</option>
            <option >Daily</option>
            <option >Weekly</option>
            <option >Monthly</option>
          </select>
          <select name="" id="option" required value={role} onChange={(e) => setRole(e.target.value)} >
            <option >Select a role</option>
            <option >Supplier</option>
            <option >Buyer</option>
            
          </select>
         </div>
         <button>SUBMIT</button>
     </form>
       
    </div>
    </section>
    
  )
}

export default Join