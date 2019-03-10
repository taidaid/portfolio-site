import React from "react";
import NavbarComponent from "./Navbar";

const Portfolio = () => {
  return (
    <>
      <NavbarComponent bg="light" />
      <div className="Portfolio">
        <div className="project" id="project-1">
          <h3>Face Detection</h3>
          <a href="https://protected-taiga-22940.herokuapp.com/">
            <img
              src="https://i.imgur.com/NKhhycN.png"
              alt="Face Detection App"
            />
          </a>
        </div>
        <div className="project" id="project-2">
          <h3>Pixel Art</h3>
          <a href="https://stormy-sands-35736.herokuapp.com/">
            <img src="https://i.imgur.com/iPD9xtj.png" alt="Pixel Art App" />
          </a>
        </div>
        <div className="project" id="project-3">
          <h3>Bills Tracker</h3>
          <a href="https://pacific-hollows-60748.herokuapp.com/">
            <img
              src="https://i.imgur.com/Q8b3DKF.png"
              alt="Bills Tracker App"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
