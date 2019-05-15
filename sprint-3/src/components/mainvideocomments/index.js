import React from 'react';
import CommentList from '../commentlist';
import CommentForm from '../commentform';

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