import React, { Component } from 'react';
import '../App.css';

import laptop from '../resources/images/laptop.png';
import card from '../resources/images/card.png';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">

        <div className="Row">
          <div className="Block-1">
            <p className="blurb">Full Stack Developer <br/> & Student of Economics <br/> looking to re-write the <br/> rules of personal finance.</p>
          </div>
          <div className="Block-2">
            <img src={laptop} className="graphic" alt="Laptop" />
          </div>
        </div>

        <div className="Row">
          <div className="Block-3">
            <img src={card} className="graphic" alt="card" />
          </div>
          <div className="Block-4">
            <p className="blurb">Skilled in Ruby,<br/> React, Redux, <br/> Javascript ES6/ES7, <br/> and Digital Design.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Intro;
