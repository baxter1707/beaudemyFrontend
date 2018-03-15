import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export class LoginPage extends Component {

  render() {

    return (
    <div>
    <div className= 'MainLoginScreenContainer'>
      <div className= 'teacherLoginContainer'>
        <Link to  = '/TeacherLoginPage' className = 'loginPageLink' > Teacher Login </Link>
      </div>

      <div className= 'studentLoginContainer'>
        <Link to = '/StudentLoginPage' className = 'loginPageLink' > Student Login </Link>
      </div>
    </div>



    </div>

    )
  }


}
