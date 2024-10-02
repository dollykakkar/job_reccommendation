import React from "react";
import { GoLocation, GoBriefcase } from "react-icons/go";

export const JobAdvtCard = (props) => {
  const { jobTitle, type, companyName, location } = props.data;

  return (
    <div className="w-full flex justify-around gap-20 items-center  border-2 p-4">
      <div className="flex flex-col gap-2 my-2">
        <div className="flex gap-2 items-center">
          <h2 className="font-medium text-xl">{jobTitle}</h2>
          <p
            className={
              jobTitle === "Fulltime"
                ? "bg-[#ff392b] p-2 rounded-xl text-sm"
                : "bg-[#ffa32b] px-2 py-1 text-sm font-medium rounded-xl"
            }
          >
            {type}
          </p>
        </div>
        <div className="flex gap-4">
          <h3 className="flex items-center gap-2">
            <GoBriefcase /> {companyName}
          </h3>
          <p className="flex items-center gap-2 font-medium">
            <GoLocation />
            {location}
          </p>
        </div>
      </div>
      <div>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 ">
          Apply Now
        </button>
      </div>
    </div>
  );
};
