import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import GitHubLogo from "../assets/GitHub-Mark-32px.png";
import WeatherAppCapture from "../assets/the_weather_app_capture.PNG";
import FaceDetectImage from "../assets/Face-Detect-Capture.PNG";
import AdvJSNotes from "../assets/AdvJSNotes.PNG";
import BillsTrackerImage from "../assets/bills-tracker-capture.PNG";
import RoboFriendsImage from "../assets/Robofriends-capture.png";
import PixelArtImage from "../assets/pixel-art-capture.PNG";
import StoreCheckoutImage from "../assets/store-checkout-capture.PNG";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import GoogleDocLogo from "../assets/google-doc-icon.png";

const Portfolio = () => {
  return (
    <Container fluid className="Portfolio col-12 align-items-center">
      <Row className="justify-content-center col-12 ">
        <Media className="">
          <Media.Body className="portfolio-header text-center">
            <div>
              Thank you for your interest in learning about my work! Feel free
              to <a href="mailto:windsor.bryan@gmail.com">contact me</a>.
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
      <Row className="justify-content-center col-12 ">
        <Media className="project-block " id="project-1 ">
          <div className="media-image">
            <a href="https://clockwork-weather-app.herokuapp.com/">
              <img src={WeatherAppCapture} alt="The Weather App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-1">
            <h2>The Weather App</h2>
            <p>
              Displays weather forecasts. Built with Create-React-App,
              Dark-Sky-API, Opencage-API-Client, React-Chartjs-2, and
              React-Smooth-Collapse.
            </p>
            <p>
              <a href="https://github.com/taidaid/weatherapp">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block " id="project-2 ">
          <div className="media-image">
            <a href="https://protected-taiga-22940.herokuapp.com/">
              <img src={FaceDetectImage} alt="Face Detection App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-2">
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
        <Media className="project-block " id="project-3">
          <div className="media-image">
            <a href="https://docs.google.com/document/d/1VPGK4isl2HhuXIIhTdZZCkjoubF0W1diJyx1WpmoS8c/edit?usp=sharing">
              <img src={AdvJSNotes} alt="Advanced JavaScript Concepts" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-3">
            <h2>Advanced JavaScript Concepts</h2>
            <p>
              Technical writing covering{" "}
              <a href="https://www.udemy.com/advanced-javascript-concepts/">
                Advanced JavaScript Concepts
              </a>
              , one of the highest-rated Web Development courses on Udemy.
            </p>
            <p>
              <a href="https://docs.google.com/document/d/1VPGK4isl2HhuXIIhTdZZCkjoubF0W1diJyx1WpmoS8c/edit?usp=sharing">
                <img src={GoogleDocLogo} alt="google doc" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block" id="project-4">
          <div className="media-image">
            <a href="https://stormy-sands-35736.herokuapp.com/">
              <img src={BillsTrackerImage} alt="Pixel Art App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-4">
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
        <Media className="project-block" id="project-5">
          <div className="media-image">
            <a href="https://pacific-hollows-60748.herokuapp.com/">
              <img src={RoboFriendsImage} alt="Bills Tracker App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-5">
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
        <Media className="project-block" id="project-6">
          <div className="media-image">
            <a href="https://aqueous-hamlet-47886.herokuapp.com/">
              <img src={PixelArtImage} alt="Robofriends w/Redux App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-6">
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
        <Media className="project-block" id="project-7">
          <div className="media-image">
            <a href="https://fast-falls-89000.herokuapp.com">
              <img src={StoreCheckoutImage} alt="Store Checkout App" />
            </a>
          </div>
          <Media.Body className="project-body" id="project-7">
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
