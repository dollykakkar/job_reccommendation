import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="hero w-full flex justify-center items-center bg-blue-400 p-20 relative">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
        <h3 className="relative z-10 text-white font-semibold text-3xl">
          Contact Us
        </h3>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/5">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-600 w-full h-9 text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
