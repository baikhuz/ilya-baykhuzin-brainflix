import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class MainVideoComments extends Component {

    render () {
        return (
            <>
                <CommentForm></CommentForm>
                <CommentList></CommentList>
            </>
        );
    }
}
export default MainVideoComments;