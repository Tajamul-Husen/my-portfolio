import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <div className="hero">
        <h3 className="hero-name">Hi, I'm Tajamul Husen</h3>
        <h1 className="hero-position">
          I'm a
          <span className="hero-position-highlight"> Front End Engineer</span>
        </h1>
        <Link to="/projects">
          <button className="btn hero-btn">Projects</button>
        </Link>
        <a
          href="https://drive.google.com/file/d/1z0_8yueA9nTndLiSQUR8BTX7RP1FxTOg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn hero-btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Home;