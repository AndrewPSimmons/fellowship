import React from 'react'
import d from '../../../d'
import Verse from '../../Verse'
/* 
 {
    title: "mission",
    question: "What are we here to do",
    verse: "And He gave some as apostles, and some as prophets, and some as evangelists, and some as pastors and teachers, for the equipping of the saints for the work of service, to the building up of the body of Christ; until we all attain to the unity of the faith, and of the knowledge of the Son of God, to a mature man, to the measure of the stature which belongs to the fullness of Christ.",
    verseRef: "Ephesians 4:11-13 NASB",
    notes: ["Simply put, we’re here to equip the saints for the work of service and the building up of the body of Christ"],
  },
*/
export default function Mission() {
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-4xl'><b className='font-medium'>{d.mission.title}</b>:  {d.mission.question}?</h1>
      <Verse verse={d.mission.verse} verseRef={d.mission.verseRef} />
      {d.mission.notes.map((note, i)=> {
        return <p className='text-xl' key={i}>{note}</p>
      })}
    </div>
  )
}
