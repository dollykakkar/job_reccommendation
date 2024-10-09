import React from "react";
import { CompoHeading } from "../Components/CompoHeading";
import { JobTypeCard } from "../Components/JobTypeCard";
import { ImHome2 , ImOffice } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

export const JobType = () => {
  const headingdata = {
    heading: "Job Types",
    description:
      "This section lists various types of jobs available in the company.",
  };

  const jobTypeData = [
    {
      title: "Work From Home",
      icon: <ImHome2/>
    },
    {
      title: "Internship",
      icon: <FaCalendarAlt/>,
    },
    {
      title: "Full Time",
      icon: <GiSandsOfTime />,
    },
    {
      title: "Part Time",
      icon: <ImOffice/>,
    },
  ];
  return (
    <div className="flex flex-col justify-around gap-20 items-center py-20 bg-[#f0f3fa]">
      <CompoHeading data={headingdata} />
      <div className="flex flex-col sm:flex-row gap-6">
        {
            jobTypeData.map((item) => (
              <JobTypeCard key={item.title} data={item} />
            ))
        }
      </div>
    </div>
  );
};
