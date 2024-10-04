import React from "react";
import { CompoHeading } from "../Components/CompoHeading";
import { FaMagnifyingGlass } from "react-icons/fa6";
export const HeroSection = () => {
  const compoHeading = {
    heading: "Find The Best Job For Your Future",
    description: "Discover the best job opportunities in your area.",
  };
  return (
    <div className="min-h-screen herosection">
      <div className="w-full h-screen bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
      <div className="flex flex-col justify-around gap-20 items-center py-20 relative z-10 text-white">
        <CompoHeading data={compoHeading} />

        <div className="flex w-full justify-center text-black">
            <input type="text" placeholder="Search Jobs" className="h-14 w-60 p-1 rounded-l-md border-r-2"/>
            <input type="text" placeholder="Select Loction" className=" h-14 w-60 p-1 border-r-2" />
            <input type="text" placeholder="Select Category" className="h-14 w-60 p-1"/>
            <button className="font-semibold flex justify-center items-center gap-1 h-14 w-60 bg-[#e34317] rounded-r-md text-white p-1"><FaMagnifyingGlass/> Search</button>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
};
