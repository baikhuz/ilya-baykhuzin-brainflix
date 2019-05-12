import React from 'react';
import './styles.scss';

class UploadForm extends React.Component {

    state = {
        thumbnail: require('../../assets/images/Upload-video-preview.jpg')
    }

    render () {
        return (
            <>
                <h1 className="upload-form__header h1-header">Upload Video</h1>
                <div className="upload-form__thumbnail">
                    <h5 className="upload-form__thumbnail--label label">Video Thumbnail</h5>
                    <img src={this.state.thumbnail} alt="thimbnail" className="upload-form__thumbnail--image"/>
                </div>
                
            </>
        )
    }
}

export default UploadForm;