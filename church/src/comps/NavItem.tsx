import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

type navItemProps = {
  to: string,
  label: string | undefined,
  classes?: string
}
export default function NavItem({ to, label, classes = "" }: navItemProps) {
  const routes = useLocation()
  useEffect(()=>{
    console.log(routes.pathname.split("/").pop());
  }, [])
  return (
    <Link className={'font-medium  flex flex-col justify-center align-center hover:text-white hover:bg-blue-400 hover:rounded-md px-2' + " " + classes} to={to}>
      <div className='flex flex-row md:flex-col  sm:flex-col '>
        <div className='md:hidden'>{routes.pathname.split("/").pop() == label?.toLowerCase() && <div className='w-1 h-full bg-blue-200'></div>}</div>
        {label}
        {routes.pathname.split("/").pop() == label?.toLowerCase() && <div className=' hidden md:block w-full h-1 bg-blue-200'></div>}
      </div>
    </Link>
  )
}
