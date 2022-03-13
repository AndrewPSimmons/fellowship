import React from 'react'
import d from '../../../d'
import FacebookLink from '../../socialLinks/FacebookLink'
import InstagramLink from '../../socialLinks/InstagramLink'
import YoutubeLink from '../../socialLinks/YoutubeLink'

import VisionShort from './VisionShort'
export default function HomeView() {
  return (
    <div className='flex flex-col items-center'>
        <div id='home-1 ' className='flex flex-row sm:flex-col '>
            <p className='text-4xl'>{d.homeView.visionStatement}</p>
        </div>
        <div id="home-2" className='flex flex-col justify-center align-baseline'>
          <InstagramLink width="150"/>
          <FacebookLink width="150"/>
          <YoutubeLink width="150"/>
        </div>
    </div>
  )
}
