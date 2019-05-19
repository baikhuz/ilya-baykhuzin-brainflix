import React from 'react';
import './styles.scss';

// require('../../assets/images/Upload-video-preview.jpg')

class UploadForm extends React.Component {

    state = {
        thumbnail: '',
        title: '',
        description: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                                    <img ref="thumbnailImg" className="hidden" src={this.state.thumbnail} alt="thumbnail"/>
                                </div>
                            </div>
                            <div className="upload-form__inputs">
                                <h5 className="upload-form__inputs--label-title label">Upload your Video Thumbnail</h5>
                                <input 
                                    value={this.state.thumbnail} 
                                    onChange={e => {this.handleChange(e); this.picChange(e) } }
                                    className="upload-form__inputs--vidTitle" 
                                    placeholder="Insert a link to a picture (i.e. https://source.unsplash.com/random)" 
                                    required 
                                    name="thumbnail" 
                                    type="text"/>
                                <h5 className="upload-form__inputs--label-title label">Title Your Video</h5>
                                <input 
                                    value={this.state.title} 
                                    onChange={e => this.handleChange(e)}
                                    className="upload-form__inputs--vidTitle" 
                                    placeholder="Add a title to your video" 
                                    required 
                                    name="title" 
                                    type="text"/>
                                <h5 className="upload-form__inputs--label-description label">Add a Video Description</h5>
                                <textarea 
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