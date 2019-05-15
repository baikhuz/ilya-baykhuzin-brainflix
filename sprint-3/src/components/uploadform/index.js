import React from 'react';
import './styles.scss';

class UploadForm extends React.Component {

    state = {
        thumbnail: require('../../assets/images/Upload-video-preview.jpg')
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
                                <img src={this.state.thumbnail} alt="thimbnail" className="upload-form__thumbnail--image"/>
                            </div>
                            <div className="upload-form__inputs">
                                <h5 className="upload-form__inputs--label-title label">Title Your Video</h5>
                                <input className="upload-form__inputs--vidTitle" placeholder="Add a title to your video" required name="vidTitle" id="vidTitle" type="text"/>
                                <h5 className="upload-form__inputs--label-description label">Add a Video Description</h5>
                                <textarea className="upload-form__inputs--vidDescription" placeholder="Add a description of your video" required name="vidDescription" id="vidDescription"></textarea>
                            </div>
                        </div>
                        <div className="divider-line-uploads"></div>
                        <div className="upload-form__buttons">
                            <button className="upload-form__buttons--publish" id="publishButton" type="submit">Publish</button>
                            <button className="upload-form__buttons--cancel" id="cancelButton" type="submit">Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default UploadForm;