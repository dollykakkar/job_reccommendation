import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import img from '../../Images/pngwing.com.png'
import { NewJobCard } from '../../Components/NewJobCard'

export const NewJobs = () => {
    const compoHeading = {
        heading:"New Jobs",
        description:"Check out the latest job opportunities in your area."
    }

    const newJobsData=[
        {
            logo:img,
            title:"Software Engineer jobs",
            location:"Los Angeles",
            exprience:"3 Years Exp",
            type:"Full Time",
            salary:"19-28",
            postedAt:"5 Hours ago",
            postedBy:"sam Reporter",
            positions:2
        },
        {
            logo:img,
            title:"Senior Software Engineer jobs",
            location:"New York",
            exprience:"5 Years Exp",
            type:"Full Time",
            salary:"25-35",
            postedAt:"6 Hours ago",
            postedBy:"John Reporter",
            positions:3
        },
        // {
        //     logo:img,
        //     title:"Lead Software Engineer jobs",
        //     location:"Chicago",
        //     exprience:"7 Years Exp",
        //     type:"Full Time",
        //     salary:"35-45",
        //     postedAt:"7 Hours ago",
        //     postedBy:"Emma Watson",
        //     positions:1
        // },
        // {
        //     logo:img,
        //     title:"Data Scientist jobs",
        //     location:"San Francisco",
        //     exprience:"8 Years Exp",
        //     type:"Full Time",
        //     salary:"45-55",
        //     postedAt:"8 Hours ago",
        //     postedBy:"Olivia Reporter",
        //     positions:4
        // }
    ]
  return (
    <div className='flex flex-col  justify-around gap-20 items-center py-20 bg-[#f0f3fa]'>
        <CompoHeading data={compoHeading}/>

        <div className='flex flex-wrap gap-20'>
            {
                newJobsData.map((item,index)=>(
                    <NewJobCard key={index} data={item}/>
                ))
            }
        </div>
    </div>
  )
}
