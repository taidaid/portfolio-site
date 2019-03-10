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
    <Navbar bg={props.bg} variant={props.bg} fixed="top">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src="https://i.imgur.com/kdRv3qa.png"
            className="App-logo"
            alt="logo"
            width="100"
          />
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">
          <Link className="textLink" to="/about" style={{ color: color }}>
            about
          </Link>
        </Nav.Link>
        <Nav.Link href="/portfolio">
          <Link className="textLink" to="/portfolio" style={{ color: color }}>
            portfolio
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
