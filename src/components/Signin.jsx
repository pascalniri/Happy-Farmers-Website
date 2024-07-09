import React, { useState } from 'react';
import axiosClient from './GlobalApi';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const LOGIN_URL = '/users/login';
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post(LOGIN_URL, { email, password });
            console.log(response);
            if (response.status === 200) {
                navigate('/shop');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setErrMsg("Invalid credentials. Please try again.");
            } else {
                setErrMsg("An error occurred. Please try again later.");
            }
        }
    }

    return (
        <div className="font-outfit flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-green-500">
                Sign In
            </h1>
            {errMsg && <div className="text-red-500 mb-4">{errMsg}</div>}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Your email</label>
                    <input
                        type="email"
                        autoComplete="current-password"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-transparent text-white hover:text-green-500 py-2 px-[30px] rounded-[50px] hover:border hover:border-green-500 focus:outline-none focus:shadow-outline"
                    >
                        Sign in
                    </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                    Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default Signin;
