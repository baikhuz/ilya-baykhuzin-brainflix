import React from 'react';
import TimeAgo from 'react-timeago';

import MainVideoComments from '../MainVideoComments/MainVideoComments';
import './styles.scss';

class VideoInfo extends React.Component {

    shouldComponentUpdate (nextProps) {
        return nextProps.currentVideo !== this.props.currentVideo
    }
    
    render () {

        const {
            channel, 
            description, 
            likes, 
            timestamp, 
            title,  
            views,
            comments
        } = this.props.currentVideo

        return (
            <div className="padding-sides videoinfo-container">
                <div className="info-and-comments">
                    <div className="video-info__container">
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
                    <div className="video-info__description para">{description}</div>
                    <MainVideoComments comments = {comments} />
                </div>
            </div>
        )
    }
}

export default VideoInfo;