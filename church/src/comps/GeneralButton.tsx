import React from 'react'

export default function GeneralButton({text, onClickFunction=()=>{return}, classes=""}:any) {
  return (
    <button className={"border px-2 py-1 bg-gray-200 hover:bg-gray-300" + " " + classes} type='button' onClick={onClickFunction}>{text}</button>
  )
}
