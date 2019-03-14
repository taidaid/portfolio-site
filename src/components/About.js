import React from "react";
import { Container, Row, Media, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="About pt-5 w-100 justify-content-center">
      <Row className="justify-content-center mb-5 col-8">
        <div className="about-header ">
          <h1>
            您好, 我是翁博展.
            <br />
            Hi, my name is Bryan Windsor.
          </h1>
        </div>
      </Row>

      <Row className="justify-content-center mb-5">
        <Media className="about-block border border-white rounded p-3 col-8">
          <div className="pr-4 col-3 ">
            <h3>
              Web Developer
              <span role="img" aria-label="Man Technologist emoji">
                👨‍💻
              </span>
            </h3>
          </div>

          <Media.Body className="pl-4 col-9">
            <p>
              I began programming in Java over 10 years ago as part of my degree
              in Management Information Systems. After graduation, I managed IT
              operations including, system and network administration, security,
              strategy, and compliance, and found scripting to be an invaluable
              tool.
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center mb-5">
        <Media className="about-block border border-white rounded p-3 col-8">
          <div className="pr-4 col-3">
            <h3>
              Educator
              <span role="img" aria-label="Man Teacher emoji">
                👨‍🏫
              </span>
            </h3>
          </div>
          <Media.Body className="pl-4 col-9">
            <p>
              Working in Chinese and general skill for instruction/documentation
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center mb-5">
        <Media className="about-block border border-white rounded p-3 col-8">
          <div className="pr-4 col-3">
            <h3>
              Hobbies
              <div>
                <span role="img" aria-label="Books emoji">
                  📚
                </span>
                <span role="img" aria-label="Snowboarder emoji">
                  🏂
                </span>
              </div>
            </h3>
          </div>
          <Media.Body className="pl-4 col-9">
            <p>
              Sports
              {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
            </p>
            <p>
              {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
              Reading history/sci-fi
            </p>
            <p>
              {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
              Languages
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center mb-5">
        <Media className="about-block border border-white rounded p-3 col-8">
          <div className="pr-4 col-3">
            <h3>
              Adventurer
              <span role="img" aria-label="Globe Showing Asia-Australia emoji">
                🌏
              </span>
            </h3>
          </div>
          <Media.Body className="pl-4 col-9">
            <p>
              <em>
                Traveling Asia/Europe, living in China, Taiwan, Vietnam,
                Netherlands
              </em>
              , skiing/snowboarding, SCUBA diving, bouldering, yoga,
              running/races
              {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className=" justify-content-center mb-5">
        <Media className="about-block border border-white rounded p-3 col-8">
          <div className="pr-4 col-3 ">
            <h3>
              IT Operations Manager
              <span role="img" aria-label="Man Office Worker emoji">
                👨‍💼
              </span>
            </h3>
          </div>
          <Media.Body className="pl-4 col-9">
            <p>
              Major projects/accomplishments, starting and ending points
              (accomplishment), technologies, lessons learned
              {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
            </p>
          </Media.Body>
        </Media>
      </Row>
      <div className="about-block">
        <h3>
          Web Developer
          <span role="img" aria-label="Man Technologist emoji">
            👨‍💻
          </span>
        </h3>
        <div>
          <p>
            I began programming in Java over 10 years ago as part of my degree
            in Management Information Systems. After graduation, I managed IT
            operations including, system and network administration, security,
            strategy, and compliance, and found scripting to be an invaluable
            tool.
            {/* Dolorum omnis veniam eum voluptas nam et distinctio. Culpa sed sequi
            assumenda qui nam. Omnis veniam iure et voluptas autem ratione. */}
          </p>
          <p>
            For over a year now, I have been fully focused on web development.
            With modern ES6 syntax, React.js, and Node.js, it is
            {/* Sunt id esse consequatur iusto reiciendis et ipsum autem dolor.
            Repellendus reiciendis expedita modi saepe nam et numquam. Atque
            officiis sit ut architecto sit et delectus. */}
          </p>
        </div>
      </div>
      <div className="about-block">
        <h3>
          Educator
          <span role="img" aria-label="Man Teacher emoji">
            👨‍🏫
          </span>
        </h3>
        <div>
          <p>
            Working in Chinese and general skill for instruction/documentation
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
          </p>
        </div>
      </div>
      <div className="about-block ">
        <h3>
          Hobbies
          <div>
            <span role="img" aria-label="Books emoji">
              📚
            </span>
            <span role="img" aria-label="Snowboarder emoji">
              🏂
            </span>
          </div>
        </h3>
        <div>
          <p>
            Sports
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
          </p>
          <p>
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
            Reading history/sci-fi
          </p>
          <p>
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
            Languages
          </p>
        </div>
      </div>
      <div className="about-block">
        <h3>
          Adventurer
          <span role="img" aria-label="Globe Showing Asia-Australia emoji">
            🌏
          </span>
        </h3>
        <div>
          <p>
            <em>
              Traveling Asia/Europe, living in China, Taiwan, Vietnam,
              Netherlands
            </em>
            , skiing/snowboarding, SCUBA diving, bouldering, yoga, running/races
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
          </p>
          {/* <table>
            <tbody>
              <tr>
                <th>Countries Explored</th>
                <td>
                  <p>
                    The Netherlands, Austria, Vietnam, Taiwan, China, Thailand,
                    Malaysia, Singapore, USA and many more...
                  </p>
                </td>
              </tr>
              <tr>
                <th>Places Dived</th>
                <td>
                  <p>GA Aquarium, Thailand, St. Thomas, Fiji</p>
                </td>
              </tr>
              <tr>
                <th>Mountains Skiied</th>
                <td>
                  <p>Vale, Park City, Winterplace</p>
                </td>
              </tr>
              <tr>
                <th>Walls Climbed</th>
                <td>
                  <p>Taiwan, Vietnam, The Netherlands</p>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      <div className="about-block">
        <h3>
          IT Operations Manager
          <span role="img" aria-label="Man Office Worker emoji">
            👨‍💼
          </span>
        </h3>
        <div>
          <p>
            Major projects/accomplishments, starting and ending points
            (accomplishment), technologies, lessons learned
            {/* Est provident perspiciatis non voluptate molestias omnis laudantium
            nesciunt est. Saepe laudantium eum quos excepturi. Asperiores
            numquam doloribus qui qui consequatur ratione. Nihil assumenda eaque
            nemo officia. */}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
