import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../../api/youtubeapi'
import VideoListComp from './VideoListComp';
import { CustomBounceLoader, CustomBeatLoader } from '../loaders/CustomLoaders'

export class Videos extends Component {

    state = {
        videoList: [],
        currentVideo: null
    }

    fetchVideos = async (searchString = 'Javascript') => {
        const res = await youtube.get('/search', {
            params: {
                q: searchString
            }
        });

        return res;
    }

    onSearch = async (e, searchString) => {
        e.preventDefault();
        this.setState({ videoList: [] });
        const res = await this.fetchVideos(searchString);
        this.setState({
            videoList: res.data.items,
            currentVideo: res.data.items[0]
        });
        console.log(searchString);
        console.log(this.state.videoList);
    }

    onVideoSelect = (video) => {
        this.setState({ currentVideo: video });
    }

    componentDidMount = async () => {
        const res = await this.fetchVideos();
        this.setState({ videoList: res.data.items });
        this.setState({ currentVideo: this.state.videoList[0] });
    }

    render() {
        return (
            <div className="container">
                <div className="mb-3 yt">
                    <h1 className="text-center">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;
                        YouTube</h1>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <SearchBar key="search" onSearch={this.onSearch} />
                        {this.state.currentVideo !== null ? (
                            <div>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={this.state.currentVideo !== '' ? `https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}` : 'https://www.youtube.com/embed/Odjlcy8ix2U'} allowfullscreen></iframe>
                                </div>
                                <div className="mt-2">
                                    <h3>{this.state.currentVideo.snippet.title}</h3>
                                </div>
                            </div>) : <CustomBounceLoader loading={true} />
                        }
                    </div>
                    <div className="col-md-4 yt-list">
                        <h2 className="text-center">{this.state.videoList.length ? 'Searched Results' : 'Searching'}</h2>
                        {this.state.videoList.length === 0 ? <CustomBeatLoader loading={true} /> : this.state.videoList.map(video => <VideoListComp key={video.id.videoId} video={video} onVideoSelect={this.onVideoSelect} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos
