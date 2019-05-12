import React from 'react';
import axios from 'axios';

import VideoPlayer from '../../components/videoplayer';
// import SideVideos from '../../components/sidevideos';

import './styles.scss';

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
            <div className="content-container">
                <VideoPlayer {...this.props} videos = {this.state.videos} />
                {/* <div className="sidevid-container">
                    <SideVideos {...this.props} videos = {this.state.videos} />
                </div> */}
            </div>
        )
    }
}

export {apiKey, apiLinkVids};
export default Videos;