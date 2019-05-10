import React from 'react';
import axios from 'axios';

import VideoPlayer from '../../components/videoplayer';
// import VideoInfo from '../../components/videoinfo';
import SideVideos from '../../components/sidevideos';

const apiLinkVids = 'https://project-2-api.herokuapp.com/videos/';
const apiKey = '?api_key=d768575a-1d10-4607-925b-b8fd9fc88364';

class Videos extends React.Component {

    state = {};

    componentDidMount () {
        axios
            .get(`${apiLinkVids}${apiKey}`)
            .then(response => {this.setState({videos: response.data}); })
            .catch(error => {console.log(error)});
    }
        
        render () {
            return (
            <>
                <VideoPlayer {...this.props} />
                {/* <VideoInfo videos {...this.props} /> */}
                <SideVideos {...this.props} videos = {this.state.videos} />
            </>
        )
    }
}

export {apiKey, apiLinkVids};
export default Videos;