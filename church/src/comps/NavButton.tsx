import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GeneralButton from './GeneralButton'
type NavButtonPropType = {
    to: string,
    buttonText: string,
    px?: number,
    py?: number,
    classes?: string
}
export default function NavButton({ to, buttonText, classes="bg-blue-300", py = 2, px = 4 }: NavButtonPropType) {
    return (
        <Link to={to} className="w-fit ">
            <button className={`px-4 py-2 rounded-md  ${classes}`}><p>{buttonText}</p></button>
        </Link>
    )
}
