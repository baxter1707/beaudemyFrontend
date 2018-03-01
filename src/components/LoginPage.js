import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'


export class LoginPage extends Component {
constructor(props){
super(props)
this.state = {
  firstName :'',
  lastName:'',
  email:'',
  mailingAddress:''
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

handleChangeAddress = (event) => {
this.setState({mailingAddress : event.target.value})
}



handleSubmit = (event) => {
  console.log(this.state)
  event.preventDefault()
}

  render () {
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
        <


        <br />
        <button onClick = { () =>
          axios.post('http://localhost:4000/address', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            mailingAddress: this.state.mailingAddress,
            itemid : this.props.id
          }).then(res => alert(res))
          .catch(err => alert(err))}>Submit</button>
      </div>
    </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    honey : state.honey,
    id : state.id,
    price : state.price,
    desc : state.desc,
    name: state.name
  }
}

export default connect(mapStateToProps)(LoginPage)
