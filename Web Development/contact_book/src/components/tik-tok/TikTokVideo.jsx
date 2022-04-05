import React from 'react'

function TikTokVideo() {
    return (
        <div className="video">
            {/* <video className="video__player" src="https://www.youtube.com/embed/ScKlorYH8qM" controls ></video> */}
            {/* <video className="video__player" src="/Users/ekanshbharti/Downloads/VID_cybercell_crash.mp4" type="video/mp4" controls ></video> */}
            {/* <iframe className="video__player" src="https://www.youtube.com/embed/ScKlorYH8qM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            <video className="video__player" controls >
                <source src="https://www.youtube.com/watch?v=rt6TUy0g-ok" type="video/mp4" />
            </video>

        </div>
    )
}

export default TikTokVideo
