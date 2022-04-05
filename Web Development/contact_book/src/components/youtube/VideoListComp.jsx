import React, { Component } from 'react'

export class VideoListComp extends Component {
    video = this.props.video;
    onVideoSelect = this.props.onVideoSelect;

    render() {
        return (
            <div className="card mb-1" onClick={() => this.onVideoSelect(this.video)} style={{ width: '30rem', height: '22rem', cursor: 'pointer' }}>
                <img className="card-img-top" src={this.video.snippet.thumbnails.medium.url} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{this.video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoListComp
