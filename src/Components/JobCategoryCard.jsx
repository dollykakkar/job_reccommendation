import React from 'react'

export const JobCategoryCard = (props) => {
    const {title,img} = props.data
  return (
    <div className='w-52 h-52 flex flex-col bg-white border-2 justify-center items-center hover:border-blue-600 '>
        <div className='w-24 h-24'>
            <img src={img} alt="" />
        </div>
        <h3 className='text-gray-600 mt-2'>{title}</h3>
    </div>
  )
}
