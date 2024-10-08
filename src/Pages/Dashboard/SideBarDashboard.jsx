import React from "react";
import profilepic from "../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { Link } from "react-router-dom";

export const SideBarDashboard = () => {
  return (
    <div className="w-1/5 sticky top-0 left-0 h-screen p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2">My Dashboard</h2>
      <div className="flex flex-col justify-center items-center pb-4 border-b-2 mb-2 gap-2 ">
        <div className="flex justify-center items-center">
          <img
            src={profilepic}
            alt="profile"
            className="w-[7vmax] h-[7vmax] rounded-full object-cover border-4 "
          />
        </div>
        <h3 className="font-semibold">Christopher Campbell</h3>
      </div>
      <div className="flex flex-col gap-4">
        <Link className="p-2 hover:bg-blue-500 hover:text-white rounded-sm font-medium">
            My Profile
        </Link>
        <Link className="p-2 hover:bg-blue-500 hover:text-white rounded-sm font-medium">
            My Jobs
        </Link>
        <Link className="p-2 hover:bg-blue-500 hover:text-white rounded-sm font-medium">
            My Applications
        </Link>
        <Link className="p-2 hover:bg-blue-500 hover:text-white rounded-sm font-medium">
            My Settings
        </Link>
        <Link className="p-2 hover:bg-blue-500 hover:text-white rounded-sm font-medium">
            Logout
        </Link>

      </div>
    </div>
  );
};
