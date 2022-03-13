import React from 'react'
import d from '../../d'
import FacebookLogo from '../svgs/FacebookLogo'
export default function FacebookLink({ width = 250 }: any) {
    return (
        <div style={{ width: width }}>
            <a href={d.socials.facebook.url} target="_blank" style={{ width: width }}>
                <FacebookLogo width={width}>
                </FacebookLogo>
            </a>
        </div>
    )
}
