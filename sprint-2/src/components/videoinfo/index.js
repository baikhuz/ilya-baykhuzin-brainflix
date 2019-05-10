import React from 'react';
import './styles.scss';

class VideoInfo extends React.Component {

    convertTimestamp = (timestamp) => {

        timestamp = new Date(timestamp);
        let mm = timestamp.getMonth() +1;
        let dd = timestamp.getDate();
        let yyyy = timestamp.getFullYear();

        timestamp = `${mm}/${dd}/${yyyy}`;
        return timestamp;
    }
    
    render () {
        console.log('videoinfo!',this.props);
        const {
            channel, 
            description, 
            likes, 
            timestamp, 
            title,  
            views 
        } = this.props.currentVideo

        return (
            <div className="content-container padding-sides">
                <div className="info-and-comments">
                    <div className="video-info__container padding-sides">
                        <h1 className = "video-info__head h1-header">{title}</h1>
                        <div className="video-info__general-info-container">
                            <div className="video-info__channel-date">
                                <h2 className="video-info__channel-date h3-subheader">By {channel}</h2>
                                <h5 className="video-info__channel-date para">{this.convertTimestamp(timestamp)}</h5>
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
                    <div className="divider-line main-video-divider"></div>
                    <div className="video-info__description padding-sides para">{description}</div>
                    {/* <MainVideoComments comments={this.props.comments} /> */}
                </div>
                <div className="side-videos">
                </div>
            </div>
        )
    }
}

export default VideoInfo;