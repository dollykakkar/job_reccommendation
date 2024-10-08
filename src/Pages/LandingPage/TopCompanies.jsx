import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import img from '../../Images/pngwing.com.png'

export const TopCompanies = () => {
    const compoHeading = {
        heading: "Top Companies",
        description: "Some of our most popular companies",
    }

  return (
    <div className='flex flex-col justify-around gap-20 items-center py-20'>
        <CompoHeading data={compoHeading} />

        <div className='flex gap-20 justify-center items-center'>
            <div className='w-32 h-32 bg-[#e8e8e8] p-4 '>
                <img src={img} alt="company logo" />
            </div>
            <div className='w-32 h-32 bg-[#e8e8e8] p-4 '>
                <img src={img} alt="company logo" />
            </div>
            <div className='w-32 h-32 bg-[#e8e8e8] p-4 '>
                <img src={img} alt="company logo" />
            </div>
            <div className='w-32 h-32 bg-[#e8e8e8] p-4 '>
                <img src={img} alt="company logo" />
            </div>
        </div>
    </div>
  )
}
