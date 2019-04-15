import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const NavbarComponent = () => {
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="https://i.imgur.com/kdRv3qa.png"
            className="App-logo"
            alt="logo"
            width="80"
          />
        </Link>
      </Navbar.Brand>

      {/*small viewport*/}
      <MediaQuery maxDeviceWidth={1024}>
        <Nav className="mobileNav">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item className="m-auto" as="div">
              <Link className="textLink" to="/about">
                about
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="m-auto" as="div">
              <Link className="textLink" to="/portfolio">
                portfolio
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="m-auto" as="div">
              <Link className="textLink" to="/testimonials">
                testimonials
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="m-auto" as="div">
              <a className="textLink" href="https://zety.com/mycv/bryanwindsor">
                resume
              </a>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </MediaQuery>

      {/*large viewport*/}
      <MediaQuery minDeviceWidth={1024}>
        <Nav className="largeNav" variant="pills">
          <Nav.Item className="m-auto">
            <Link className="textLink" to="/about">
              about
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto">
            <Link className="textLink" to="/portfolio">
              portfolio
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto">
            <Link className="textLink" to="/testimonials">
              testimonials
            </Link>
          </Nav.Item>
          <Nav.Item className="m-auto">
            <a className="textLink" href="https://zety.com/mycv/bryanwindsor">
              resume
            </a>
          </Nav.Item>
        </Nav>
      </MediaQuery>
    </Navbar>
  );
};

export default NavbarComponent;
