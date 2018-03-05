import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import {FileUpload} from './FileUpload'
import {ReactFileUpload} from './ReactFileUpload'

export class TeacherWelcome extends Component {

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

    return (
      <div>
        <div>
        'Welcome {teacher}!'
        </div>

        <div>
          <ReactFileUpload/>
        </div>

      </div>

    )
  }


}
