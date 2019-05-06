import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class MainVideoComments extends Component {

    render () {
        return (
            <>
                <CommentForm
                    comments = {this.props.comments}    
                />
                <CommentList
                    comments = {this.props.comments}
                />
            </>
        );
    }
}
export default MainVideoComments;