import React from 'react';
import axios from 'axios';

import './styles.scss';
import VideoInfo from '../videoinfo';
import SideVideos from '../../components/sidevideos';

import {apiLinkVids, apiKey} from '../../pages/videos';

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
                    { this.state.video ? <video className = "main-video" poster = {this.state.image} controls>
                        <source src = {this.state.video + apiKey} type = "video/mp4"/>
                    </video> : null }
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