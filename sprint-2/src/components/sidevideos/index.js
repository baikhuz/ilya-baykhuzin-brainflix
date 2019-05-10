import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class SideVids extends React.Component {

    renderSideVids = () => {
        if (this.props.videos) {
            return this.props.videos
                .filter(item => item.id !== this.props.match.params.id)
                .map(item => {
                    return (
                        <div key = {item.id}>
                            <div className="side-vid">
                                <Link to = {`/videos/${item.id}`}>
                                    <img className="side-vid__poster" src={item.image} alt="poster"/>
                                </Link>
                                <div className="side-vid__info">
                                    <Link to = {`/videos/${item.id}`}>
                                        <p className="side-vid__info--title para">{item.title}</p>
                                    </Link>
                                    <p className="side-vid__info--channel para">{item.channel}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
        }
    }
    
    render () {
        return (
            <>
                <p className="side-vid__label label padding-sides">Next video</p>
                { this.renderSideVids() }
            </>
        )
    }
}

export default SideVids;