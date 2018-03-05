import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export class FileUpload extends Component {

  constructor(props){
    super(props)

    this.state = {
      fileName:'',
      selectedFile: ''
    }
  }

  onChange = (event) => {
    const state = this.state;

         switch (event.target.name) {
           case 'selectedFile':
             state.selectedFile = event.target.files[0];
             break;
           default:
             state[event.target.name] = event.target.value;
         }

         this.setState(state);
       }

  onSubmit = (event) => {
    event.preventDefault()

    const { fileName, selectedFile } = this.state;
       let formData = new FormData();

       formData.append('fileName', fileName);
       formData.append('selectedFile', selectedFile);

       axios.post('http://localhost:4000/file', formData)
         .then((result) => {

         });
     }



render() {
        const { fileName, selectedFile } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="fileName"
              value={fileName}
              onChange={this.onChange}
            />
            <input
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
}
