import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlus,FaTwitter,FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";

export const Footer = () => {
  const footerHeadData = ["JOB CATEGORY", "JOB TYPE", "RESOURCES"];
  const footerLinksData = [
    ["Devlopment", "Designing", "Finance", "others"],
    ["Work From Home", "Internship", "Full-time", "Part-time"],
    ["Support", "FAQ", "Terms Of Service", "Contact Details"],
  ];

  return (
    <div className="bg-[#232429] text-white flex flex-col gap-10 w-full pt-20 pb-6">
        <div className="w-full flex px-20">

           
      <div className=" w-3/4">
        <div className="grid grid-cols-3 ">
          {footerHeadData.map((item, index) => (
            <h3 key={index} className="text-white text-xl font-bold mb-4">
              {item}
            </h3>
          ))}

          {footerLinksData.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              {item.map((link, index) => (
                <Link
                  href="#"
                  key={index}
                  className="text-white hover:text-blue-400"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white text-xl font-bold mb-4">SUBSCRIBE</h3>
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className=" p-2 text-black outline-none border-none w-full rounded-lg"
          />
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 mt-3 rounded-lg hover:bg-blue-800">
            Subscribe
          </button>
        </div>
      </div>
      </div>
      <div className="px-20 border-y py-4 border-gray-700 flex justify-between">
        <p className=" text-gray-400">�� 2022 Job Recommendation. All rights reserved.</p>
        <div className="flex gap-2 justify-center items-center">
          <FaGooglePlus size={22}/>
          <CiLinkedin size={22} />
          <TfiYoutube size={22} />
          <FaTwitter size={22} />
          <FaFacebook size={22} />
        </div>
      </div>
    </div>
  );
};
