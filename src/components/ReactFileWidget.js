import React, { Component } from 'react';
import { render } from 'react-dom';
import {cloudinary} from 'cloudinary'


export class ReactFileWidget extends Component {

    uploadWidget() {
        cloudinary.openUploadWidget({ cloud_name: 'msbcloud', upload_preset: 'PRESET', tags:['beaudemy']},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}
