import React, { useState } from "react";
import TextLoop from "react-text-loop";
import ProfilePhoto from "../assets/profile-photo-2.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Media } from "react-bootstrap";
import "../App.css";

const Home = () => {
  const [expandFirst, setExpandFirst] = useState(false);
  const [expandSecond, setExpandSecond] = useState(false);
  const [expandThird, setExpandThird] = useState(false);

  return (
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

          <Media className="testimonial">
            <div className="testimonial-header">
              <p>John Whaley</p>
              <p>
                <em>Executive Vice President</em>
              </p>
            </div>
            <Media.Body className="testimonial-body">
              <p
                className="read-more"
                onClick={() => setExpandFirst(!expandFirst)}
              >
                <p>
                  As the Executive Vice President of a growing company, I had
                  the pleasure of working with Mr. Windsor for several years.
                  Mr. Windsor served as the Director of Information Technology
                  and reported directly to me. I was always impressed by Mr.
                  Windsor’s positive attitude, quest for knowledge, and
                  maturity. <em>{expandFirst ? "" : "Read more..."}</em>
                </p>
                <p>
                  {expandFirst
                    ? `Mr. Windsor designed the information technology infrastructure
                for the entire Company’s multiple locations. After the design
                stage was complete, he interacted with the vendors for the
                equipment purchases and the engineers and technicians for the
                implementation of the plan. The success of the project was
                instrumental in the Organization achieving its growth plans.`
                    : ``}
                </p>

                <p>
                  {expandFirst
                    ? `Mr. Windsor’s intelligence, work ethic, and desire to learn are
                demonstrated characteristics that would lead to success in an
                academic program. I can also attest to Mr. Windsor’s ethical and
                moral character. He has a very approachable personality and
                works well with others.`
                    : ``}
                </p>
              </p>
            </Media.Body>
          </Media>

          <Media className="testimonial">
            <div className="testimonial-header">
              <p>Alex Levitt</p>
              <p>
                <em>Consultant, Applied Behavioral Science</em>
              </p>
            </div>
            <Media.Body className="testimonial-body">
              <p
                className="read-more"
                onClick={() => setExpandThird(!expandThird)}
              >
                Bryan and I have worked on several React and JavaScript
                applications within the last year. He’s been an excellent coding
                collaborator and a strong communicator. He’s someone who truly
                loves to learn, and his ability to quickly grasp, implement,
                explore and debug new technologies has impressed me many times.{" "}
                <em>{expandThird ? "" : "Read more..."}</em>
                {expandThird
                  ? `He’s highly motivated,
          technically inclined, and his drive and dedication to goals are an
          asset to any project he’s a part of.`
                  : ``}
              </p>
            </Media.Body>
          </Media>

          <Media className="testimonial">
            <div className="testimonial-header">
              <p>Ryan Harrington</p>
              <p>
                <em>Senior Teacher</em>
              </p>
            </div>
            <Media.Body className="testimonial-body">
              <p
                className="read-more"
                onClick={() => setExpandSecond(!expandSecond)}
              >
                Bryan spent 3 years as a teacher for Head Start English School
                in Taipei, Taiwan. He was well liked and respected by his
                colleagues and his supervisors. He was extremely self
                motivating; attending Chinese classes in the morning while
                teaching afternoons and evenings.{" "}
                <em>{expandSecond ? "" : "Read more..."}</em>
                {expandSecond
                  ? `Bryan was creative and patient
                with his students. He taught both assigned curriculum as well as
                classes he developed himself. Bryan required very little
                training or supervision as he understood and executed his
                position with excellence. Bryan left this position when he moved
                away from Taiwan. He would certainly be welcomed back.`
                  : ``}
              </p>
            </Media.Body>
          </Media>

          <Media className="testimonial">
            <div className="testimonial-header">
              <p>Todd Pennington</p>
              <p>
                <em>Strategic Account Manager</em>
              </p>
            </div>
            <Media.Body className="testimonial-body">
              <p>
                I have known Bryan for close to a year as our companies have
                partnered on numerous technology projects and service
                enhancements. Bryan is extremely professional. He knows the
                inner workings of his business and has a strong work-ethic, not
                to mention a level of interest in technology that is far above
                others in similar roles.
              </p>
            </Media.Body>
          </Media>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
