import React from 'react'

const Features = ({text,title,titl,tex}) => {
  return (
    <div id='features'className=''>
      <div className='h-1 w-7 bg-[purple] mt-2 rounded'/>
      <div className='grid grid-cols-2'>
       <h1>{title}</h1>
       <p className='text-[6px] text-[#81AFDD] md:text-sm'>{text}</p>
      </div>
      <div className='w-full'>
        <h1 className='text-[7px] md:text-sm font-bold'>{titl}</h1>
        <p className='text-[6px] text-[#81AFDD] mt-5 md:text-sm'>{tex}</p>
      </div>
    </div>
  )
}

export default Features