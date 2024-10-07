import React from 'react'
import img from "../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div>
      <div className='w-1/4 bg-white h-screen pt-6 pl-12 rounded-r-sm border-r border-t border-black'>
        <h3 className='text-black font-bold text-2xl'>My Dashboard</h3>
        <img src={img} className='h-20 w-20 rounded-full mt-4 ml-9'></img>
        <h6 className='text-black mt-1 ml-4 font-bold'>Robert MacLean</h6>
        <div className='mt-5'>
            <ul className='text-black space-y-6'>
                <li><i className="fa-solid fa-pen-to-square mr-4 ml-5"></i><Link>Edit Profile</Link></li>
                <li><i className="fa-solid fa-pen-to-square mr-4 ml-5"></i><Link>My Job</Link></li>
                <li><i class="fa-solid fa-wallet mr-4 ml-5"></i><Link>Payments</Link></li>
                <li><i class="fa-solid fa-wallet mr-4 ml-5"></i><Link>Orders</Link></li>
                <li><i class="fa-solid fa-gear mr-4 ml-5"></i><Link>Setting</Link></li>
                <li><i class="fa-solid fa-right-from-bracket mr-4 ml-5"></i><Link>Log Out</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
