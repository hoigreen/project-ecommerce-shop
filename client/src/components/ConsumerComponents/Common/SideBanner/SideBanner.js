import React from 'react'

import "./side-banner.css"

const SideBanner = () => {
    return (
        <div>
            <div className="side-banner">
                <img className="side-banner__left" src="http://localhost:4000/public/side-banner-home-left.png"></img>
                <img className="side-banner__right" src="http://localhost:4000/public/side-banner-home-right.png"></img>
            </div>
        </div>
    )
}

export default SideBanner