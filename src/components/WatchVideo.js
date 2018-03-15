import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import { connect } from 'react-redux'
import { loadTeacherVideos } from '../store/actions'
import { MORE_INFO } from '../store/actions'
import { postStudentVideo } from '../store/actions'
import * as actionTypes from '../store/actions'
import ReactPlayer from 'react-player'
import SubscribeButton from './SubscribeButton'
import MoreInfoButton from './MoreInfoButton'

export class MoreInfoScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onVideoListLoad()
  }



  render() {
    let student = ""
    let studentid = ''
    try {
      const token = localStorage.getItem("token")
      const { username } = decode(token)
      const {uid} =decode(token)
      student = username
      studentid = uid
      console.log(studentid)
    }  catch(err){}



    let jsonVideos = this.props.videos.map((video)=> {
        if(video.id === this.props.id ) {
      return (
    <div className= 'moreInfoVideoDiv' key = {video.id}>

        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={video.url}
            width='100%'
            height='100%'
            controls />
        </div>

        <div className = 'moreInfoInformationDiv'>
          <li className='courseName'> {video.courseName} </li>
          <p> {video.courseDescription}</p>
        </div>

      </div>)}
    })


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

      <div className = 'videoContainer'>
            {jsonVideos}
      </div>
    </div>

    )
  }
}


const mapStateToProps = state => {
  return {
    videos : state.videos,
    id : state.id,
    courseName :state.courseName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideoListLoad : () => dispatch(loadTeacherVideos()),

    onSubscribeVideo : (studentid, courseName, tag,courseDescription,url) => dispatch(postStudentVideo(studentid, courseName, tag, courseDescription,url))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreInfoScreen)
