import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import decode from 'jwt-decode'


const MoreInfoButton = (props) => (

    <Link to = '/WatchVideo'>
    <button id={props.id} studentid={props.studentid} courseName={props.courseName} courseDescription={props.courseDescription} tag ={props.tag} url={props.url}  onClick={props.onWatchClick}  > Watch Video</button>
    </Link>

)

export default MoreInfoButton
