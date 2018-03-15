import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import { loadTeacherVideos } from '../store/actions'
import WatchVideoButton from './WatchVideoButton'


export class StudentSavedVideos extends Component {


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
      console.log(token)
      const { username } = decode(token)
      const {uid} =decode(token)
      student = username
      studentid = uid
      console.log(student)
    }  catch(err){}


    let jsonVideos = this.props.videos.map((video)=> {
          if(video.studentid == studentid) {
      return ( <div className= 'videoDiv' key = {video.id}>
        <img src = "http://res.cloudinary.com/msbcloud/image/upload/v1521061143/Untitled_1.jpg" />
        <li className='courseName'> {video.courseName} </li>

        <WatchVideoButton id={video.id} onWatchClick = {() => this.props.onWatch(video.id, video.courseName,studentid,video.tag,video.courseDescription,video.url)} />


      </div>)}
    })

    return (
    <div>
      <div className = 'teacherWelcomeContainer'>
          <div className = 'teacherWelcomeMessage'>
          Welcome {student}!
          </div>


          <div className = 'teacherWelcomeMessageLinks'>
            <Link to = '/StudentWelcome' className = 'navBarLink' > All Videos</Link>
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

    onWatch : (id, studentid, courseName, tag,courseDescription,url) => dispatch({type : actionTypes.MORE_INFO, id:id, studentid : studentid, courseName:courseName, tag:tag, courseDescription:courseDescription, url:url})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(StudentSavedVideos)
