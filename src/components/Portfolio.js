import React from "react";
import { Container, Row, Media } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container fluid className="Portfolio col-12 ">
      <Row className="justify-content-center col-12 p-3">
        <Media className="col-8">
          <Media.Body className="">
            <h2>I'm looking for opportunities!</h2>
            <p>
              I'm available to put my skills to work for you! Feel free to
              contact me:{" "}
              <a href="mailto:windsor.bryan@gmail.com?subject=Developer Opportunity">
                windsor.bryan@gmail.com
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 p-3">
        <Media className="project col-8" id="project-1">
          <div className="p-2 col-6">
            <a href="https://protected-taiga-22940.herokuapp.com/">
              <img
                src="https://i.imgur.com/NKhhycNl.png "
                alt="Face Detection App"
              />
            </a>
          </div>
          <Media.Body className="justify-content-center col-6">
            <h2>Face Detection</h2>
            <p>Detects faces in pictures, built with React and Tachyons</p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 p-3">
        <Media className="project col-8" id="project-2">
          <div className="p-2 col-6">
            <a href="https://stormy-sands-35736.herokuapp.com/">
              <img src="https://i.imgur.com/iPD9xtjl.png" alt="Pixel Art App" />
            </a>
          </div>
          <Media.Body className="project col-6" id="project-2">
            <h2>Pixel Art</h2>
            <p>Draw pictures by filling large pixels, built with React</p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 p-3">
        <Media className="project col-8" id="project-3">
          <div className="p-2 col-6">
            <a href="https://pacific-hollows-60748.herokuapp.com/">
              <img
                src="https://i.imgur.com/Q8b3DKFl.png"
                alt="Bills Tracker App"
              />
            </a>
          </div>
          <Media.Body className="project col-6" id="project-2">
            <h2>Bills Tracker</h2>
            <p>Record, categorize, and chart bills, built with React</p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 p-3">
        <Media className="project col-8" id="project-2">
          <div className="p-2 col-6">
            <a href="https://aqueous-hamlet-47886.herokuapp.com/">
              <img
                src="https://i.imgur.com/ws8m84pl.png"
                alt="Robofriends w/Redux App"
              />
            </a>
          </div>
          <Media.Body className="project col-6" id="project-2">
            <h2>Robofriends w/Redux</h2>
            <p>Fetch users data and search by name, built with React + Redux</p>
          </Media.Body>
        </Media>
      </Row>
    </Container>
  );
};

export default Portfolio;
