import { SideBarDashboard } from "./SideBarDashboard";
import React from 'react';
const Setting = () => {
  return (
    <div className="flex  relative gap-6 bg-[#dde5f8] ">
      <SideBarDashboard />
      <div className="pb-20 w-4/5 p-4 ">
        <h2 className="text-2xl font-semibold mb-4">SETTINGS</h2>
        <div className="border-b mb-4">
          <nav className="flex">
            <button className="flex-1 py-2 px-4 text-blue-600 font-semibold border-b-2 border-blue-600">
              General
            </button>
            <button className="flex-1 py-2 px-4 text-gray-600">Chat</button>
            <button className="flex-1 py-2 px-4 text-gray-600">Advanced</button>
          </nav>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Currency</label>
            <select className="w-full p-2 border rounded-md">
              <option>Choose currency</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select className="w-full p-2 border rounded-md">
              <option>Choose Language</option>
            </select>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number:
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="phone"
                    className="form-radio"
                    defaultChecked
                  />
                  <span className="ml-2">Visible to everyone</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="phone" className="form-radio" />
                  <span className="ml-2">Visible to only my Customers</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Profile:</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="profile"
                    className="form-radio"
                    defaultChecked
                  />
                  <span className="ml-2">Visible to everyone</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="profile" className="form-radio" />
                  <span className="ml-2">Visible to only my Customers</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
