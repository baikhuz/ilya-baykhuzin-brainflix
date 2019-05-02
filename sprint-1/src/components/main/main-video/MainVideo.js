import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import MainVideoInfo from './MainVideoInfo';
import MainVideoComments from './main-video-comments/MainVideoComments';

class MainVideo extends Component {
    render () {
        return (
            <>
                <VideoPlayer></VideoPlayer>
                <MainVideoInfo></MainVideoInfo>
                <MainVideoComments></MainVideoComments>
            </>
        );
    }
}
export default MainVideo;