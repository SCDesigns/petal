import React, { Component } from 'react';
import avi from '../resources/images/avi.png';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <h1 className="App-title">Sean<br/> Clarke<br/> for<br/> Petal</h1>
          <img src={avi} className="Avatar" alt="avi" />
        </div>
      </header>
    );
  }
}

export default Header;
