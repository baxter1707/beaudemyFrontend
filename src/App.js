import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/BaseLayout.css';
import './styles/HomePage.css';
import { Home } from './components/Home'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
