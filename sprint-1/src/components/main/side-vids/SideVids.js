import React, { Component } from 'react';
import '../../../styles/side-vids.scss';

class SideVids extends Component {

    renderSideVids = () => {
        return this.props.sideVids.map((item, index) => {
            if (item.id === '0') {
                return ('')
            } else {
                return (
                    <div key = {index}>
                        <div className="side-vid">
                            <img className="side-vid__poster" src={item.image} alt="poster"/>
                            <div className="side-vid__info">
                                <p className="side-vid__info--title para">{item.title}</p>
                                <p className="side-vid__info--channel para">{item.channel}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    render () {
        return (
            <>
                <p className="side-vid__label label padding-sides">Next video</p>
                { this.renderSideVids() }
            </>
        );
    }
}
export default SideVids;