import React, { useState } from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'job-seeker', // Default role
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle radio button change
  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      toast.error('Please fill in all fields');
      return;
    }

    try {
      // Send data to the backend API
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log(response.data);
      // Show success notification
      toast.success('User registered successfully');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
      toast.error('Registration failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="p-20 bg-[#e9f3f9] flex justify-center items-center">
      <div className="w-2/5">
        <Toaster /> {/* For displaying notifications */}
        <h2 className="text-xl font-semibold py-2">Register</h2>
        <div className="w-full flex gap-4 justify-between">
          <div className="flex w-full justify-center items-center gap-2 bg-blue-600 p-2 text-white rounded-md">
            <BsGoogle />
            <p className="font-medium">Signup With Google</p>
          </div>
          <div className="flex w-full justify-center items-center gap-2 bg-gray-600 p-2 text-white rounded-md">
            <BsGithub />
            <p className="font-medium">Signup With Github</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold p-2 text-center">OR</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-medium">Mail or Username</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Role</label>
            <div className="flex gap-4 mt-2">
              <label>
                <input
                  type="radio"
                  value="job-seeker"
                  checked={formData.role === 'job-seeker'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Job-Seeker
              </label>
              <label>
                <input
                  type="radio"
                  value="recruiter"
                  checked={formData.role === 'recruiter'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Recruiter
              </label>
            </div>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded mt-2 font-medium"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
        <div className='flex justify-center'>
          <Link to="/login" className="text-blue-600 mt-4">Already have an account? Login here.</Link>
        </div>
      </div>
    </div>
  );
};
