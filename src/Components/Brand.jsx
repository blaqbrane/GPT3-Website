import React from 'react'
import Features from '../Containers/Features'
const Brand = () => {
  return (
    <div className='px-10 py-4 mt-58 md:'>
      <div className='shadow-lg rounded bg-textgd mx-auto hover:scale-105 duration-500'>
        <div className='flex justify-between p-4 mx-auto'>
          <Features title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate, eos consequatur accusamus reiciendis molestiae ullam optio esse minus ea'/>
        </div>
        <div className='flex justify-between items-center p-4 mx-auto'>
          <h1 className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] md:text-3xl'>The possibilities are beyound your imagination</h1>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]'>Expolore the Library</p>
        </div>
        <div className='grid grid-cols-3 mt-[30px] p-4 gap-4'>
          <Features className='' titl = 'Chatbots' tex='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate, eos consequatur accusamus reiciendis molestiae ullam optio esse minus'/>
          <Features titl ='Knowledge' tex='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate, eos consequatur accusamus reiciendis molestiae ullam optio esse minus' />
          <Features titl = 'Education' tex='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate, eos consequatur accusamus reiciendis molestiae ullam optio esse minus'/>
        </div>
      </div>
    </div>
  )
}

export default Brand