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
          <p className="paragraph">
             My name is Sean Clarke and I'm applying for the position of <a text-decoration="none" href="https://careers.petalcard.com/o/javascript-engineer">Javascript Engineer</a> at Petal.
             <br/><br/>
             Having studied Economics, I've gained a greater appreciation
             for the financial challenges faced by millions and grown passionate
             about the mission to improve the financial lives of others. As a
             Full Stack Web Developer with a knack for Javascript I look to make this
             mission a reality by building the next great opportunities for financial
             succes.
             <br/><br/>

             In my time as a developer, I've gained experience building out user signup
             flows with a variety of features including omniauth login, encryption of user
             data, and pundit admin / user role delegation. Additonally, my work has included
             extensive experience with API's both my own and external. As a graduate of the
             Flatiron School with origins as a self-taught coder, I've genuinely proven
             ability to rapidly learn and integrate new tools, languages, and frameworks.
             <br/><br/>
             At Petal, I'm confident my abilities, passion, and self-driven nature will allow me
             not only to succeed, but allow me to excel. My experiences with React, Javascript ES6 / ES7
             and Ruby would serve me well in expanding the core product, integrations, mobile apps and
             dev tools and any challenges on the horizon. I'd love to work with Petal in empowering others
             to live smarter financial lives.
             <br/><br/>

             Sincerely,<br/> Sean Clarke
          </p>
          <button className="btn"><a href="http://www.seanclarkedesigns.com/resume.pdf" target="_blank">View Resume</a></button>
          <button className="btn2"><a href="mailto:me@seanclarkedesigns.com">Contact</a></button>
        </div>
      </div>
    );
  }
}

export default About;
