import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export class SignUp extends Component {

constructor(props){
  super(props)
  this.state = {
    firstName:'',
    lastName: '',
    email:'',
    bio:'',
    field:'',
    user_name:'',
    password:''
  }
}

handleChangeFirstName = (event) => {
  this.setState({firstName : event.target.value})
}

handleChangeLastName = (event) => {
this.setState({lastName : event.target.value})
}

handleChangeEmail = (event) => {
this.setState({email : event.target.value})
}

handleChangeBio = (event) => {
this.setState({bio: event.target.value})
}

handleChangeField = (event) => {
this.setState({field: event.target.value})
}

handleChangeUserName = (event) => {
this.setState({user_name: event.target.value})
}

handleChangePassword = (event) => {
this.setState({password: event.target.value})
}


handleSubmit = (event) => {
  console.log(this.state)
  event.preventDefault()
}

  render() {
    return (
      <div>
      <div >
        <label> First Name </label>
        <br />
        <input type='text' value={this.state.firstName} onChange={this.handleChangeFirstName} />
        <br />

        <label> Last Name </label>
        <br />
        <input type='text' value={this.state.lastName}
        onChange={this.handleChangeLastName} />
        <br />

        <label> Email </label>
        <br />
        <input type='text' value={this.state.email} onChange={this.handleChangeEmail} />
        <br />

        <label> Bio </label>
        <br />
        <input type='text' value={this.state.bio} onChange={this.handleChangeBio} />
        <br />

        <label> Field of Study </label>
        <br />
        <input type='text' value={this.state.field} onChange={this.handleChangeField} />
        <br />

        <label> User Name </label>
        <br />
        <input type='text' value={this.state.user_name} onChange={this.handleChangeUserName} />
        <br />

        <label> Password </label>
        <br />
        <input type='password' value={this.state.password} onChange={this.handleChangePassword} />


        <br />
        <button onClick = { () =>
          axios.post('http://localhost:4000/SignUp', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            bio: this.state.bio,
            field : this.state.field,
            user_name: this.state.user_name,
            password: this.state.password
          }).then(res => alert(res))
          .catch(err => alert(err))}>Submit</button>

        </div>
      </div>
    )
  }


}
