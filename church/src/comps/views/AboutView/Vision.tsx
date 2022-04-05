import React from 'react'
import d from '../../../d'
import Verse from '../../Verse'
/* 
vision: {
    title: "vision",
    question: "What does The Fellowship look like",
    verse: "They were continually devoting themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer. Everyone kept feeling a sense of awe; and many wonders and signs were taking place through the apostles. And all those who had believed were together and had all things in common; and they began selling their property and possessions and were sharing them with all, as anyone might have need. Day by day continuing with one mind in the temple, and breaking bread from house to house, they were taking their meals together with gladness and sincerity of heart, praising God and having favor with all the people. And the Lord was adding to their number day by day those who were being saved.",
    verseRef: "Acts 2:42-47 NASB",
    texts: ["We are more and more becoming a culture that emanates Jesus. We are a place where people are transformed through"],
    text1bullets: ["Teaching", "Authentic Relationships", "Prayer", "Radical Generosity"]
  },
*/
export default function Vision() {
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-4xl'><b className='font-medium'>Vision</b>:  {d.vision.question}?</h1>
      <Verse verse={d.vision.verse} verseRef={d.vision.verseRef} />
      {d.vision.texts.map((text, i)=>{
        return <p className='text-xl' key={i}>{text}:</p>
      })}
      <ul className='flex flex-col list-disc items-start'>
      {d.vision.text1bullets.map((bullet, i)=>{
        return <li className='list-item' key={i}>{bullet}</li>
      })}
      </ul>
    </div>
  )
}
