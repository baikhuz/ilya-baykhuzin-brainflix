import React from 'react';
import axios from 'axios';

import VideoInfo from '../VideoInfo/VideoInfo';
import SideVideos from '../SideVideos/SideVideos';

import './styles.scss';
import {apiLinkVids, apiKey} from '../../apiLinks';

class VideoPlayer extends React.Component {

    state = {};

    componentDidUpdate() {
        const id = this.props.match.params.id;

        if (id !== this.state.id) {
            axios
                .get(`${apiLinkVids}${id}${apiKey}`)
                .then(response => {this.setState (response.data)})
                .catch(error => {console.log(error)})
        }
    }
    
    render () {
        return (
            <>
                <div className = "main-video__container">
                    { this.state.video ? 
                        <video className = "main-video" poster = {this.state.image} >
                            <source src = {this.state.video + apiKey} type = "video/mp4"/>
                        </video> 
                    : null }
                    <div className="controls">
                            <div className="controls__play-pause">
                                <button className="controls__play-pause--button"></button>
                            </div>
                            <div className="controls__scrubber">
                                <div className="controls__scrubber--line"></div>
                            </div>
                            <div className="controls__size-volume">
                                <div className="controls__size-volume--size">
                                    <button className="controls__size-volume--size--button"></button>
                                </div>
                                <div className="controls__size-volume--volume">
                                <button className="controls__size-volume--volume--button"></button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="vid-info">
                    <VideoInfo currentVideo = {this.state} />
                    <div className="sidevid-container">
                        <SideVideos id={this.props.match.params.id} videos = {this.props.videos} />
                    </div>
                </div>
            </>
        )
    }
}

export default VideoPlayer;