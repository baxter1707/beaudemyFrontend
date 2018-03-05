import React,{Component} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export class DropZone extends Component{



  render() {
    return(

      <Dropzone disableClick ={true} multiple={false} accept={'image/*'} onDrop={this.dropHandler}>

      < div > Drop a photo. < /div >

      </Dropzone>

    )
  }

  dropHandler(file) {
    var photo = new FormData();
  photo.append('photo', file[0]);

  request.post('http://localhost:4000/upload')
    .send(photo)
    .end(function(err, resp) {
      if (err) { console.error(err); }
      return resp;
    });
  }


  }
