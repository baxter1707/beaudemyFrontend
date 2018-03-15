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

export class LashVideos extends Component {

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
        if(video.tag === "Wax" && video.teacherId ) {
      return ( <div className= 'videoDiv' key = {video.id}>
        <img src = "http://res.cloudinary.com/msbcloud/image/upload/v1521061143/Untitled_1.jpg" />
        <li className='courseName'> {video.courseName} </li>
        <SubscribeButton onSubscribeClick = {() => this.props.onSubscribeVideo( video.courseName,studentid,video.tag,video.courseDescription,video.url)} />
        <MoreInfoButton id={video.id} onMoreInfoClick = {() => this.props.onMoreInfo(video.id, video.courseName,studentid,video.tag,video.courseDescription,video.url)} />
      </div>)}
    })


    return (
    <div>
      <div className = 'studentWelcomeVideoTitle'>
        Waxing Videos
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

    // onSubscribeVideo : (key,courseName, tag,courseDescription,url) => dispatch({type : actionTypes.STUDENT_SAVE, key : key, courseName: courseName, tag: tag, courseDescription: courseDescription, url: url}),

    onSubscribeVideo : (studentid, courseName, tag,courseDescription,url) => dispatch(postStudentVideo(studentid, courseName, tag, courseDescription,url)),

    onMoreInfo : (id, studentid, courseName, tag,courseDescription,url) => dispatch({type : actionTypes.MORE_INFO, id:id, studentid : studentid, courseName:courseName, tag:tag, courseDescription:courseDescription, url:url})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LashVideos)
