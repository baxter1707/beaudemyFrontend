import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import decode from 'jwt-decode'


const SubscribeButton = (props) => (


    <button className ='subscribeButton' studentid={props.studentId} courseName={props.courseName} courseDescription={props.courseDescription} tag ={props.tag} url={props.url}  onClick={props.onSubscribeClick}  >Subscribe</button>

)

export default SubscribeButton
