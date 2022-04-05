import React from 'react'
import { BounceLoader, BeatLoader } from 'react-spinners';

export function CustomBounceLoader(props) {
    return (
        <div className="loader">
            <BounceLoader loading={props.loading} />
        </div>
    )
}


export function CustomBeatLoader(props) {
    return (
        <div className="loader">
            <BeatLoader loading={props.loading} />
        </div>
    )
}
