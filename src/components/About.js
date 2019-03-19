import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import WaterfallClimb from "../assets/Waterfall-Climb.jpg";
import NPCLogo from "../assets/NPC-Logo.jpg";
import ThacBanGioc from "../assets/Thac Ban Gioc Vietnam.jpg";
import WebDeveloperPhoto from "../assets/WebDeveloperPhoto.jpg";
import EducatorImage from "../assets/EducatorImage.png";

const About = () => {
  return (
    <Container fluid className="About align-items-center">
      <Row className="justify-content-center mb-5 col-12">
        <div className="about-header ">
          <h1>歡迎光臨!</h1>
          <p>
            '歡迎光臨' means 'Welcome' in Chinese. Thanks for visiting my
            website. My name is Bryan, and I'm 30 years old. If you are
            interested in finding out more about me, my interests, projects or
            skills, please browse around.
          </p>
        </div>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border border-white rounded">
          <img src={WaterfallClimb} alt="Waterfall Climb" />
          <Media.Body className=" ">
            <div className="text-center">
              <h3>
                I seek challenge...
                {/* <span role="img" aria-label="Man Technologist emoji">
                  👨‍💻
                </span> */}
              </h3>
            </div>
            <p>
              Whether it is training for a race or learning a language, I seek
              the thrill of accomplishment. As a professional, I am proud to
              have established and directed an effective and cost-efficient IT
              department, as well as educated hundreds of students.
              {/* Ever since I was a child, I have been endlessly curious and
              persistent in my pursuit of learning. I discovered my passion for
              language in the 6th grade and began learning French. Since then, I
              have studied English, Chinese, French, Dutch, German, Portuguese,
              and Spanish (with varying competency). Programming, Networking,
              Languages, Athletics */}
            </p>
            <p>
              Throughout my life, I have participated in countless athletic
              competitions in baseball, football, rowing, lacrosse, and running.
              In my pursuit of knowledge, I have achieved proficiency in
              Mandarin and French, and, hopefully soon, Dutch. I have learned
              many computer languages as well, including JavaScript, CSS, HTML,
              Java, Python, SQL, and more.
            </p>
            <p>
              I see programming as one of the most challenging and rewarding
              occupations. Through programming, I have the opportunity to
              stretch my mind by completing intricate designs and functions
              while simultaneously creating real value for people.
            </p>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border rounded  ">
          <img src={WebDeveloperPhoto} alt="Bryan Windsor" />
          <Media.Body className=" ">
            <div className=" text-center ">
              <h3>
                Web Developer
                {/* <span role="img" aria-label="Man Technologist emoji">
                  👨‍💻
                </span> */}
              </h3>
            </div>
            <p>
              I began programming in Java over 10 years ago as part of my degree
              in Management Information Systems and learned to build
              applications using the LAMP stack. After graduation, I utilized
              PowerShell and SQL for scripting and reporting as a part of my job
              duties. Since then I have become deeply familiar with the MERN
              stack, including React.js, Redux, JavaScript, HTML/CSS, Bootstrap,
              Node.js, Express, PostgreSQL, and MongoDB.
            </p>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border border-white rounded  ">
          <img src={EducatorImage} alt="English-Chinese" />
          <Media.Body className="">
            <div className="text-center">
              <h3>
                Educator
                {/* <span role="img" aria-label="Man Teacher emoji">
                  👨‍🏫
                </span> */}
              </h3>
            </div>
            <p>
              My journey to becoming an educator began with learning Mandarin
              Chinese. I have always loved studying languages and to achieve
              fluency in Mandarin, I attended one of the most prestigious
              Mandarin training insitutions in the world, the Mandarin Training
              Center at National Taiwan Normal University. While there, I began
              teaching English to Taiwanese children and found that I loved it!
              Since then, I have continued to teach while improving my
              development skills daily. Teaching provides a wonderful chance for
              me to interact with young minds and exchange ideas across
              generational and cultural gaps. It also helps me maintain my
              Mandarin skills.{" "}
              <span role="img" aria-label="Smirking Face">
                😏
              </span>
            </p>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border rounded  ">
          <img src={NPCLogo} alt="National Pain Care" />
          <Media.Body className="">
            <div className="text-center">
              <h3>
                IT Operations Manager
                {/* <span role="img" aria-label="Man Office Worker emoji">
                👨‍💼
              </span> */}
              </h3>
            </div>
            <p>
              After graduation, I worked for a healthcare management company,
              National Pain Care. Unfortunately, the company ran into trouble
              and was finally shut down in 2016. It was an innovative company
              with hard-working, caring, and intelligent people. I learned a
              great deal from my colleagues about system design and
              administration, personnel and project management, and even radio,
              TV, and digital marketing.
            </p>
            <p>
              I was charged with managing all marketing and IT projects and
              staff. I even functioned as an office manager for 4 locations and
              50 employees for over 6 months. With my inital goals completed and
              the demise of the company, I found myself in an excellent position
              to pursue a lifelong dream, fluent Mandarin.
            </p>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border border-white rounded  ">
          <img src={ThacBanGioc} alt="Thac Ban Gioc" />
          <Media.Body className="">
            <div className="text-center">
              <h3>
                Adventurer
                {/* <span
                  role="img"
                  aria-label="Globe Showing Asia-Australia emoji"
                >
                  🌏
                </span> */}
              </h3>
            </div>
            <p>
              While learning Mandarin in Taiwan, I had the opportunity to
              explore Southeast Asia. I visited Vietnam, Cambodia, Thailand,
              Japan, Singapore, and Malaysia while there. In total, I have
              visited more than 12 countries outside of Europe and 8 countries
              within.
              {/* <em>
                Traveling Asia/Europe, living in China, Taiwan, Vietnam,
                Netherlands
              </em>
              , skiing/snowboarding, SCUBA diving, bouldering, yoga,
              running/races */}
            </p>
            <p>
              I enjoy a good thrill and have free climbed waterfalls, hiked
              through rainforests, SCUBA dived, and kite surfed in the Gulf of
              Thailand.
            </p>
          </Media.Body>
        </Media>
      </Row>
    </Container>
  );
};

export default About;
