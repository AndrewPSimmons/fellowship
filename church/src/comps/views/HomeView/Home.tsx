import React from 'react'
import { Link } from 'react-router-dom'
import d from '../../../d'
import FacebookLink from '../../socialLinks/FacebookLink'
import InstagramLink from '../../socialLinks/InstagramLink'
import YoutubeLink from '../../socialLinks/YoutubeLink'
import SocialMediaButtons from '../../SocialMediaButtons'
import Logo from '../../svgs/Logo'
import LocationInfo from './LocationInfo'

import VisionShort from './VisionShort'
export default function HomeView() {
  return (
    <div className='flex flex-col items-center h-screen w-screen font-roboto '>
      <div className=' w-full flex flex-col items-center text-center'>
        <div className='flex lg:flex-row flex-col justify-center items-center pt-8  py-6 font-black stroke-2 my-10'>
          <h1 className='text-6xl animate-slideInFromLeft text-center lg:max-w-[410px]'>Preach The Gospel.</h1>
          <div className='animate-fadeInFull hidden '><Logo width={250} ></Logo></div>
          <div className='from-black to-gray-500 bg-gradient-to-tr w-80 h-6 lg:rotate-[30deg] lg:h-48 lg:w-6 shadow-lg animate-fadeInFull' ></div>
          {/* <div className='from-blue-600 to-green-400 bg-gradient-to-t w-80 h-6 lg:rotate-[30deg] lg:h-48 lg:w-6' ></div> */}
          <h1 className='text-6xl animate-slideInFromRight text-center lg:max-w-[410px]'>Make Disciples.</h1>
        </div>
        {/* animate-slideInFromBottom */}

        {/* <div id='home-1 ' className='flex flex-row sm:flex-col text-center'>
        <VisionShort/>
      </div> */}


      </div>
      {/* animate-slideInFromBottom  */}
      <div className='flex flex-col items-center justify-start  bg-blue-100 bg-opacity-50 w-full px-[15%] h-full'>
        <h1 className='text-4xl py-8  stroke-2 font-light italic text-center'>Helping people meet Jesus and be transformed by Him</h1>
        {/* <h1 className='my-8 text-6xl'>Calendar</h1> */}
        <h2 className='font-bold text-2xl'>Sundays @ 1 pm</h2>
        <h2>Join us at <p className='underline inline'>{d.addressShort}</p> for worship and teaching each week</h2>
        <h1 className='font-bold pt-8 text-2xl'>Wednesday @ 6 pm</h1>
        <h2>Contact us at <p className='underline inline'>{d.email.connect}</p> to join one of our fellowship groups </h2>
        <h2>Prayer and worship is all-together on the last Wednesday of each month</h2>
        <div id="home-2" className='flex flex-row justify-center align-baseline md:space-y-0 space-x-12 py-12 '>
          {/* Social links */}
          <div className='flex flex-col md:flex-row md:space-x-12 justify-center items-center'>
            <div className='flex flex-col items-center'>
              <FacebookLink width={50} />
              <h3 className='text-xl font-semibold'>Facebook</h3>
            </div>
            <div className='flex flex-col items-center'>
              <YoutubeLink width={50} />
              <h3 className='text-xl font-semibold'>Youtube</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-12 justify-center items-center'>
            <div className='flex flex-col items-center'>
              <InstagramLink width={50} />
              <h3 className='text-xl font-semibold'>Instagram</h3>
            </div>
            {/* <div className='flex flex-col items-center'>
              <div className='h-[50px] text-center'>Placeholder</div>
              <h3 className='text-xl font-semibold'>Church Center</h3>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
} 
