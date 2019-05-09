import React from 'react';
import VideoPlayer from '../../components/videoplayer';
import VideoInfo from '../../components/videoinfo';

class Videos extends React.Component {

    
    render () {
        console.log(this.props.videos);
        return (
            <>
                <VideoPlayer />
                <VideoInfo />
            </>
        )
    }
}

export default Videos;