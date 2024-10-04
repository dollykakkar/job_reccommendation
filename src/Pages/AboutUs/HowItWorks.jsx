import React from "react";
import { CompoHeading } from "../../Components/CompoHeading";
import megaPhoneImg from '../../Images/megaphone.png'
import userImg from '../../Images/user.png'
import pencilImg from '../../Images/pencil.png'
import graphImg from '../../Images/business-and-finance.png'

export const HowItWorks = () => {

  const compoHeading = {
    heading: "How It Works",
    description: "Discover the benefits of using our job recommendation app",
  };

  const howItWorksData = [
    {   
        icon: megaPhoneImg,
        title: "Create Accout",
        description: "Sign up with your email address and create a password",
    },
    {
        icon: userImg,
        title:"Register",
        description: "Fill out your profile information and select your preferred job categories",
    },
    {
        icon:pencilImg,
        title:"Search Jobs",
        description: "Search for jobs in your area, by location, or by industry",
    },
    {
        icon: graphImg,
        title:"Save And Apply",
        description: "Save your favorite jobs and apply them directly from our app",
    },
    
]

  return (
    <div className="flex flex-col justify-around gap-20 items-center py-20 bg-[#f0f3fa]">
        <CompoHeading data={compoHeading}/>
        <div className="flex justify-center w-full items-center gap-10">
            {
                howItWorksData.map((item) => (
                    <div className="flex w-52  text-center flex-col justify-center items-center gap-4">
                        <div className="w-32 h-32 rounded-full flex justify-center items-center bg-blue-200 ">
                        <img src={item.icon} alt="icon" className="h-20 w-20  object-cover"/>
                        </div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  );
};
