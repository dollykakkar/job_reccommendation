import React from 'react'

export const JobTypeCard = (props) => {
    const {title,icon} = props.data
  return (
    <div className='w-72 h-72 p-8 bg-white flex flex-col justify-center items-center gap-3 hover:border-2  hover:border-blue-400'>
        <div className='w-40 h-40 bg-blue-400  flex justify-center items-center rounded-full text-white text-5xl'>
            {icon}
        </div>
        <h3 className=' text-gray-600 mt-2'>{title}</h3>
    </div>
  )
}
