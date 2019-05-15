import React from 'react';
import './styles.scss';

class CommentForm extends React.Component {

    renderForm = () => {
        if (this.props.comments) {
            return (
                <div className="comment-form__wrapper">
                    <h2 className="comments-count h2-subheader">{this.props.comments.length} Comments</h2>
                    <div className="form-container">
                        <div className="avatar-container">
                            <div className="user-avatar" id="user-avatar-comments"></div>
                        </div>
                        <div className="comment-form">
                            <h5 className="label">Join the Conversation</h5>
                            <form className="comment-form__inputs" id="addComment">
                                <textarea className="comment-form__inputs--input-box" name="commentText" id="commentText" placeholder="Add a new comment"></textarea>
                                <button className="comment-form__inputs--button" id="submitButton" type="submit">Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render () {
        return (
            <>
                { this.renderForm () }
            </>
        )
    }
}

export default CommentForm;