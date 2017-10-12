import React, { Component } from 'react';
import './App.css';

import laptop from './resources/images/laptop.png';
import card from './resources/images/card.png';


import Header from './sections/Header'
import Intro from './sections/Intro'
import About from './sections/About'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
