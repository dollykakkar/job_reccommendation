import React from 'react'
import { CompoHeading } from '../Components/CompoHeading'
import img from "../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import img1 from "../Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import { EmployeeProfileCard } from '../Components/EmployeeProfileCard'
import { FaArrowRight , FaArrowLeft} from "react-icons/fa";




export const FeaturedEmployers = () => {
    const heading = {
        heading: 'Featured Employers',
        description : 'Employers you may want to work with'
    }
    const employeesData = [
        {
            name:"Zonty Jakhar",
            tech:"MERN Developer",
            exprience:"3 Years",
            profilePic:img1
        },
        {
            name:"Dolly Kakkar",
            tech:"React Developer",
            exprience:"5 Years",
            profilePic:img
        },
       
    ]
  return (
    <div className='flex flex-col justify-around gap-20 items-center py-20'>
        <CompoHeading data={heading}/>

        <div className='flex flex-wrap justify-center items-center gap-10'>
            <FaArrowLeft size="32"/>
            {employeesData.map((employee, index) => (
                <EmployeeProfileCard key={index} data={employee}/>
            ))}
            <FaArrowRight size="32"/>
        </div>
    </div>
  )
}
