import React, { Component } from 'react';

class VideoPlayer extends Component {

    render () {
        return (
            <video width="320" height="240" controls>
                <source src={this.props.video} type="video/mp4"/>
            </video>
        );
    }
}
export default VideoPlayer;