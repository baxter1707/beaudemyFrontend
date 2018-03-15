import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/BaseLayout.css';
import './styles/HomePage.css';
import './styles/DisplayVideos.css';
import './styles/LoginPage.css';
import './styles/TeacherLoginPage.css';
import './styles/TeacherWelcome.css';
import './styles/StudentWelcome.css';
import './styles/MoreInfoScreen.css';
import { Home } from './components/Home'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
