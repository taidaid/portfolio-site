import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import GitHubLogo from "../assets/GitHub-Mark-32px.png";
import FaceDetectImage from "../assets/Face-Detect-Capture.PNG";
import BillsTrackerImage from "../assets/bills-tracker-capture.PNG";
import RoboFriendsImage from "../assets/Robofriends-capture.png";
import PixelArtImage from "../assets/pixel-art-capture.PNG";
import StoreCheckoutImage from "../assets/store-checkout-capture.PNG";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import HerokuLogo from "../assets/heroku-logo-solid-purple.svg";

const Portfolio = () => {
  return (
    <Container fluid className="Portfolio col-12 align-items-center">
      <Row className="justify-content-center col-12 ">
        <Media className="">
          <Media.Body className="portfolio-header text-center">
            <h2>I'm looking for opportunities!</h2>
            <div>
              I'm available to put my skills to work for you! Feel free to{" "}
              <a href="mailto:windsor.bryan@gmail.com">contact me</a>.
              <div className="contact">
                <span>
                  <a href="https://www.linkedin.com/in/bryanwindsor/">
                    <img
                      className="p-2"
                      src={LinkedinLogo}
                      alt="Linkedin Profile"
                    />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/taidaid">
                    <img
                      className="p-2"
                      src={GithubLogo}
                      alt="Github Profile"
                    />
                  </a>
                </span>
                <span>
                  <a href="mailto:windsor.bryan@gmail.com?subject=Developer Opportunity">
                    <img className="p-2" src={GmailLogo} alt="Gmail" />
                  </a>
                </span>
              </div>
            </div>
          </Media.Body>
        </Media>
      </Row>
      <p className="advisory">
        <em>
          These apps are hosted for free on
          <a href="http://heroku.com">
            <img id="heroku-logo" src={HerokuLogo} alt="Heroku" />
            Heroku
          </a>
          . They may take ~30 seconds to open.
        </em>
      </p>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block " id="project-1 ">
          <div className="media-image">
            <a href="https://protected-taiga-22940.herokuapp.com/">
              <img src={FaceDetectImage} alt="Face Detection App" />
            </a>
          </div>
          <Media.Body className="project-body">
            <h2>Face Detection</h2>
            <p>
              Detects faces in pictures. Built with React, Tachyons, and Web
              Storage API.
            </p>
            <p>
              <a href="https://github.com/taidaid/face-detection">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block" id="project-2">
          <div className="media-image">
            <a href="https://stormy-sands-35736.herokuapp.com/">
              <img src={BillsTrackerImage} alt="Pixel Art App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-2">
            <h2>Bills Tracker</h2>
            <p>
              Record, categorize, and chart bills. Built with React,
              React-Router, Chart.js, and Web Storage API.
            </p>

            <p>
              <a href="https://github.com/taidaid/pixelart-react">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block" id="project-3">
          <div className="media-image">
            <a href="https://pacific-hollows-60748.herokuapp.com/">
              <img src={RoboFriendsImage} alt="Bills Tracker App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-3">
            <h2>Robofriends w/Redux</h2>
            <p>
              Fetch users' data and search by name. Built with React and Redux.
            </p>
            <p>
              <a href="https://github.com/taidaid/bills-tracker">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block" id="project-4">
          <div className="media-image">
            <a href="https://aqueous-hamlet-47886.herokuapp.com/">
              <img src={PixelArtImage} alt="Robofriends w/Redux App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-4">
            <h2>Pixel Art</h2>
            <p>
              Draw pictures by filling large pixels. Built with React and Web
              Storage API.
            </p>

            <p>
              <a href="https://github.com/taidaid/robofriends">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block" id="project-5">
          <div className="media-image">
            <a href="https://fast-falls-89000.herokuapp.com">
              <img src={StoreCheckoutImage} alt="Store Checkout App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-5">
            <h2>Store Checkout</h2>
            <p>
              Create a list of products, add products to a shopping cart, and
              checkout via Stripe. Built with React, Stripe API, and Web Storage
              API.
            </p>
            <p>
              <a href="https://github.com/taidaid/ecommerce-site">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
    </Container>
  );
};

export default Portfolio;
