import React, { useContext, useEffect, useState } from 'react'
import routes from '../router'
import NavItem from './NavItem'
import LogoText from './svgs/LogoWithText'
import { Link } from 'react-router-dom'
import useViewport from '../hooks/useViewport'

import { Transition } from '@headlessui/react'
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  // const width = useViewport().width
  return (
    //animate-slideInFromTop bg-gradient-to-b from-white via-gray-100 to-gray-300 
    <nav className=" bg-gradient-to-b from-white via-gray-100 to-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="flex flex-row items-center sm:justify-around w-[70%]">
            <div className="">
              <Link to="/" className='flex flex-col justify-center align-center'>
                <div onClick={()=>setIsOpen(false)}><LogoText width="175px" height="" /></div>
              </Link>
            </div>
            <div className='flex w-full flex-row justify-center'>
              <div className=' text-black hidden sm:flex flex-row justify-between'>
                {routes.map((route, i) => {
                  if (!route.inNav) { return }
                  return <NavItem key={i} to={route.path} label={route.label} classes="py-2" />
                })}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={(isOpen ? "bg-gradient-to-t from-white to-grey-300 rounded-md" : " ") + " inline-flex items-center justify-center p-2 rounded-md text-gray-300"}// hover:text-white hover:bg-gradient-to-t hover:from-white hover:to-gray-300 "}//focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a> */}
              {routes.map((route, i) => {
                if (!route.inNav) { return }
                return <div onClick={()=>{setIsOpen(false)}}><NavItem key={i} to={route.path} label={route.label} classes="hover:bg-gray-500 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium" /></div>
              })}

            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
  return (
    <nav className='bg-green-200'>
      <div className='mx-auto flex flex-row justify-between align-center h-16 sm:px-[10%]'>
        <Link to="/" className='flex flex-col justify-center align-center hover:bg-blue-200 '>
          <LogoText width="175px" height="150px" />
        </Link>
        <div className='hidden sm:flex flex-row justify-between space-x-2 lg:space-x-6 xl:space-x-12 '>
          {routes.map((route, i) => {
            if (!route.inNav) { return }
            return <NavItem key={i} to={route.path} label={route.label} />
          })}
        </div>
        <div id='mobileMenue' className='-mr-2 flex sm:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="mr-8 px-4 bg-blue-300 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800  focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )} */}
            <div className='flex-row justify-between space-x-2 lg:space-x-6 xl:space-x-12 '>
              {routes.map((route, i) => {
                if (!route.inNav) { return }
                return <NavItem key={i} to={route.path} label={route.label} />
              })}
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  )
}
