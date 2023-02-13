import React from 'react'
import Google from '../assets/google.png'
import Atlassian from '../assets/atlassian.png'
import Slack from '../assets/slack.png'
import Dropbox from '../assets/dropbox.png'
import Shopify from '../assets/shopify.png'

const Feature = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center'>
          <img src={Google} alt='/' className='text-white m-2 md:m-4'/>
          <img src={Slack} alt='/' className='text-white m-2 md:m-4'/>
          <img src={Atlassian} alt='/' className='text-white m-2 md:m-4'/>
          <img src={Dropbox} alt='/' className='text-white m-2 md:m-4'/>
          <img src={Shopify} alt='/' className='text-white m-2 md:m-4'/>
        </div>
    </div>
  )
}

export default Feature