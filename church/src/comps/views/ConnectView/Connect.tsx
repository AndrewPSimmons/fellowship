import React from 'react'
import d from '../../../d'

type connection = {
    title: string
    info: {
        type: string
        value: string | JSX.Element
        href?: string
    },
    bullets: string[]
}
export default function Connect() {
    return (
        <div className='flex flex-col items-center justify-center animate-fadeInFull px-[10%]'>
            <div className='flex flex-col ml-[10%]'>
                {d.connectView.connections.map((con: connection, idx: number) => {
                    return <div className={'py-4  a '}  >
                        <div className={'flex items-center ' + (con.info.type == "comp" ? " justify-center lg:justify-start" : "flex-col lg:flex-row")}>
                            <h1 className='text-4xl pr-4'>{con.title}</h1>
                            {con.info.type == "text" && <h2 className=' underline text-2xl'>{con.info.value}</h2>}
                            {con.info.type == "comp" && con.info.value}
                            {con.info.type == "link" && <a href={con.info.href} target="_blank" className='text-xl text-gray-500'>[open]</a>}
                        </div>
                        <ul className='list-disc list-outside'>{
                            con.bullets.map((bullet) => {
                                return <li><h3 className='text-xl max-w-[900px]'>{bullet}</h3></li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </div>
    )
}
