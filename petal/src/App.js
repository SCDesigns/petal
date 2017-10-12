import React, { Component } from 'react';
import './App.css';

import laptop from './resources/images/laptop.png';
import card from './resources/images/card.png';


import Header from './Header'
import Intro from './Intro'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
