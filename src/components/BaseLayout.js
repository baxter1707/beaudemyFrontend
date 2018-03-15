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
    <div>
          <div className = 'headerNavBar'>
            <div className = 'leftSideNavBar'>
              <Link to = '/' className= "navBarLink" > ABOUT BEAUDEMY </Link>
              <Link to = '/' className= "navBarLink" > IN THE PRESS </Link>
              <Link to = '/' className= "navBarLink" > HOME </Link>
            </div>

            <div className = 'rightSideNavBar'>
              <div className= 'loginLinkDiv'>
                <Link to = '/LoginPage' className= "navBarLink" > LOGIN </Link>
              </div>
              <div className = 'logoutButtonDiv'>
                <Link to = '/' >
                  <button className='logoutButton' onClick = { () =>
                    localStorage.clear()
                  }>Logout</button>
              </Link>
              </div>
            </div>

          </div>
          <div className = 'headerBar'>
            <div className = 'headerBarText'>
              <img src = 'http://res.cloudinary.com/msbcloud/image/upload/v1521078512/Beaudemy_Logo.jpg'/>
              <h6> Where beauty is shared </h6>
            </div>
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
