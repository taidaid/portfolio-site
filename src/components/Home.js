import React from "react";
import TextLoop from "react-text-loop";

import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Home = () => {
  return (
    <Container fluid>
      <Row className="col-12 justify-content-center">
        <div className="Home">
          <div>
            <h1>
              Hello World.
              <br />I am Bryan Windsor,{" "}
              <TextLoop
                noWrap={
                  document.documentElement.clientWidth <= 768 ? true : false
                }
              >
                <div>a software developer.</div>
                <div>a world traveler.</div>
                <div>an educator.</div>
                <div>a polyglot.</div>
                <div>an adventurer.</div>
                <div>a climber.</div>
                <div>a diver.</div>
                <div>a skier.</div>
              </TextLoop>
            </h1>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
