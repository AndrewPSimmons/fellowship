import React from 'react'
import { Link } from 'react-router-dom'
export default function NavItem({to, label, classes=""}: any) {
  return (
        <Link className={'flex flex-col justify-center align-center hover:text-white hover:bg-gray-500 hover:rounded-md px-2' + " " + classes }  to={to}>
            <div>
            {label}
            </div>
        </Link>
  )
}
