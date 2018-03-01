import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export class Header extends Component {
  render (){
    return(
      <div className = 'headerBar'>
        <h1>Header Bar</h1>


      <div className = 'headerLink'>
        <Link to = '/' style={{ textDecoration: 'none' }} > Home </Link>
      </div>

      <div className = 'headerLink'>
        <Link to = '/SignUp' style={{ textDecoration: 'none' }} > Login </Link>
      </div>

      </div>
    )
  }
}


export class Footer extends Component {

  render() {
    return (
      <div className = 'footerBar'>
          <div className = 'footerTitle'>
          <span> 2018 Beaudemy</span>
          </div>

          <div className = 'footerTitle'>
          <span> Privacy | Terms </span>
          </div>
      </div>
    )
  }
}
