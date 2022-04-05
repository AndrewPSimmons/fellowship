import React, { useState } from 'react'
import d from '../../../d'
import Verse from '../../Verse'
/*
  values: {
    title: "Values",
    question: "What makes us, us?",
    texts: ["We are not ‘building a better mousetrap’. Nor do we think we have a silver bullet. God is calling and equipping people everywhere to advance His kingdom and He is faithful to get the job done. We don’t see ourselves as a new or better anything, just distinct to our fellowship. Here is what we feel like are the values that make us, us."],
    valuesArray: [{
      title: "Growth",
      verse: "until we all attain to the unity of the faith, and of the knowledge of the Son of God, to a mature man, to the measure of the stature which belongs to the fullness of Christ.",
      vesreRef: "Ephesians 4:13 NASB",
      notes: [
        "What growth means for us is not the number of people but the maturity of people. As Christ followers, our maturity is measured by how much we think, act and love like Jesus"
      ],
      texts: null
    },
    {
      title: "Discipleship",
      verse: "but speaking the truth in love, we are to grow up in all aspects into Him who is the head, even Christ,",
      verseRef: "Ephesians 4:15",
      notes: [
        "We take the command to ‘Make Disciples’ seriously. It is a calling, not only for leaders, but for every single disciple",
        "Everything that we do is done within the framework of life-on-life discipleship. We try our best to conquer the impossible task of making sure everyone is accounted for",
        "Follow Jesus’ model of making a few disciples...who make a few disciples...who make a few disciples",
        "This means that, throughout the week we are pursuing each other in smaller contexts so that we aren’t just a community group that meets on Sunday, but a family that is a part of each other’s life.",
      ],
      texts: null
    },
*/
type ValueType = {
  title: string,
  verse: string,
  verseRef: string,
  notes: string[],
  texts: string[]
}
type ValueProp = {
  value: ValueType
}

function Value({ value }: ValueProp) {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-2xl'><b>{value.title}</b></p>
      {value.verse.length > 0 && <Verse verse={value.verse} verseRef={value.verseRef} />}
      <ul className='list-disc flex flex-col items-start w-[75%]'>
        {!value.notes ? null : value.notes.map((note, i) => {
          return <li className='list-item text-left' key={i}>{note}</li>
        })}
      </ul>
      {value.texts.map((text, i) => {
        return <p key={i}>{text}</p>
      })}
    </div>
  )
}

export default function Values() {
  return (
    <div className='flex flex-col items-center text-center space-y-4'>
      <h1 className='text-4xl'><b className='font-medium'>{d.values.title}</b>:  {d.values.question}?</h1>
      <div className='flex flex-col space-y-8'>
        {d.values.valuesArray.map((value: ValueType, i: number) => {
          return <Value value={value} key={i} />
        })}
      </div>
    </div>
  )
}
