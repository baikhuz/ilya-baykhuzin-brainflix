import React from 'react';
import './styles.scss';
import axios from 'axios';

import {apiLinkVids} from '../../apiLinks';

class UploadForm extends React.Component {

    state = {
        title: '',
        channel: '',
        image: '',
        description: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`${apiLinkVids}`, {
                title: this.state.title,
                channel: this.state.channel,
                image: this.state.image,
                description: this.state.description,
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {console.log(error)})

        this.refs.titleRef.value="";
        this.refs.channelRef.value="";
        this.refs.imageRef.value="";
        this.refs.descriptionRef.value="";

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    picChange = (e) => {
        this.refs.thumbnailImg.className="thumbnail__container--image"
    }

    render () {
        return (
            <>
                <div className="uploads-navbar-divider"></div>
                <div className="upload-form">
                    <h1 className="upload-form__header h1-header">Upload Video</h1>
                    <div className="divider-line-uploads"></div>
                    <form className="upload-form__container">
                        <div className="thumbnail-and-inputs">
                            <div className="upload-form__thumbnail">
                                <h5 className="upload-form__thumbnail--label label">Video Thumbnail</h5>
                                <div className="thumbnail__container">
                                    <img ref="thumbnailImg" className="hidden" src={this.state.image} alt="thumbnail"/>
                                </div>
                            </div>
                            <div className="upload-form__inputs">
                                <h5 className="upload-form__inputs--label-title label">Title Your Video</h5>
                                <input 
                                    ref="titleRef"
                                    value={this.state.title} 
                                    onChange={e => this.handleChange(e)}
                                    className="upload-form__inputs--vidTitle" 
                                    placeholder="Add a title to your video" 
                                    required 
                                    name="title" 
                                    type="text"/>
                                <h5 className="upload-form__inputs--label-title label">Write your channel's display name</h5>
                                <input 
                                    ref="channelRef"
                                    value={this.state.channel} 
                                    onChange={e => this.handleChange(e)}
                                    className="upload-form__inputs--vidTitle" 
                                    placeholder="Type in your channel name" 
                                    required 
                                    name="channel" 
                                    type="text"/>
                                <h5 className="upload-form__inputs--label-title label">Upload your Video Thumbnail</h5>
                                <input 
                                    ref="imageRef"
                                    value={this.state.image} 
                                    onChange={e => {this.handleChange(e); this.picChange(e) } }
                                    className="upload-form__inputs--vidTitle" 
                                    placeholder="Insert a link to a picture (i.e. https://source.unsplash.com/random)" 
                                    required 
                                    name="image" 
                                    type="text"/>
                                <h5 className="upload-form__inputs--label-description label">Add a Video Description</h5>
                                <textarea 
                                    ref="descriptionRef"
                                    value={this.state.description}
                                    onChange={e => this.handleChange(e)}
                                    className="upload-form__inputs--vidDescription" 
                                    placeholder="Add a description of your video" 
                                    required 
                                    name="description">
                                </textarea>
                            </div>
                        </div>
                        <div className="divider-line-uploads"></div>
                        <div className="upload-form__buttons">
                            <button 
                                onClick={e => this.handleSubmit(e)} 
                                className="upload-form__buttons--publish" 
                                id="publishButton" 
                                type="submit">Publish
                            </button>
                            <button className="upload-form__buttons--cancel" id="cancelButton">Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default UploadForm;