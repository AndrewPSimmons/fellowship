import React from 'react'
import d from '../../../d'
import Verse from '../../Verse'
export default function Vision() {
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-4xl'><b className='font-medium'>Vision</b>:  {d.vision.question}?</h1>
      <Verse verse={d.vision.verse} verseRef={d.vision.verseRef} />
    </div>
  )
}
