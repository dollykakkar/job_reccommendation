import React from 'react';
import { FaEdit, FaTrash, FaHeart, FaEye, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SideBarDashboard } from "./SideBarDashboard";

const jobData = [
  {
    title: "BPO Jobs",
    date: "Feb-21-2018, 16:54",
    type: "Part Time",
    location: "Ambrosia",
    salary: "$54 - $60",
    status: "Published",
  },
  {
    title: "Software Developer",
    date: "Mar-15-2019, 10:30",
    type: "Full Time",
    location: "New York",
    salary: "$70 - $80",
    status: "Published",
  },
  {
    title: "Graphic Designer",
    date: "Jun-05-2020, 14:45",
    type: "Part Time",
    location: "Los Angeles",
    salary: "$40 - $50",
    status: "Draft",
  },
  // Add more jobs as needed
];

const MyJobs = () => {
  return (
    <div className="flex relative gap-6 bg-[#dde5f8]">
      <SideBarDashboard />
      <div className="pb-20 w-4/5 p-4">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Latest Jobs</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Salary</th>
              <th className="py-3 px-6 text-left">Ad Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {jobData.map((job, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                {/* Job Details */}
                <td className="py-3 px-6 text-left">
                  <div>
                    <h3 className="text-md font-semibold">{job.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <FaClock />
                      <span>{job.date}</span>
                    </div>
                    <div className="text-blue-600 text-sm">{job.type}</div>
                  </div>
                </td>

                {/* Location */}
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center text-gray-600 space-x-1">
                    <FaMapMarkerAlt />
                    <span>{job.location}</span>
                  </div>
                </td>

                {/* Salary */}
                <td className="py-3 px-6 text-left">
                  <span className="text-lg font-medium text-gray-700">{job.salary}</span>
                </td>

                {/* Ad Status */}
                <td className="py-3 px-6 text-left">
                  <span className={`bg-${job.status === "Published" ? 'yellow-400' : 'gray-400'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {job.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="py-3 px-6 text-left">
                  <div className="flex space-x-2">
                    <button className="bg-green-500 p-2 rounded text-white hover:bg-green-600">
                      <FaEdit />
                    </button>
                    <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600">
                      <FaTrash />
                    </button>
                    <button className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600">
                      <FaHeart />
                    </button>
                    <button className="bg-blue-700 p-2 rounded text-white hover:bg-blue-800">
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
