import React from "react";
import TextLoop from "react-text-loop";
import NavbarComponent from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <NavbarComponent bg="dark" />
      <Container>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
