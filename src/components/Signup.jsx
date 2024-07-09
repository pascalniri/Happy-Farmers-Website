import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from './GlobalApi'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const SIGN_UP_URL = '/users';
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post(SIGN_UP_URL, { name, email, password, phone });
      console.log(response);
      setEmail("");
      setName("");
      setPhone("");
      setPassword("");
      alert('User registered successfully');
      navigate('/signin');
    } catch (err) {
      console.error('Error:', err);
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response.status === 409) {
        setErrMsg('User name taken');
      } else if (err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        setErrMsg('Registration failed');
      }
    }
    if (!password || !email) {
      alert('Please enter a password and email');
    }
  }

  return (
    <div className="font-outfit flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-green-500 text-center">
          Create an account
        </h1>
        {errMsg && <div className="text-red-500 mb-4">{errMsg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">User Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
            <input
              type="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Already have an account? <a href="/signin" className="text-green-500 hover:underline">Sign In</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-transparent text-white hover:text-green-500 py-2 px-[30px] rounded-[50px] hover:border hover:border-green-500 focus:outline-none focus:shadow-outline"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
