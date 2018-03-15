import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {SignUp} from './SignUp'
import {Link} from 'react-router-dom'


export class StudentLoginPage extends Component {
constructor(props){
super(props)
this.state = {
  email: '',
  password:''

}
}


handleChangeEmail = (event) => {
  this.setState({email : event.target.value})
}

handleChangePassword = (event) => {
this.setState({password : event.target.value})
}



  render () {
      return (
    <div className = "loginFormDiv">
      <div className = 'LoginForm'>
        <label>Email </label>
        <br />
        <input type='text' value={this.state.email} onChange={this.handleChangeEmail} />
        <br />
        <label> Password </label>
        <br />
        <input type='password' value={this.state.password}
        onChange={this.handleChangePassword} />





        <br />
        <Link to = '/StudentWelcome' >
        <button onClick = { () =>
          axios.post('http://localhost:4000/LoginStudent', {
            email: this.state.email,
            password: this.state.password
          }).then(res =>{
            localStorage.setItem("token", res.data.myToken)
            console.log(res)

          })
          .catch(err => alert(err))}>Submit</button>
          </Link>
          <br />
            <Link to = '/StudentSignUp' className= "navBarLinkTeacherLogin" > Sign Up </Link>
      </div>
    </div>
    )



  }
}
