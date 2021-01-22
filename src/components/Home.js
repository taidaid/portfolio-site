import React, { useState, useEffect } from "react";
import TextLoop from "react-text-loop";
import ProfilePhoto from "../assets/profile-photo-2.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Media } from "react-bootstrap";
import Testimonial from "../components/Testimonials/Testimonial";

import "../App.css";
import OpenToWorkModal from "./OpenToWorkModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, []);

  return (
    <>
      <OpenToWorkModal showModal={showModal} setShowModal={setShowModal} />
      <Container fluid className="align-items-center">
        <Row className="col-12 justify-content-center">
          <div className="Home">
            <div className="headline">
              <h1>
                Hello World.
                <br />I am Bryan Windsor,{" "}
                <TextLoop>
                  <div>a web developer.</div>
                  <div>an educator.</div>
                  <div>a world traveler.</div>
                  <div>a polyglot.</div>
                  <div>an adventurer.</div>
                  <div>a climber.</div>
                  <div>a coffee-lover.</div>
                  <div>a diver.</div>
                  <div>a skier.</div>
                </TextLoop>
              </h1>
            </div>
            <Media className="introduction">
              <div className="intro-image">
                <img src={ProfilePhoto} alt="Bryan Windsor" />
              </div>
              <Media.Body className="testimonial-body">
                <p>
                  I am a freelance React developer from Atlanta, USA. To learn
                  more about me, please click{" "}
                  <Link className="textLink" to="/about">
                    'about',
                  </Link>{" "}
                  or check out{" "}
                  <Link className="textLink" to="/portfolio">
                    my portfolio
                  </Link>{" "}
                  to see some of my work.
                </p>
              </Media.Body>
            </Media>
            <Testimonial
              name={"Mathijs Nijland"}
              title={"Business Designer"}
              expandTextLink={""}
              firstSnippet={`It was great working together with Bryan. His eagerness to learn 
          and his commitment shows that he has a real passion for the work that he does. 
          What I really liked about our collaboration was that Bryan was always in search 
          of the best solution and consistently kept the customer’s perspective in mind. 
          He’s very aware of the process and makes sure that everybody is on board. He has 
          a proactive approach and takes responsibility, an excellent addition to any team!`}
            />
            <Testimonial
              name={"Remi Appels"}
              title={"Solution Architect"}
              expandTextLink={""}
              firstSnippet={`Bryan is a developer with a high sense of responsibility and 
            very involved in the projects he works on. Not only his programmer skills 
            but also mathematical skills are great. Bryan is studious and even tries to 
            understand all the work outside his comfort zone, like backend functionality. 
            And most importantly, an extremely nice colleague to work with!`}
            />

            <Testimonial
              name={"John Whaley"}
              title={"Executive Vice President"}
              expandTextLink={" Read more..."}
              firstSnippet={`As the Executive Vice President of a growing company, I had the
        pleasure of working with Mr. Windsor for several years. Mr.
        Windsor served as the Director of Information Technology and
        reported directly to me. I was always impressed by Mr. Windsor’s
        positive attitude, quest for knowledge, and maturity.`}
              secondSnippet={`Mr. Windsor’s intelligence, work ethic, and desire to learn are
        demonstrated characteristics that would lead to success in an
        academic program. I can also attest to Mr. Windsor’s ethical and
        moral character. He has a very approachable personality and
        works well with others.`}
            />

            <Testimonial
              name={"Alex Levitt"}
              title={"Consultant, Applied Behavioral Science"}
              expandTextLink={" Read more..."}
              firstSnippet={`Bryan and I have worked on several React and JavaScript
                applications within the last year. He’s been an excellent coding
                collaborator and a strong communicator. He’s someone who truly
                loves to learn, and his ability to quickly grasp, implement,
                explore and debug new technologies has impressed me many times.`}
              secondSnippet={`He’s highly motivated,
          technically inclined, and his drive and dedication to goals are an
          asset to any project he’s a part of.`}
            />

            <Testimonial
              name={"Ryan Harrington"}
              title={"Senior Teacher"}
              expandTextLink={" Read more..."}
              firstSnippet={`Bryan spent 3 years as a teacher for Head Start English School
          in Taipei, Taiwan. He was well liked and respected by his
          colleagues and his supervisors. He was extremely self
          motivating; attending Chinese classes in the morning while
          teaching afternoons and evenings.`}
              secondSnippet={`Bryan was creative and patient
          with his students. He taught both assigned curriculum as well as
          classes he developed himself. Bryan required very little
          training or supervision as he understood and executed his
          position with excellence. Bryan left this position when he moved
          away from Taiwan. He would certainly be welcomed back.`}
            />
            <Testimonial
              name={"Todd Pennington"}
              title={"Strategic Account Manager"}
              expandTextLink={""}
              firstSnippet={`I have known Bryan for close to a year as our companies have
          partnered on numerous technology projects and service
          enhancements. Bryan is extremely professional. He knows the inner
          workings of his business and has a strong work-ethic, not to
          mention a level of interest in technology that is far above others
          in similar roles.`}
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
