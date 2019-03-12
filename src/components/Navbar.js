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
    // <Nav variant="pills" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Nav.Link eventKey="/about">about</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-1">Option 2</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="disabled" disabled>
    //       Disabled
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
    <Navbar bg={props.bg} variant={props.bg} fixed="top">
      <Nav className="mr-auto" variant="pills">
        <Link to="/">
          <img
            src="https://i.imgur.com/kdRv3qa.png"
            className="App-logo"
            alt="logo"
            width="80"
          />
        </Link>

        <Nav.Item>
          <Nav.Link>
            <Link className="textLink" to="/about" style={{ color: color }}>
              about
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="textLink" to="/portfolio" style={{ color: color }}>
              portfolio
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
