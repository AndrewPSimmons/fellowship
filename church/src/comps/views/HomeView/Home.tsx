import React from 'react'
import d from '../../../d'
import FacebookLink from '../../socialLinks/FacebookLink'
import InstagramLink from '../../socialLinks/InstagramLink'
import YoutubeLink from '../../socialLinks/YoutubeLink'
import SocialMediaButtons from '../../SocialMediaButtons'
import LocationInfo from './LocationInfo'

import VisionShort from './VisionShort'
export default function HomeView() {
  return (
    <div className='flex flex-col items-center'>
      <div id='home-1 ' className='flex flex-row sm:flex-col text-center'>
        <VisionShort/>
      </div>
      <div id="home-2" className='flex flex-col justify-center align-baseline'>
        <LocationInfo/>
        <p><b>Find us on</b></p>
        <SocialMediaButtons/>
      </div>
    </div>
  )
}
