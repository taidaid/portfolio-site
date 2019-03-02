import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/about">about</Link>
            <Link to="/portfolio">portfolio</Link>
          </nav>

          <h1>
            Hello World.
            <br />I am Bryan Windsor,{" "}
            <TextLoop>
              <div>a software developer</div>
              <div>a world traveler</div>
              <div>an educator</div>
              <div>a polyglot</div>
              <div>an adventurer</div>
              <div>a climber</div>
              <div>a diver</div>
              <div>a skier</div>
            </TextLoop>
            .
          </h1>
        </header>
      </div>
    </Router>
  );
};

export default Home;
