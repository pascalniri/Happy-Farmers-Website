import React from 'react'
import './css-folder/Signin.css';
import {  useForm} from 'react-hook-form';
import Navbar from './Navbar';




const Signin = () => {
   
  const {register, handleSubmit, setError, formState:{errors, isSubmitting}} = useForm();

  const onSubmit = async (data) => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log(data)
    }catch(error){
      setError("email", {
        message: "This email is already taken"
      })
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Navbar/>
      <div className='signin'>
       <div className='inner-form'>
        <h1>Sign In</h1>
         <label>Email</label> <br />
         <input type="email"
            {...register("email", 
            {required: 'Email is required',
            validate:(value) =>{
              if(!value.includes('@')){
                return "Email must include @";
              
              }
              return true;
            }


          })} /> <br />

         {errors.email && <div style={{color: "red"}} >{errors.email.message}</div>}


         <label>Password</label> <br />
         <input 
            type="password" 
            {...register("password",{
              required:"Password is required",
              minLength:{
                value:8,
                message:"Password must be at least 8 characters"
              }
            })} 
            
         />
         {errors.password && <div style={{color: "red"}} >{errors.password.message}</div>}
         <br />

         <p>Don`t have an account? <a href="signup">Sign Up</a></p>
         <button disabled={isSubmitting}>
          {isSubmitting ? "Loading...": "Submit"}
         </button>

      </div> 
     </div>
    </form>
  )
}

export default Signin