import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode'
import { connect } from 'react-redux'
import { loadTeacherVideos } from '../store/actions'
import * as actionTypes from '../store/actions'
import ReactPlayer from 'react-player'

export class AllVideos extends Component {

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

      return ( <div className= 'videoDiv' key = {video.id}>
        <li className='courseName'> {video.courseName} </li>
        <li className='courseDesc'> {video.courseDescription}</li>
        <ReactPlayer url={video.url}  controls/>
      </div>)
    })


    return (
    <div>
      <div>
        Display All Videos
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
    id : state.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideoListLoad : () => dispatch(loadTeacherVideos()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllVideos)
