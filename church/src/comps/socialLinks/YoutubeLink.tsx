import React from 'react'
import YoutubeLogo from '../svgs/YoutubeLogo'
import d from '../../d'
export default function YoutubeLink({ width = 250 }: any) {
    return (
        <div style={{ width: width }}>
            <a href={d.socials.youtube.url} target="_blank" style={{ width: width }}>
                <YoutubeLogo width={width}>
                </YoutubeLogo>
            </a>
        </div>
    )
}
