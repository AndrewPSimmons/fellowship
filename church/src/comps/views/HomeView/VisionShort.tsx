import React from 'react'
import d from '../../../d'
import { Link } from 'react-router-dom'
import GeneralButton from '../../GeneralButton'
export default function VisionShort() {
  return (
    <>
        {d.homeView.visionStatement}
        <Link to={"/about"}>
        <GeneralButton text='Our Vision'/>
        </Link>
    </>
  )
}
