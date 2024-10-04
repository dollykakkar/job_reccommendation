import React from "react";
import { CompoHeading } from "../Components/CompoHeading";
import { LatestJobCard } from "../Components/LatestJobCard";

export const LatestJobs = () => {
  const compoHeading = {
    heading: "Latest Jobs",
    description: "Check out our latest job openings",
  };

  const latestJobData = [
    {
      jobName: "Wanted Best Chefs",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "10000-20000",
      type: "Full Time",
      companyName: "G Technical Solutions",
      logo: "O",
    },
    {
      jobName: "Senior Front-end Developer",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "12000-15000",
      type: "Full Time",
      companyName: "Rosita Chatmon",
      logo: "O",
    },
    {
      jobName: "Senior Software Engineer",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      type: "Full Time",
      companyName: "Nexius Solutions",
      logo: "O",
    },
    {
      jobName: "Senior UX/UI Designer",
      description:
      "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "18000-25000",
      type: "Part Time",
      companyName: "Indigo Design",
      logo: "O",
    },
    {
      jobName: "Senior Data Scientist",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "20000-30000",
      type: "Work From Home",
      companyName: "Zeta Solutions",
      logo: "O",
    },
    {
      jobName: "Senior Blockchain Developer",
      description:
      "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "25000-40000",
      type: "Full Time",
      companyName: "Delta Solutions",
      logo: "O",
    },
    {
      jobName: "Senior Product Manager",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "22000-35000",
      type: "Full Time",
      companyName: "Omega Solutions",
      logo: "O",
    },
    {
      jobName: "Senior DevOps Engineer",
      description:
      "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "28000-45000",
      type: "Work From Home",
      companyName: "Sigma Solutions",
      logo: "O",
    },
  ];

  return (
    <div className="flex flex-col justify-around gap-20 items-center py-20 bg-[#f0f3fa]">
      <CompoHeading data={compoHeading} />
      <div className="flex gap-20 ">
        <div className="hover:text-blue-600 border-2 bg-white  px-4  py-2 rounded-full text-lg">
          All
        </div>
        <div className="hover:text-blue-600 border-2 bg-white  px-4  py-2 rounded-full text-lg">
          Full-time Jobs
        </div>
        <div className="hover:text-blue-600 border-2 bg-white  px-4  py-2 rounded-full text-lg">
          Part-time Jobs
        </div>
        <div className="hover:text-blue-600 border-2 bg-white  px-4  py-2 rounded-full text-lg">
          Work From Home Jobs
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 px-20">
        {
            latestJobData.map((job) => (
              <LatestJobCard data={job} key={job.jobName} />
            ))
        }

      </div>

      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          View More
        </button>
  
    </div>
  );
};
