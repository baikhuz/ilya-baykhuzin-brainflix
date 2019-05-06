import React, { Component } from 'react';
import '../../../../styles/comment-list.scss';

class CommentList extends Component {

    renderComments = () => {
        return this.props.comments.map((item, index) => {
            return (
                <div key = {index}>
                    <div className="comment padding-sides">
                        <div className="comment__userpic--container">
                            <div className="comment__userpic user-avatar" id="comment-avatar"></div>
                        </div>
                        <div className="comment__content">
                            <div className="comment__name-date">
                                <h3 className="comment__name-date--name para">{item.name}</h3>
                                <p className="comment__name-date--date label">{item.date}</p>
                            </div>
                            <div className="comment__comment para">{item.comment}</div>
                        </div>
                    </div>
                    <div className="divider-line" id="line-comments-section"></div>
                </div>
            )
        })
    }

    render () {
        return (
            <>
                <div className="divider-line" id="line-comments-section"></div>
                { this.renderComments() }
            </>
        );
    }
}
export default CommentList;