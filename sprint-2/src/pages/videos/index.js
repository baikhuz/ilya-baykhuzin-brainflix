import React from 'react';
import VideoPlayer from '../../components/videoplayer';
import VideoInfo from '../../components/videoinfo';
import SideVideos from '../../components/sidevideos';

class Videos extends React.Component {
    
    componentDidUpdate() {
        console.log(this.props.videos);

    }

    render () {
        return (
            <>
                <VideoPlayer  />
                <VideoInfo />
                <SideVideos />
            </>
        )
    }
}

export default Videos;