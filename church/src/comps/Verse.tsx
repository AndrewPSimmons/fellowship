import React from 'react'

export default function Verse({verse, verseRef, classes=""}: any) {
  return (
    <div className={"" + " " + classes}>
        <p>"{verse}"</p>
        <div>{verseRef}</div>
    </div>
  )
}
