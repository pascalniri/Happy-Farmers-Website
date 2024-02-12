import React from 'react'
import './css-folder/Signin.css';


const Signin = () => {
  return (
    <>
      <div className='signin'>
       <div className='inner-form'>
        <h1>Sign In</h1>
         <label>Email</label> <br />
         <input type="email" /> <br />
         <label>Password</label> <br />
         <input type="password" />
         <br />

         <p>Don`t have an account? <a href="signup">Sign In</a></p>
         <button>SIGN IN</button>

      </div> 
     </div>
    </>
  )
}

export default Signin