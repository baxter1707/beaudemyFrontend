import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import axios from 'axios'
import decode from 'jwt-decode'
import {Link} from 'react-router-dom'


const CLOUDINARY_UPLOAD_PRESET = 'vzmg6dzj';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/msbcloud/upload';

export class ReactFileUpload extends Component {

  constructor(props) {
      super(props);

      this.state = {
        uploadedFileCloudinaryUrl: '',
        courseName: '',
        tag: '',
        courseDescription: ''
      };
    }





// TEXT BOX UPDATE SECTION //
 handleChangeCourseName = (event) => {
   this.setState({courseName : event.target.value})
 }

 handleChangeTag = (event) => {
   this.setState({tag : event.target.value})
 }

 handleChangeCourseDesc = (event) => {
   this.setState({courseDescription : event.target.value})
 }








// IMAGE UPLOAD SECTION //
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

    let teacher = ""
    let teachId = ''
    try {
      const token = localStorage.getItem("token")
      console.log(token)
      const { username } = decode(token)
      const {uid} =decode(token)
      teacher = username
      teachId = uid
      console.log(teacher)
    }  catch(err){}
    return(
<div>

<div className = 'teacherWelcomeContainer'>
    <div className = 'teacherWelcomeMessage'>
    Welcome {teacher}!
    </div>

    <div className = 'headerLink'>
      <Link to = '/ReactFileUpload' className = 'navBarLink' > Upload </Link>
      <Link to = '/TeacherWelcome' className = 'navBarLink'  > Display Videos </Link>
    </div>
</div>

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

        <div>
        <label> Course Name </label>
        <br />
        <input type='text' value={this.state.courseName} onChange={this.handleChangeCourseName} />
        <br />

        <label> Tag </label>
        <br />
        <input type='text' value={this.state.tag} onChange={this.handleChangeTag} />
        <br />

        <label> Description </label>
        <br />
        <input type='text' value={this.state.courseDescription} onChange={this.handleChangeCourseDesc} />
        <br />
        </div>

        <button onClick = { () =>
          axios.post('http://localhost:4000/VideoUpload', {
            url: this.state.uploadedFileCloudinaryUrl,
            teacherId: teachId,
            courseName: this.state.courseName,
            tag: this.state.tag,
            courseDescription: this.state.courseDescription
          }).then(res => alert("Uploaded!"))
          .catch(err => alert(err))}>Submit</button>

      </div>
</div>


    )}

}
