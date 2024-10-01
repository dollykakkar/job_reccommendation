import React from "react";
import { JobAdvtCard } from "../Components/JobAdvtCard";
import { CompoHeading } from "../Components/CompoHeading";

export const RecentJobs = () => {
  const recJobs = [
    {
      jobTitle: "Hard Ware Engineer",
      type: "Fulltime",
      companyName: "It Hardware & Network Pvt ltd",
      location: "USA",
    },
    {
      jobTitle: "Web Designer",
      type: "Partime",
      companyName: "Spinson Software Solution",
      location: "USA,Uk",
    },
  ];

  const data = {
    heading: "Recent Jobs",
    description: "Check out the latest vacancies",
  };

  return (
    <div className="flex flex-col justify-around gap-20 items-center py-20">
      <CompoHeading data={data}/>
      <div className=" w-3/4 flex flex-col gap-2">
        {recJobs.map((job, index) => (
          <JobAdvtCard key={index} data={job} />
        ))}
      </div>
      <button className="border-2 border-blue-800  font-semibold py-2 px-4 text-blue-800  hover:bg-blue-800  hover:text-white">
        Show more 
      </button>
    </div>
  );
};
