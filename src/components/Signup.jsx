import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from './GlobalApi'
import Navbar from './Navbar'
const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [setErrMsg] = useState("")

  const SIGN_UP_URL = '/users';
  const navigate = useNavigate()

 const handleSubmit = async(e) =>{
  e.preventDefault();
   setEmail("")
     setName("")
     setPhone("")
     setPassword("")
   try{
      const response = await axiosClient.post(SIGN_UP_URL, {name,email,password,phone});
      console.log(response)
     navigate('/signin')

   }catch(err){
    if(!err?.response){
      setErrMsg('No server response');
    }else if(err.response.status === 409){
      setErrMsg('User name taken')
    }else if (err.response.status === "failed"){
      alert(err.response.message)
    }
   }
 } 

  return (
    <section >
    
  <div >
  <Navbar />


      <div className='signin'>
          <div className='inner-form'>
              <h1 >
                  Create an account
              </h1>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label  >User Name</label>
                      <input type="text" placeholder="Username" required value={name} onChange={(e)=> setName(e.target.value)} />
                  </div>
                  <div>
                      <label >Your email</label>
                      <input type="email" name="email" id="email"  placeholder="name@company.com" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label >Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••"  required value={password} onChange={(e)=> setPassword(e.target.value)} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                      <input type="phone" name="phone" placeholder="+03232......"  required value={phone} onChange={(e)=> setPhone(e.target.value)} />
                  </div>
                  <div >
                      
                      <div >
                        <label >Already have an account! <a  href='/signin'>Sign In</a></label>
                      </div>
                  </div>
                  <button  
                   type="submit" >Create an account</button>
              
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Signup


