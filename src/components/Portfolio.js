import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import PortfolioPiece from "./PortfolioPiece";

// assets
import GitHubLogo from "../assets/GitHub-Mark-32px.png";
import WeatherAppCapture from "../assets/the_weather_app_capture.PNG";
import FaceDetectWebP from "../assets/face-detect.webp";
import AdvJSNotes from "../assets/AdvJSNotes.PNG";
import BillsTrackerImage from "../assets/bills-tracker-capture.PNG";
import RoboFriendsImage from "../assets/Robofriends-capture.png";
import PixelArtImage from "../assets/pixel-art-capture.PNG";
import StoreCheckoutImage from "../assets/store-checkout-capture.PNG";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import GoogleDocLogo from "../assets/google-doc-icon.png";
import TerminalHackerGif from "../assets/terminal_hacker.gif";
import ProjectBoostGif from "../assets/project-boost.gif";

const Portfolio = () => {
  return (
    <Container fluid className="Portfolio col-12 align-items-center">
      <Row className="justify-content-center col-12 ">
        <Media className="">
          <Media.Body className="portfolio-header text-center">
            <div>
              Thank you for your interest in learning about my work! Feel free
              to <a href="mailto:windsor.bryan@gmail.com">contact me</a>.<br />
              <strong>
                Be aware! Most of these projects are hosted for free and may
                take a couple of minutes to open!
              </strong>
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
      <PortfolioPiece
        imgSrc={ProjectBoostGif}
        imgAlt={"Project Boost"}
        websiteUrl={"https://sharemygame.com/@Taidai/project-boost"}
        repoHref={"https://github.com/taidaid/unity-project-boost"}
        title={"Project Boost"}
        description={`My second attempt at a Unity game in C#. In this game, you pilot a ship through a 2D level avoiding all obstacles to reach the finish pad.`}
        repoLogoSrc={GitHubLogo}
      />
      <PortfolioPiece
        imgSrc={TerminalHackerGif}
        imgAlt={"Terminal Hacker"}
        websiteUrl={"https://sharemygame.com/@Taidai/terminal-hacker"}
        repoHref={"https://github.com/taidaid/unity-terminal-hacker"}
        title={"Terminal Hacker"}
        description={`My first foray in Unity and C#, this simple game lets you choose a difficulty and then you must guess the password.
        A hint is provided in the form of an anagram.`}
        repoLogoSrc={GitHubLogo}
      />
      <PortfolioPiece
        imgSrc={WeatherAppCapture}
        imgAlt={"The Weather App"}
        websiteUrl={"https://clockwork-weather-app.herokuapp.com/"}
        repoHref={"https://github.com/taidaid/weatherapp"}
        title={"The Weather App"}
        description={`Displays weather forecasts. Built with Create-React-App,
              Dark-Sky-API, Opencage-API-Client, React-Chartjs-2, and
              React-Smooth-Collapse.`}
        repoLogoSrc={GitHubLogo}
      />
      <PortfolioPiece
        imgSrc={FaceDetectWebP}
        imgAlt={"Face Detection App"}
        websiteUrl={"https://protected-taiga-22940.herokuapp.com/"}
        repoHref={"https://github.com/taidaid/face-detection"}
        title={"Face Detection App"}
        description={`Detects faces in pictures. Built with React, Tachyons, and Web
              Storage API.`}
        repoLogoSrc={GitHubLogo}
      />
      <PortfolioPiece
        imgSrc={AdvJSNotes}
        imgAlt={"Advanced JavaScript Concepts"}
        websiteUrl={
          "https://docs.google.com/document/d/1VPGK4isl2HhuXIIhTdZZCkjoubF0W1diJyx1WpmoS8c/edit?usp=sharing"
        }
        repoHref={
          "https://docs.google.com/document/d/1VPGK4isl2HhuXIIhTdZZCkjoubF0W1diJyx1WpmoS8c/edit?usp=sharing"
        }
        title={"Advanced JavaScript Concepts"}
        description={`Technical writing covering Advanced JavaScript Concepts, one of the highest-rated Web Development courses on Udemy.`}
        repoLogoSrc={GoogleDocLogo}
      />
      <PortfolioPiece
        imgSrc={BillsTrackerImage}
        imgAlt={"Bills Tracker"}
        websiteUrl={"https://pacific-hollows-60748.herokuapp.com/"}
        repoHref={"https://github.com/taidaid/pixelart-react"}
        title={"Bills Tracker"}
        description={`Record, categorize, and chart bills. Built with React,
              React-Router, Chart.js, and Web Storage API.`}
        repoLogoSrc={GitHubLogo}
      />
      <PortfolioPiece
        imgSrc={RoboFriendsImage}
        imgAlt={"Robofriends with Redux"}
        websiteUrl={"https://aqueous-hamlet-47886.herokuapp.com/"}
        repoHref={"https://github.com/taidaid/robofriends"}
        title={"Robofriends w/Redux"}
        description={`Fetch users' data and search by name. Built with React and Redux.`}
        repoLogoSrc={GitHubLogo}
      />

      <PortfolioPiece
        imgSrc={PixelArtImage}
        imgAlt={"Pixel Art"}
        websiteUrl={"https://stormy-sands-35736.herokuapp.com/"}
        repoHref={"https://github.com/taidaid/pixelart-react"}
        title={"Pixel Art"}
        description={`Draw pictures by filling large pixels. Built with React and Web
              Storage API.`}
        repoLogoSrc={GitHubLogo}
      />

      <PortfolioPiece
        imgSrc={StoreCheckoutImage}
        imgAlt={"Store Checkout App"}
        websiteUrl={"https://fast-falls-89000.herokuapp.com"}
        repoHref={"https://github.com/taidaid/ecommerce-site"}
        title={"Store Checkout"}
        description={`Create a list of products, add products to a shopping cart, and
              checkout via Stripe. Built with React, Stripe API, and Web Storage
              API.`}
        repoLogoSrc={GitHubLogo}
      />
    </Container>
  );
};

export default Portfolio;
