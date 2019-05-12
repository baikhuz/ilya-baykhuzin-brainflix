import React from 'react';
import './styles.scss';

class CommentList extends React.Component {

    renderComments = () => {
        if (this.props.comments) {
            return this.props.comments.map ((item, index) => {
                return (
                    <div key = {index}>
                    <div className="comment">
                        <div className="comment__userpic--container">
                            <div className="comment__userpic user-avatar" id="comment-avatar"></div>
                        </div>
                        <div className="comment__content">
                            <div className="comment__name-date">
                                <h3 className="comment__name-date--name commenter-name" id = "comm-name-bold">{item.name}</h3>
                                <p className="comment__name-date--date label">{item.timestamp}</p>
                            </div>
                            <div className="comment__comment para">{item.comment}</div>
                        </div>
                    </div>
                    <div className="divider-line" id="line-comments-section"></div>
                </div>
                )
            })
        }
    }

    render () {
        return (
            <>
                <div className="divider-line" id="line-comments-section"></div>
                { this.renderComments() }
            </>
        )
    }
}

export default CommentList;