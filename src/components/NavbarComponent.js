import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = props => {
  let color = "white";
  if (props.bg === "dark") {
    color = "lightgrey";
  } else {
    color = "black";
  }
  return (
    <Navbar fixed="top">
      <Nav variant="pills">
        <Link to="/">
          <img
            src="https://i.imgur.com/kdRv3qa.png"
            className="App-logo"
            alt="logo"
            width="80"
          />
        </Link>

        <Nav.Item className="m-auto">
          <Link className="textLink" to="/about" style={{ color: color }}>
            about
          </Link>
        </Nav.Item>
        <Nav.Item className="m-auto">
          <Link className="textLink" to="/portfolio" style={{ color: color }}>
            portfolio
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
