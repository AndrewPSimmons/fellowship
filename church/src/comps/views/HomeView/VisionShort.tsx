import React from 'react'
import d from '../../../d'
import { Link } from 'react-router-dom'
import GeneralButton from '../../GeneralButton'
import NavButton from '../../NavButton'
export default function VisionShort() {
  return (
    <div className='flex flex-col items-center'>
        <p className='text-4xl'>{d.homeView.visionStatement}</p>
        <NavButton to="/about" buttonText='Our Vision' classes='bg-gray-300'/>
    </div>
  )
}
