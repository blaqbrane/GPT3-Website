import React from 'react'
import Datas from './Data'
import blog01 from '../assets/blog01.png'
const Blog = () => {
  return (
    <div id='blog'className='px-10 py-4 mt-16 mb-10 text-[#81AFDD] justify-center md:10'>
      <h1 className="text-5xl z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]">Alot is happening, we are blogging about it</h1>
      <div className='flex flex-col mt-28 md:gap-4 mx-auto justify-center justify-items-center md:flex-row'>
        <div className='flex flex-col col-span-2 justify-center mb-10 items-center h-[500px] hover:scale-105 duration-500 md:mt-12 md:w-1/2'>
          <img className='md:mt-9' src={blog01} alt=""/>
          <div className='bg-footerbg p-4 w-full rounded-b '>
            <h4 className="text-xs">Sep 23, 2023</h4>
            <p className='mt-2'>
              GPT-3 and Open Ai is the Future let's Explore how it is 
            </p>
            <p className='mt-40'>
              <a href='/'>Read Full Article</a>
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-20 w-full justify-center gap-x-14 gap-y-4 md:w-1/2 md:mt-3 md:gap-y-52'>
          {Datas.map((data) => {
            return(
              <div key={data.id} className='rounded hover:scale-105 duration-500'>
                <img className='' src={data.img} alt=''/>
                <div className='bg-footerbg p-4 rounded-b'>
                 <p className='text-[7px] md:text-xs'>{data.date}</p>
                 <p className='mt-4 text-[6px] md:text-xs md:mt-8'>{data.text}</p>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog