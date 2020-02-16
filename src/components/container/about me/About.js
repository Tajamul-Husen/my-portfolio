import React from "react";
import "./About.scss";
import Education from "./components/Education";
import Skills from "./components/Skills";

function About() {
  return (
    <div id="about">
      <div className="header-content">
        <h2 className="header-content-title">About Me</h2>
        <p className="para">
          Hi! My name is <span className="highlight-content">Tajamul Husen</span>. I'm a <span className="highlight-content">Front End Engineer</span> based in Mumbai.
          I'm graduate from Bsc. Information Technology. Well trained Web
          Developer that knows how to create design and modify web content. who
          enjoys building things that live on the internet.
        </p>
      </div>
      <div className="about-info">
        <Education></Education>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default About;
