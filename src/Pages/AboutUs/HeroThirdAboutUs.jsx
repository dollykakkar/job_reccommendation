import React from "react";
import membersImg from '../../Images/team.png'
import rocketImg from '../../Images/rocket.png'
import companyImg from '../../Images/office.png'
import smileImg from '../../Images/smile.png'

export const HeroThirdAboutUs = () => {

  const numberData = [
    {
      icon: membersImg,
      number: "10,000+",
      description: "Members",
    },
    {
      icon: rocketImg,
      number: "2000+",
      description: "Jobs",
    },
    {
      icon: companyImg,
      number: "500+",
      description: "Companies",
    },
    {
      icon: smileImg,
      number: "10000+",
      description: "Happy Customers",
    }
  ]

  return (
    <>
      <div className="hero w-full flex justify-center items-center bg-blue-400 p-10 relative">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
        <div className="h-full w-full flex justify-center items-center gap-10 z-10 relative text-white">
          {
            numberData.map((data, index) => (
              <div key={index} className="flex flex-col items-center p-10 gap-4 bg-[#e9e9e93f] rounded-lg">
                <div className="w-28 overflow-hidden  bg-slate-200 h-28 flex justify-center items-center rounded-full ">
                <img className="w-20 h-20" src={data.icon} alt={data.description} />
                </div>
                <h3 className="text-white text-2xl">{data.number}</h3>
                <p className="">{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
