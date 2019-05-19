import React from 'react';
import axios from 'axios';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import './styles.scss';
import {apiLinkVids} from '../../apiLinks.js';

class Videos extends React.Component {

    state = {};

    componentDidMount () {
        axios
            .get(`${apiLinkVids}`)
            .then(response => {this.setState({videos: response.data}); })
            .catch(error => {console.log(error)});
    }
        
        render () {
            return (
            <div className="content-container">
                <VideoPlayer {...this.props} videos = {this.state.videos} />
            </div>
        )
    }
}

export default Videos;