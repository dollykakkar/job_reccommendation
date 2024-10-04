import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import person1 from '../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import person2 from '../../Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'

export const Testimonial = () => {
    const compoHeading = {
        heading: "Testimonials",
        description: "What our clients say about us",
    }

    const testimonialData=[
        {
            name: 'John Doe',
            title: 'Software Developer',
            img: person1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit. Donec vel velit sagittis, sagittis justo in, elementum justo.'
        },
        {
            name: 'Jane Doe',
            title: 'Project Manager',
            img: person2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit. Donec vel velit sagittis, sagittis justo in, elementum justo.'
        },
        {
            name: 'Michael Doe',
            title: 'Team Lead',
            img: person1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit. Donec vel velit sagittis, sagittis justo in, elementum justo.'
        }
    ]
  return (
    <div className='flex flex-col justify-around gap-20 items-center py-20 bg-[#f0f3fa]'>
        <CompoHeading data={compoHeading}/>
        <div className='flex flex-wrap gap-10 w-full justify-center items-center'>
            {
                testimonialData.map((item,index)=>(
                    <div key={index} className='w-full max-w-sm rounded-lg shadow-md flex flex-col justify-center items-center text-center overflow-hidden bg-white p-4'>
                        
                        <div className=' flex justify-center items-center w-40 h-40 rounded-full bg-slate-800 overflow-hidden'>
                            <img className='object-cover h-full w-full' src={item.img} alt={item.name}/>
                        </div>

                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl'>{item.name}</div>
                            <div className='text-sm text-gray-600'>{item.title}</div>
                        </div>
                       
                        <div className='px-6 py-4'>
                            <p className='text-gray-700 text-base'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
