import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container className="Portfolio">
      <Row>
        <Col>
          <div className="project" id="project-1">
            <h3>Face Detection</h3>
            <a href="https://protected-taiga-22940.herokuapp.com/">
              <img
                src="https://i.imgur.com/NKhhycNm.png "
                alt="Face Detection App"
              />
            </a>
          </div>
        </Col>
        <Col>
          <div className="project" id="project-2">
            <h3>Pixel Art</h3>
            <a href="https://stormy-sands-35736.herokuapp.com/">
              <img src="https://i.imgur.com/iPD9xtjm.png" alt="Pixel Art App" />
            </a>
          </div>
        </Col>
        <Col>
          <div className="project" id="project-3">
            <h3>Bills Tracker</h3>
            <a href="https://pacific-hollows-60748.herokuapp.com/">
              <img
                src="https://i.imgur.com/Q8b3DKFm.png"
                alt="Bills Tracker App"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
