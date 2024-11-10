// import React from "react";

// export const SubmitJob = () => {
//   return (
//     <div className="px-20 bg-gray-100">
//       <div className="text-black flex font-semibold border-b-2 text-2xl py-3">
//         POST A JOB
//       </div>
//       <div className="text-lg mt-4 mb-2">JOB DETAILS</div>
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex flex-col col-span-2">
//           <label className="mb-1 font-medium">Job Title</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter job title" />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-medium">Job Type</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Full-time, Part-time, etc." />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-medium">Role</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Role/Position" />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-medium">Monthly Salary</label>
//           <div className="flex gap-5">
//             <input type="number" placeholder="Min" className="w-full h-10 border border-gray-300 rounded p-2" />
//             <input type="number" placeholder="Max" className="w-full h-10 border border-gray-300 rounded p-2" />
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-medium">Experience</label>
//           <div className="flex gap-5">
//             <input type="text" placeholder="Years of experience" className="w-full h-10 border border-gray-300 rounded p-2" />
//             <input type="text" placeholder="Required skills" className="w-full h-10 border border-gray-300 rounded p-2" />
//           </div>
//         </div>

//         <div>
//           <label className="mb-1 font-medium">City</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter city" />
//         </div>

//         <div>
//           <label className="mb-1 font-medium">Localities</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter localities" />
//         </div>

//         <div className="flex flex-col col-span-2">
//           <label className="mb-1 font-medium">Job Description</label>
//           <textarea rows="4" className="w-full border border-gray-300 rounded p-2" placeholder="Describe the job..." />
//         </div>

//         <div>
//           <label className="text-lg mt-6 mb-2 font-semibold">RECRUITER DETAILS</label>
//         </div>

//         <div className="flex flex-col col-span-2">
//           <label className="mb-1 font-medium">Hiring for (Company name)</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Company name" />
//         </div>

//         <div>
//           <label className="mb-1 font-medium">Email</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter email" />
//         </div>

//         <div>
//           <label className="mb-1 font-medium">Phone Number</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter phone number" />
//         </div>

//         <div>
//           <label className="mb-1 font-medium">Address</label>
//           <input type="text" className="w-full h-10 border border-gray-300 rounded p-2" placeholder="Enter address" />
//         </div>
//       </form>
//       <button className="mt-6 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
//         Submit
//       </button>
//     </div>
//   );
// };
// export  default SubmitJob;

import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SubmitJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!jobData.title || !jobData.description || !jobData.company || !jobData.location || !jobData.salary) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post('http://localhost:5000/api/jobs', jobData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      console.log(response.data);
      toast.success('Job posted successfully');
      setJobData({
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to post job. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="p-20 bg-[#e9f3f9] flex justify-center items-center">
      <Toaster />
      <div className="w-2/5">
        <h2 className="text-xl font-semibold py-2">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="font-medium">Job Description</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              className="w-full h-24 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="company" className="font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="location" className="font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="salary" className="font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded mt-2 font-medium"
              disabled={loading}
            >
              {loading ? 'Posting...' : 'Post Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitJob;
