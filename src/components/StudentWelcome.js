import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AllVideos from './AllVideos'
import DogVideos from './DogVideos'
import MusicVideos from './MusicVideos'
import LashVideos from './LashVideos'
import decode from 'jwt-decode'

export class StudentWelcome extends Component {

  render() {

    let student = ""
    let studentId = ''
    try {
      const token = localStorage.getItem("token")
      console.log(token)
      const { username } = decode(token)
      const {uid} =decode(token)
      student = username
      studentId = uid
      console.log(student)
    }  catch(err){}

    return (
    <div>
    <div className = 'teacherWelcomeContainer'>
        <div className = 'teacherWelcomeMessage'>
        Welcome {student}!
        </div>


        <div className = 'teacherWelcomeMessageLinks'>
          <Link to = '/StudentWelcome' className = 'navBarLink' > All Videos </Link>
          <Link to = '/StudentSavedVideos' className = 'navBarLink' > Saved Videos </Link>

        </div>
    </div>



      <div className = 'studentWelcomeVideoContainer'>
        <LashVideos />
      </div>

      <div className = 'studentWelcomeVideoContainer'>
        <DogVideos />
      </div>

      <div className = 'studentWelcomeVideoContainer'>
        <MusicVideos />
      </div>



    </div>

    )
  }


}
