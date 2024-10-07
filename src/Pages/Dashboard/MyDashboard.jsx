import React from "react";
import { SideBarDashboard } from "./SideBarDashboard";

export const MyDashboard = () => {
  return (
    <div className="flex  relative gap-6 bg-[#dde5f8] ">
      <SideBarDashboard />
      <div className="pb-20 w-4/5 p-4 ">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-white">
          Edit Profile
        </h2>
        <form action="">
          <div className="grid gap-4 gap-x-8 grid-cols-2">
            <div className="">
              <label htmlFor="" className="font-medium ">
                First Name
              </label>
              <input type="text" className="w-full h-8 rounded-md mt-2 outline-none" />
            </div>

            <div>
              <label htmlFor="" className="font-medium ">
                Last Name
              </label>
              <input type="text" className="w-full h-8 rounded-md mt-2 outline-none" />
            </div>

            <div className="">
              <label htmlFor="" className="font-medium ">
                Email Address
              </label>
              <input type="email" className="w-full h-8 rounded-md mt-2 outline-none" />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Phone Number
              </label>
              <input type="number" className="w-full h-8 rounded-md mt-2 outline-none" />
            </div>
            <div className=" col-span-2">
              <label htmlFor="" className="font-medium ">
                Address
              </label>
              <input type="text" className="w-full h-8 rounded-md mt-2 outline-none" />
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-8">
              <div className="">
                <label htmlFor="" className="font-medium ">
                  City
                </label>
                <input type="text" className="w-full h-8 rounded-md mt-2 outline-none" />
              </div>
              <div>
                <label htmlFor="" className="font-medium ">
                  Postal Code
                </label>
                <input type="number" className="w-full h-8 rounded-md mt-2 outline-none" />
              </div>
              <div className="">
                <label htmlFor="" className="font-medium ">
                  Country
                </label>
                <input type="text" className="w-full h-8 rounded-md mt-2 outline-none" />
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="" className="font-medium ">About Me</label>
              <textarea
                className="w-full h-48 rounded-md mt-2 outline-none"
                rows="4"
              />
            </div>
            <div className="col-span-2">
              <label className="font-medium">
                Upload Image
              </label>
              <input type="file" className="w-full h-8 mt-2 " />
            </div>
            <div className="col-span-2">
              <button className="w-full h-10 bg-blue-500 text-white font-semibold rounded-md mt-4">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
