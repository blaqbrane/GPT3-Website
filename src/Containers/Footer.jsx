import React from 'react'
import Logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <div className='bg-footerbg px-10 py-4'>
      <div>
        <div className='flex flex-col justify-center text-center mb-10'>
          <h1 className='text-xl mt-10 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-left md:text-center md:text-4xl'>Do you want to step into the future before others</h1>
          <button className='transform animate-pulse px-10 py-2 mx-auto rounded bg-[red]'>Register Early Acess</button>
        </div>
        <div className='grid grid-cols-2 text-[#81AFDD] md:grid-cols-4'>
          <div>
            <img src={Logo} alt="/" className='w-[70px] mt-5 mb-3'/>
            <p className='text-xs max-w-[200px] md:text-lg'>Cretchterwoord K12 182 DK Aknjkcb, All Right Reserve</p>
          </div>
          <ul className='text-xs md:text-lg text-right md:text-justify'>
            <li className='text-2xl font-bold text-white'>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
          </ul>
          <ul className='text-xs md:text-lg'>
            <li className='text-2xl font-bold text-white'>Company</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contacts</li>
          </ul>
          <ul className='text-xs text-right md:text-lg md:text-justify'>
            <li className='text-xl text-white font-bold'>Get in Touch</li>
            <li className='max-w-[200px]'>Cretchterwoord K12 182 DK Aknjkcb</li>
            <li className=''>085-132567</li>
            <li className=''>info@payme.net</li>
          </ul>
        </div>
        <div className='mt-10'>
          <p>@2022 GPT-3, All right Reserve</p>
        </div>
      </div>

    </div>
  )
}

export default Footer