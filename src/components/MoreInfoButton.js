import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import decode from 'jwt-decode'


const MoreInfoButton = (props) => (

    <Link to = '/MoreInfoScreen'>
    <button id={props.id} studentid={props.studentid} courseName={props.courseName} courseDescription={props.courseDescription} tag ={props.tag} url={props.url}  onClick={props.onMoreInfoClick}  >More Info</button>
    </Link>

)

export default MoreInfoButton
