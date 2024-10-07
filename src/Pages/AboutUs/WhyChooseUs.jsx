import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'

export const WhyChooseUs = () => {
    const compoHeading = {
        heading: "WHY CHOOSE US",
        description: "Some reasons why you should choose our services",
    }

    const whyChooseUsData=[
        {
            title:"Job Security",
            description:"We provide a secure and reliable platform for job seekers",
        },
        {
            title:"Job Recommendations",
            description:"Our expertise in job search helps you find the perfect job",
        },
        {
            title:"Personalized Advice",
            description:"We provide personalized advice based on your job search history",
        },
        {
            title:"Recruitment Service",
            description:"We help you find recruiters and companies that align with your skills and interests", 
        },
        {
            title:"User Friendly",
            description:"Our website is user-friendly and easy to navigate",
        },
        {
            title:"24/7 Support ",
            description:"We are always here to help you",
        }
    ]
  return (
    <div className='flex flex-col  justify-around gap-20 items-center py-20 bg-[#f0f3fa]'>
        <CompoHeading data={compoHeading}/>
        <div className='flex flex-wrap justify-center items-center gap-10 px-40'>
            {
                whyChooseUsData.map((item,index)=>(
                    <div key={index} className='flex flex-col  rounded-lg items-center gap-4 text-center p-4 h-52 w-60 overflow-hidden text- bg-white'>
                        <h2 className='text-2xl font-semibold h-20 flex justify-center items-center'>{item.title}</h2>
                        <p className='text-wrap'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
