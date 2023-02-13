import React from 'react'
import Ai from '../assets/ai.png'
import People from '../assets/people.png'


const Header = () => {
  return (
    <div className='px-10 py-4'>
      <div className='mx-auto flex flex-col-reverse items-center space-y-0 md:flex-row md:space-y-0'>
        <div className="flex flex-col space-y-2 md:w-1/2">
          <h1 className='text-2xl max-w-md bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-left md:text-5xl md:text-left'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p className='mt-5 text-[#81AFDD] max-w-sm text-left md:text-left'>Yet bed any for travelling assistance indulgence unpleasing </p>
          <p className='text-[#81AFDD] max-w-sm text-left md:text-left'>Not thought at exercise blessing indulgence away everything joy alteration concious the attachment Party we years to order allow asked of </p>
          <div className='flex items-center md:items-start'>
            <input type='text' placeholder='Your Email Address' className='bg-textgd rounded-l w-full py-3 h-14 outline-0 mt-5 placeholder:text-[gray] p-2'/>
            <button className='transform animate-pulse bg-red-700 px-10 rounded-r text-[8px] h-14 mt-5 w-4/12 font-bold md:text-xs'>Get Started</button>
          </div>
          <div className='flex flex-col items-center mt-4 md:flex-row'>
            <img src={People} alt='/'/>
            <p className='w-full ml-1 text-xs md text-md'>1,600 people requested access a visit in the last 24 hours</p>
          </div>
        </div>
        <div className='mt-10 w-full h-full md:mt-0 md:w-1/2'>
          <img src={Ai} alt='/' className='w-full h-full object-cover flex md:mt-[-60px]'/>
        </div>
      </div>
    </div>
  )
}

export default Header