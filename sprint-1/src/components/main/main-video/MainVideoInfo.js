import React, { Component } from 'react';
import '../../../styles/main-video-info.scss';
import MainVideoComments from './main-video-comments/MainVideoComments';
import SideVids from '../side-vids/SideVids';
import TimeAgo from 'react-timeago';

class MainVideoInfo extends Component {
    
    // convertTimestamp = (timestamp) => {

    //     timestamp = new Date(timestamp);
    //     let mm = timestamp.getMonth() +1;
    //     let dd = timestamp.getDate();
    //     let yyyy = timestamp.getFullYear();

    //     timestamp = `${mm}/${dd}/${yyyy}`;
    //     return timestamp;
    // }

    // {this.convertTimestamp(this.props.timestamp)}
    
    render () {
        return (
            <div className="content-container padding-sides">
                <div className="info-and-comments">
                    <div className="video-info__container padding-sides">
                        <h1 className = "video-info__head h1-header">{this.props.title}</h1>
                        <div className="video-info__general-info-container">
                            <div className="video-info__channel-date">
                                <h2 className="video-info__channel-date h3-subheader">By {this.props.channel}</h2>
                                <h5 className="video-info__channel-date para"><TimeAgo date = {this.props.timestamp} /></h5>
                            </div>
                            <div className="video-info__view-likes">
                                <div className="video-info__view-likes--views">
                                    <img className="video-info__view-likes--views--icon" src={require('../../../assets/Icons/SVG/Icon-views.svg')} alt="views"/>
                                    <p className="video-info__view-likes--views--count para">{this.props.views}</p>
                                </div>
                                <div className="video-info__view-likes--likes">
                                    <img className="video-info__view-likes--likes--icon" src={require('../../../assets/Icons/SVG/Icon-likes.svg')} alt="likes"/>
                                    <p className="video-info__view-likes--count para">{this.props.likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-line main-video-divider"></div>
                    <div className="video-info__description padding-sides para">{this.props.description}</div>
                    <MainVideoComments comments={this.props.comments} />
                </div>
                <div className="side-videos">
                    <SideVids sideVids={this.props.sideVids} />
                </div>
            </div>
        );
    }
}
export default MainVideoInfo;