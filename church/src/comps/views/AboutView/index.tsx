import React, { useEffect, useState } from 'react'

import Mission from './Mission'
import Values from './Values'
import Vision from './Vision'
import d from '../../../d'
export default function AboutView() {
  const [data, setData] = useState(d)
  useEffect(()=>{
    //Get data from endpoint eventually
    //setData(res.data)
    console.log("Getting page data");
  }, [])
  return (
    <div>
      <div id='aboutContent' className='flex flex-col items-center justify-center space-y-5 pt-8 md:px-32 sm:px-32 px-12'>
        <Vision/>
        <Mission/>
        <Values />
      </div>
    </div>
  )
}
