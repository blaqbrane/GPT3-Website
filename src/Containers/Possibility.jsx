import React from 'react'
import Possibl from "../assets/possibility.png"
const Possibility = () => {
  return (
    <div id='possibility' className='px-10 py-4'>
      <div className='grid items-center md:grid-cols-2'>
        <div>
          <img className="w-[394px]" src={Possibl} alt=''/>
        </div>
        <div className='mt-2 text-[#81AFDD] md:mt-32'>
          <h4>Request Early Access to Get Started</h4>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]'>The possibilities are beyond your imagination</h1>
          <p className='mt-4'>
            Yet bed any for travelling assistant, all can be what it is just don't take me where am not going to like maybe we may not be the best friend but we have got each other's back
          </p>
          <h4 className='mt-4 text-[#FF8A71]'>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility