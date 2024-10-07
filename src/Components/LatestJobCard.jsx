import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

export const LatestJobCard = (props) => {
    const {jobName,description,payScale,type,logo,companyName} = props.data
  return (
    <div className='border-2 bg-white'>
        <div className='py-4 px-8'>
            <h2 className='mb-2 font-semibold text-2xl'>{jobName}</h2>
            <p >{description}</p>
        </div>
        <div className='flex justify-between items-center py-4 px-10 border-2'>
            <p className='flex gap-2 items-center font-semibold'><FaDollarSign/>{payScale}</p>
            <p className='flex gap-2 items-center font-semibold'><IoTimeOutline/>{type}</p>
        </div>
        <div className='px-8 py-4 flex justify-between items-center'>
           <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full text-white flex justify-center items-center bg-black'>{logo}</div>
                <h2 className='font-semibold text-lg'>{companyName}</h2> 
           </div>
            <button className='bg-[#e34317] hover:bg-[#cb421c] text-white px-3 py-1.5 rounded-md '>See Details</button>
        </div>
    </div>
  )
}
