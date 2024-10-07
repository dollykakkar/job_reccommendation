import React, { useState } from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import img from "../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import img1 from "../../Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import { EmployeeProfileCard } from '../../Components/EmployeeProfileCard'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const FeaturedEmployers = () => {
    const heading = {
        heading: 'Featured Employers',
        description: 'Employers you may want to work with'
    }

    const employeesData = [
        {
            name: "Zonty Jakhar",
            tech: "NextJS Developer",
            exprience: "3 Years",
            profilePic: img1
        },
        {
            name: "Dolly Kakkar",
            tech: "MERN Developer",
            exprience: "5 Years",
            profilePic: img
        },
        {
            name: "Bhannu Pahal",
            tech: "React Developer",
            exprience: "2 Years",
            profilePic: img
        },
        {
            name: "Veena",
            tech: "MERN Developer",
            exprience: "3 Years",
            profilePic: img
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleLeftClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + employeesData.length) % employeesData.length)
    }

    const handleRightClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % employeesData.length)
    }

    return (
        <div className='flex flex-col justify-around gap-20 items-center py-20'>
            <CompoHeading data={heading} />

            <div className='flex flex-wrap justify-center items-center gap-10'>
                <FaArrowLeft size="32" onClick={handleLeftClick} />
                
                {/* Display the current employee card */}
                <EmployeeProfileCard data={employeesData[currentSlide]} />

                {/* Display the next employee card, ensuring the index wraps correctly */}
                <EmployeeProfileCard data={employeesData[(currentSlide + 1) % employeesData.length]} />

                <FaArrowRight size="32" onClick={handleRightClick} />
            </div>
        </div>
    )
}

