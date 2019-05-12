import React from 'react';
import './styles.scss';
import MainVideoComments from '../mainvideocomments';
import TimeAgo from 'react-timeago';

class VideoInfo extends React.Component {

    state = {
        currentVideo: {}
    }

    componentWillReceiveProps (newProps) {
        if (newProps.currentVideo && Object.keys(newProps.currentVideo).length > 0)
            this.setState({currentVideo: newProps.currentVideo})
    }

    // ^^ this conditional checks whether 
    // (a) the .currentVideo props were received and
    // (b) there is at least 1 key-value pair inside the props object. this prevents
    // passing props down to children twice
    
    render () {

        const {
            channel, 
            description, 
            likes, 
            timestamp, 
            title,  
            views,
            comments
        } = this.state.currentVideo

        return (
            <div className="padding-sides videoinfo-container">
                <div className="info-and-comments">
                    <div className="video-info__container padding-sides">
                        <h1 className = "video-info__head h1-header">{title}</h1>
                        <div className="video-info__general-info-container">
                            <div className="video-info__channel-date">
                                <h2 className="video-info__channel-date h3-subheader">By {channel}</h2>
                                <h5 className="video-info__channel-date para"><TimeAgo date = {timestamp} /></h5>
                            </div>
                            <div className="video-info__view-likes">
                                <div className="video-info__view-likes--views">
                                    <img className="video-info__view-likes--views--icon" src={require('../../assets/icons/SVG/Icon-views.svg')} alt="views"/>
                                    <p className="video-info__view-likes--views--count para">{views}</p>
                                </div>
                                <div className="video-info__view-likes--likes">
                                    <img className="video-info__view-likes--likes--icon" src={require('../../assets/icons/SVG/Icon-likes.svg')} alt="likes"/>
                                    <p className="video-info__view-likes--count para">{likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-line"></div>
                    <div className="video-info__description padding-sides para">{description}</div>
                    <MainVideoComments comments = {comments} />
                </div>
            </div>
        )
    }
}

export default VideoInfo;