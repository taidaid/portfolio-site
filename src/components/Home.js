import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TextLoop from "react-text-loop";

const Home = () => {
  return (
    <Router>
      <div className="Home">
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
      </div>
    </Router>
  );
};

export default Home;
