import React from 'react';

import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';

class MainVideoComments extends React.Component {

    state = {
        comments: []
    };


    render () {
        const { comments } = this.props;

        return (
            <>
                <CommentForm comments = {comments} />
                <CommentList comments = {comments} />
            </>
        )
    }
}

export default MainVideoComments;