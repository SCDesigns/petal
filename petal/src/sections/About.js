import React, { Component } from 'react';
import '../App.css';

import laptop from '../resources/images/laptop.png';
import card from '../resources/images/card.png';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="WriteUp">
          <h1>About</h1>
          <p className="paragraph">Financial challenges are something very few of us are
             a stranger to. Having studied Economics in my undergrad, I've grown passionate
             about being a part of the mission to improve the financial lives of others. By
             combining my Economics background with my technical knowledge and design skills,
             I hope to help build the next generation of financial opportunities.
             <br/><br/>
             At Petal, I'm confident my abilities, passion, and self-driven nature will allow me
             not only to succeed, but allow me to excel. My experiences with React, Javascript ES6 / ES7
             and Ruby would serve me well in expanding the core product, integrations, mobile apps and
             dev tools and any challenges on the horizon. I'd love to work with Petal in empowering others
             to live smarter financial lives.
             <br/><br/>

             Sincerely,<br/> Sean
          </p>
          <button className="btn"><a href="http://www.seanclarkedesigns.com/resume.pdf" target="_blank">View Resume</a></button>
        </div>
      </div>
    );
  }
}

export default About;
