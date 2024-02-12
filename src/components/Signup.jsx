import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


let renderCount = 0;
type FormValues ={

  fullName: string;
  email: string;
  password: string;
}

const Signup = () => {
const form = useForm <FormValues> ();
const { register,control,  handleSubmit } = form;

const onSubmit = (data:FormValues ) => {
  console.log("Form submitted", data);
}

renderCount++;
  return (
    <>
      <form className='signin' onSubmit={handleSubmit(onSubmit)}>
        <div className='inner-form'>
          <h1>Sign In</h1>
          <label>Full Name</label> <br />
          <input type="text" id='fullName' {...register('fullName')} /> <br />
          <label>Email</label> <br />
          <input type="email"  id='email' {...register('email')} /> <br />
          <label>Password</label> <br />
          <input type="password" id='password' {...register('password')} /> <br />
          <p>Already have an account? <a href="signin">Sign In</a></p>
          <button type="submit">SIGN UP</button>
        </div>
      </form>
      <DevTool />
    </>
  );
};

export default Signup;
