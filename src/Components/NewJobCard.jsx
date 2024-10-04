import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaRegCalendarAlt ,FaBriefcase,FaDollarSign} from "react-icons/fa";
import { IoIosPerson } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
export const NewJobCard = (props) => {
    console.log('New JobCard',props.data)
    const { title, logo, location,exprience,type,salary, postedBy,postedAt,positions } = props.data
  return (
    <div className='w-[500px] bg-white pt-8 border-2 flex flex-col gap-4 justify-center items-center '>
        <div className='w-20 h-20 rounded-full overflow-hidden'>
           <img src={logo} alt="logo" className='w-full h-full object-contain'/>
        </div>
        <h2 className='font-semibold text-xl'>{title}</h2>
        <div className='grid grid-cols-2 gap-2 w-full px-4 '>
            <p className='flex items-center gap-2 '><IoLocation/> {location}</p>
            <p className='flex items-center gap-2 '><FaRegCalendarAlt/> {postedAt}</p>
            <p className='flex items-center gap-2 '><IoIosPerson /> {postedBy}</p>
            <p className='flex items-center gap-2 '><FaBriefcase/> {exprience} </p>
        </div>
        <div className='px-4  py-2 font-semibold border-2 rouned-md'>
            {positions} positions
        </div>
        <div className='flex w-full justify-between items-center py-4 px-10 border-t-2'>
            <p className='flex gap-2 items-center font-semibold'><IoTimeOutline/>{type}</p>
            <p className='flex gap-2 items-center font-semibold'><FaDollarSign/>{salary}</p>
        </div>
    </div>
  )
}
