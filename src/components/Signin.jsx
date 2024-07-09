import React, { useEffect, useState } from 'react';
import axiosClient from './GlobalApi';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css-folder/Signin.css';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const LOGIN_URL = '/users/login';
    const navigate = useNavigate();

    useEffect(() => {
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post(LOGIN_URL, { email, password });
            console.log(response);
            navigate('/shop');
        } catch (err) {
            if (err.status === 401) {
                alert("Invalid Entry");
                navigate('/shop');
            }
        }
        setEmail("");
        setPassword("");
       
    }

    return (
        <>
            <section>
                <div className='signin'>
                    <div className='inner-form'>
                        <div>
                            <h1>
                                Sign In
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Your email</label>
                                    <input type="email" autoComplete="current-password"  required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <p>
                                    Don't have an account? <Link to="/Signup">Sign Up</Link>
                                </p>
                                <button type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin;
