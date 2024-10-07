import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="p-20 bg-[#e9f3f9] flex justify-center items-center ">
      <div className="w-2/5 ">
        <h2 className="text-xl font-semibold py-2">Log In</h2>
        <div className="w-full flex gap-4 justify-between ">
          <div className="flex w-full justify-center items-center gap-2 bg-blue-600 p-2 text-white rounded-md">
            <BsGoogle />
            <p className="font-medium">Login With Google</p>
          </div>

          <div className="flex w-full justify-center items-center gap-2 bg-gray-600 p-2 text-white rounded-md">
            <BsGithub />
            <p className="font-medium">Login With Github</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold p-2 text-center">OR</h2>
        <form action="" >
            <div>
                <label htmlFor="email" className="font-medium">Mail or Username</label>
                <input type="text" name="" id="email" className="w-full h-8 rounded mt-2 outline-none" />
            </div>

            <div className="mt-4">
                <label htmlFor="password" className="font-medium">Password</label>
                <input type="password" name="" id="password" className="w-full h-8 rounded mt-2 outline-none" />
            </div>
            
            <div className="mt-2">
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded mt-2 font-medium">Login</button>
            </div>
        </form>
        <p className="text-center mt-4">Forgot Password? <Link to="/resetpassword" className="text-blue-600">Reset Password</Link></p>
        <p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>

      </div>
      
    </div>
  );
};
