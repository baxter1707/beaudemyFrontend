import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import { connect } from 'react-redux'
import { loadTeacherVideos } from '../store/actions'
import * as actionTypes from '../store/actions'
import ReactPlayer from 'react-player'

export class DisplayVideos extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onVideoListLoad()
  }

  render() {
    let teacher = ""
    let teachId = ''
    try {
      const token = localStorage.getItem("token")
      const { username } = decode(token)
      const {uid} =decode(token)
      teacher = username
      teachId = uid
      console.log(teacher)
    }  catch(err){}


    let jsonVideos = this.props.videos.map((video)=> {
          if(video.teacherId == teachId) {
      return ( <div className= 'videoDiv' key = {video.id}>
        <img src = "http://res.cloudinary.com/msbcloud/image/upload/v1521061143/Untitled_1.jpg" />
        <span className='courseName'> {video.courseName} </span>
        <br>
        </br>
        <br>
        </br>
      </div>)}
    })


    return (
    <div>

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
    id : state.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideoListLoad : () => dispatch(loadTeacherVideos()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayVideos)
