import React from 'react'
import FacebookLink from './socialLinks/FacebookLink'
import InstagramLink from './socialLinks/InstagramLink'
import YoutubeLink from './socialLinks/YoutubeLink'

export default function SocialMediaButtons({ width = 25 }) {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-center sm:justify-start space-x-2'>
                <InstagramLink width={width} />
                <p className='hidden sm:flex'> Instagram</p>
            </div>
            <div className='flex flex-row items-center justify-center sm:justify-start space-x-2'>
                <YoutubeLink width={width} />
                <p className='hidden sm:flex'> Youtube</p>
            </div>
            <div className='flex flex-row items-center justify-center sm:justify-start space-x-2'>
                <FacebookLink width={width} />
                <p className='hidden sm:flex'> Facebook</p>
            </div>
            
        </div>
    )
}
