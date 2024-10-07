import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import cashierImg from '../../Images/cashier.png'
import bueaticianImg from '../../Images/make-up.png'
import driverImg from '../../Images/chauffer.png'
import itHardwareImg from '../../Images/integrated-system.png'
import bpoImg from '../../Images/call-center-service.png'
import nurseImg from '../../Images/nurse.png'
import deliveryImg from '../../Images/fast-delivery.png'
import itSoftwareImg from '../../Images/software-application.png'
import teacherImg from '../../Images/teacher.png'
import lifeInImg from '../../Images/healthcare.png'
import salesImg from '../../Images/increase.png'
import chefImg from '../../Images/chef.png'
import { JobCategoryCard } from '../../Components/JobCategoryCard'


export const JobCategory = () => {
    const compoHeading = {
        heading: "Job Categories",
        description: "Browse through our wide range of job categories",
    }
    const jobCategoryData = [
        {
            title: "Cashier",
            img: cashierImg,
        },
        {
            title: "Bueatician",
            img: bueaticianImg,
        },
        {
            title: "Driver",
            img: driverImg,
        },
        {
            title: "IT Hardware",
            img: itHardwareImg,
        },
        {
            title: "BPO",
            img: bpoImg,
        },
        {
            title: "Nurse",
            img: nurseImg,
        },
        {
            title: "Delivery",
            img: deliveryImg,
        },
        {
            title: "IT Software",
            img: itSoftwareImg,
        },
        {
            title: "Teacher",
            img: teacherImg,
        },
        {
            title: "Life Insurance",
            img: lifeInImg,
        },
        {
            title: "Sales",
            img: salesImg,
        },
        {
            title: "Chef",
            img: chefImg,
        }
    ]
        
  return (
    <div className='flex flex-col justify-around gap-20 items-center py-20 bg-[#f0f3fa]'>
        <CompoHeading data={compoHeading}/>
        <div className='grid grid-cols-4 gap-12'>
            {
                jobCategoryData.map((item,index)=>(
                    <JobCategoryCard key={index} data={item}/>
                ))
            }
        </div>
        <button className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg'>
            View All
        </button>
    </div>

  )
}
