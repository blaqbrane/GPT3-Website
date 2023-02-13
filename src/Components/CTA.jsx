import React from 'react'

const CTA = () => {
  return (
    <div className='px-10 py-4 mt-10'>
      <div className='flex flex-col items-center justify-center py-10 px-4 rounded-md bg-gradient-to-r from-[#AE67FA] to-[#F49867] hover:scale-105 duration-500 md:flex-row md:justify-between'>
        <div className='text-black w-full text-sm md:text-xl'>
          <h4 className='font-bold'>Through all the possibilities</h4>
          <h1 className='font-bold'>Register today and start exploring the endless possibilities</h1>
        </div>
        <div>
          <button className='transform animate-pulse text-white bg-black w-[150px] rounded-full mt-4 md:mt-0 px-4 py-2'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CTA