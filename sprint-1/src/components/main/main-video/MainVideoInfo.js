import React, { Component } from 'react';

class MainVideoInfo extends Component {
    
    convertTimestamp = (timestamp) => {

        timestamp = new Date(timestamp);
        let mm = timestamp.getMonth() +1;
        let dd = timestamp.getDate();
        let yyyy = timestamp.getFullYear();

        timestamp = `${mm}/${dd}/${yyyy}`;
        return timestamp;
    }
    
    render () {
        return (
            <>
                <div className="padding-sides">
                    <h1 className = "video-info h1-header">{this.props.title}</h1>
                    <div className="video-info__chan-date">
                        <h2 className="video-info__chan-date h3-subheader">By {this.props.channel}</h2>
                        <h5 className="video-info__chan-date para">{this.convertTimestamp(this.props.timestamp)}</h5>
                    </div>
                    <div className="video-info__views">
                        <img className="video-info__views--icon" src={require('../../../assets/Icons/SVG/Icon-views.svg')} alt="views"/>
                        <p className="video-info__views--count para">{this.props.views}</p>
                    </div>
                    <div className="video-info__likes">
                        <img src={require('../../../assets/Icons/SVG/Icon-likes.svg')} alt="likes" className="video-info__likes--icon"/>
                        <p className="video-info__likes--count para">{this.props.likes}</p>
                    </div>
                </div>
                <div className="divider-line"></div>
                <div className="video-info__description padding-sides para">{this.props.description}</div>
            </>
        );
    }
}
export default MainVideoInfo;