import React from 'react'
import TikTokFooter from './TikTokFooter'
import TikTokHeader from './TikTokHeader'
import TikTokVideo from './TikTokVideo'

function TikTokHome() {
    return (
        <div className="tiktok-home">
            <div className="tik-tok">
                {/* <TikTokHeader /> */}
                <TikTokVideo />
                <TikTokVideo />
                <TikTokVideo />
                <TikTokVideo />
                <TikTokVideo />
                <TikTokVideo />
                {/* <TikTokFooter /> */}
            </div>
        </div>
    )
}

export default TikTokHome
