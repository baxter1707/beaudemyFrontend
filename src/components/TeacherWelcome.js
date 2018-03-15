import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import {FileUpload} from './FileUpload'
import {ReactFileUpload} from './ReactFileUpload'
import DisplayVideos from './DisplayVideos'

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
      <div className = 'teacherWelcomeContainer'>
          <div className = 'teacherWelcomeMessage'>
          Welcome {teacher}!
          </div>

          <div className = 'teacherWelcomeMessageLinks'>
            <Link to = '/ReactFileUpload' className = 'navBarLink' > Upload </Link>
            <Link to = '/TeacherWelcome' className = 'navBarLink'  > Display Videos </Link>
          </div>
      </div>

      <div>

        <div>
        <DisplayVideos />
        </div>

      </div>

    </div>

    )
  }


}
