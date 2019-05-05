import React, { Component } from 'react';
import '../../../styles/video-player.scss';

class VideoPlayer extends Component {

    
    render () {
        return (
            <div className = "main-video__container">
                <video className = "main-video" poster={this.props.poster} controls>
                    <source src = {this.props.video} type = "video/mp4"/>
                </video>
            </div>
        );
    }
}
export default VideoPlayer;

/* <div className="controls">
    <div className="controls__playbutton">
        <div className="controls__playbutton--switcher"></div>
    </div>
    <div className="controls__scrubber">
        <div className="controls__scrubber--timeline"></div>
    </div>
    <div className="controls__settings">
        <div className="controls__settings--fullscreen"></div>
        <div className="controls__settings--volume"></div>
    </div>
</div> */