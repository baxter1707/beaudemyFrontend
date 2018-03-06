import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AllVideos from './AllVideos'
import DogVideos from './DogVideos'
import MusicVideos from './MusicVideos'
import LashVideos from './LashVideos'

export class Home extends Component {

  render() {

    return (
    <div>

      <div className='HomePageVideoContainerLashes'>
        <LashVideos />
      </div>

      <div className='HomePageVideoContainerDogs'>
        <DogVideos />
      </div>

      <div className='HomePageVideoContainerMusic'>
        <MusicVideos />
      </div>



    </div>

    )
  }


}
