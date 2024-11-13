import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg h-20 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <i className="fa-brands fa-slack text-blue-500 text-3xl"></i> <span className="text-black">rejoin</span>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>

          {/* Navigation Links and Buttons */}
          <ul
            className={`flex-col md:flex-row md:flex justify-between items-center space-y-4 md:space-y-0 md:space-x-9 font-bold absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen ? "top-20" : "top-[-490px]"
            }`}
          >
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/dashboard">My Dashboard</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </li>

            {/* Buttons for mobile view */}
            <div className="flex flex-col md:hidden space-y-4">
              <Link to="/submitjob">
                <button className="h-10 w-28 rounded bg-orange-500 cursor-pointer text-white text-base  font-bold hover:bg-orange-400">
                  Submit a Job
                </button>
              </Link>
              <Link to="/signup" className="h-10 w-32 rounded cursor-pointer text-white text-base font-bold bg-blue-600 hover:bg-blue-400">
                SignUp
              </Link>
            </div>
          </ul>

          <div className="hidden md:flex space-x-6">
            <Link to="/submitjob" className="h-10 w-28 rounded bg-orange-500 cursor-pointer text-white p-1 text-base font-bold hover:bg-orange-400">
              Submit a Job
            </Link>
            <Link to="/signup" className="h-10 w-32 rounded cursor-pointer text-white text-base p-1 pl-9 font-bold bg-blue-600 hover:bg-blue-400">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
