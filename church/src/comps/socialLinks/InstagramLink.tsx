import React from 'react'
import d from '../../d'
import InstagramLogo from '../svgs/InstagramLogo'
export default function InstagramLink({width=250}:any) {
  return (
    <div style={{ width: width }}>
        <a href={d.socials.instagram.url} target="_blank" style={{ width: width }}>
            <InstagramLogo width={width}>
            </InstagramLogo>
        </a>
    </div>
  )
}
