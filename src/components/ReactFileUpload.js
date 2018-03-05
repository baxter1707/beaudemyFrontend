import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import axios from 'axios'
import decode from 'jwt-decode'

const CLOUDINARY_UPLOAD_PRESET = 'vzmg6dzj';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/msbcloud/upload';

export class ReactFileUpload extends Component {

  constructor(props) {
      super(props);

      this.state = {
        uploadedFileCloudinaryUrl: ''
      };
    }

    onImageDrop(files) {
   this.setState({
     uploadedFile: files[0]
   });

   this.handleImageUpload(files[0]);
 }


 handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      });
    }
  });
}


  render() {

    let teachId = ''
    try {
      const token = localStorage.getItem("token")
      console.log(token)
        const {uid} =decode(token)
        teachId = uid
          }  catch(err){}
    return(
<div>

      <Dropzone
        multiple={false}
        accept="video/*"
        onDrop={this.onImageDrop.bind(this)}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>

      <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>}

        <button onClick = { () =>
          axios.post('http://localhost:4000/VideoUpload', {
            courseName: this.state.uploadedFileCloudinaryUrl,
            teacherId: teachId
          }).then(res => alert(res))
          .catch(err => alert(err))}>Submit</button>

      </div>
</div>


    )}

}
