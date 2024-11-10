// Assuming you're using axios for making requests
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BsGoogle, BsGithub } from "react-icons/bs";

export const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', credentials);
      const { token } = response.data; // Assuming the token is returned in this structure
      localStorage.setItem('token', token); // Store the token in local storage
      toast.success('Logged in successfully!');
      // Redirect or do something after successful login
    } catch (err) {
      console.error(err);
      toast.error('Failed to login. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="p-20 bg-[#e9f3f9] flex justify-center items-center ">
      <Toaster />
      <div className="w-2/5 ">
        <h2 className="text-xl font-semibold py-2">Log In</h2>
        <div className="w-full flex gap-4 justify-between ">
          <div className="flex w-full justify-center items-center gap-2 bg-blue-600 p-2 text-white rounded-md">
            <BsGoogle />
            <p className="font-medium">Login With Google</p>
          </div>

          <div className="flex w-full justify-center items-center gap-2 bg-gray-600 p-2 text-white rounded-md">
            <BsGithub />
            <p className="font-medium">Login With Github</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold p-2 text-center">OR</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="font-medium">Mail or Username</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} className="w-full h-8 rounded mt-2 outline-none" />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="font-medium">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} className="w-full h-8 rounded mt-2 outline-none" />
          </div>
          
          <div className="mt-2">
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded mt-2 font-medium" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <p className="text-center mt-4">Forgot Password? <Link to="/resetpassword" className="text-blue-600">Reset Password</Link></p>
        <p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
      </div>
    </div>
  );
};
