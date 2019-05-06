import React, { Component } from 'react';
import videodata from '../../../assets/Video/videodata.js';
import VideoPlayer from './VideoPlayer';
import MainVideoInfo from './MainVideoInfo';

class MainVideo extends Component {

    state = {
        video: videodata.mainVid.video,
        title: videodata.mainVid.title,
        poster: videodata.mainVid.image,
        channel: videodata.mainVid.channel,
        timestamp: videodata.mainVid.timestamp,
        views: videodata.mainVid.views,
        likes: videodata.mainVid.likes,
        description: videodata.mainVid.description,
        comments: videodata.mainVid.comments,
        sideVids: videodata.allVids
    }

    
    render () {
        return (
            <>
                <VideoPlayer
                    video = {this.state.video}
                    poster = {this.state.poster}
                />
                <MainVideoInfo 
                    title = {this.state.title}
                    channel = {this.state.channel}
                    timestamp = {this.state.timestamp}
                    views = {this.state.views}
                    likes = {this.state.likes}
                    description = {this.state.description}
                    comments = {this.state.comments}
                    sideVids = {this.state.sideVids}
                />
            </>
        );
    }
}
export default MainVideo;