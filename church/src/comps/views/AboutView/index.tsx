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
    <div className='animate-fadeInFull px-[10%] lg:px-[17%] xl:px-[22%] flex items-center justify-center pb-10'>
      <div id='aboutContent' className='flex flex-col items-center justify-center space-y-5 pt-8  '>
        <Vision/>
        <Mission/>
        <Values />
      </div>
    </div>
  )
}
