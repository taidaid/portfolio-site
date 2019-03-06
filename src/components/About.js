import React from "react";
import AnimatedWrapper from "../AnimatedWrapper";

const AboutComponent = () => {
  return (
    <div className="About">
      <div className="about-header">
        <h1>您好, 我是翁博展.</h1>
        <h1>Hi, my name is Bryan Windsor.</h1>
      </div>

      <div className="about-block">
        <div>
          <h3>
            Web Developer
            <span role="img" aria-label="Programmer emoji">
              👨‍💻
            </span>
          </h3>
        </div>
        <div>
          <p>
            I was introduced to programming in Java over 10 years ago as part of
            my degree in Management Information Systems. Students with an MIS
            major study how companies and individuals can use systems and the
            generated data in decision-making processes. In other words, MIS
            students tend to become analysts and managers, rather than hands-on
            specialists. During my coursework, I began to fall in love with
            programming. In every group project, I quickly volunteered to do the
            back-end logic in Java. After graduation, my attention shifted to
            the technical aspects of IT Operations, system and network
            administration, security, efficiency, and compliance.
          </p>
          <p>
            For over a year now, I have been fully focused on web development. A
            lot has changed in 10 years, but not the fundamentals of JS, HTML,
            and CSS. I love it more than ever as I can quickly build out single
            page applications in React.js and
          </p>
        </div>
      </div>
      <div className="about-block">
        <div>
          <h3>
            Hobbies
            <div>
              <span role="img" aria-label="Books emoji">
                📚
              </span>
              <span role="img" aria-label="Skiing emoji">
                🎿
              </span>
            </div>
          </h3>
        </div>

        <div>
          <p>
            I have always had a curious mind and a hands-on attitude. When I was
            young, I helped my father build stairs, forts, and playgrounds. I
            landscaped our home and church, built homes for the needy, and
            cooked in soup kitchens.
          </p>
          <p>
            My first foray into history was the American Civil War, followed
            closely by the history of Rome. In recent years, I have focused on
            revolutions in particular, including French, English, American,
            South American, Haitian revolutions and now I am learning about the
            political turmoil of 1848 in Europe.
          </p>
          <p>
            I first began learning languages when I was 12 years old and
            required to take introductory courses in French and Spanish. I
            quickly discovered that I had a knack for French. After 6 years of
            studying French, I branched out into Mandarin Chinese and loved it.
            I studied Chinese and French concurrently for 2 years in university
            before traveling to China for a summer homestay program. I achieved
            limited fluency during this program and tested out of all Mandarin
            courses offered at my school. Sadly, this led to a decline in my
            ability. After graduation and working in Healthcare IT for 3 years,
            I decided I must revive this talent of mine and again enrolled in an
            intensive Mandarin program, this time in Taiwan. After 4 years of
            study, travel, and work in Asia, my Mandarin reached a comfotable
            level of professional proficiency. I began a Chinese Language club
            in Utrecht, Netherlands in order to share my passion with others. I
            have studied Chinese, French, Dutch, German, and Spanish.
          </p>
        </div>
      </div>
      <div className="about-block">
        <div>
          <h3>
            Educator
            <span role="img" aria-label="Educator emoji">
              👨‍🏫
            </span>
          </h3>
        </div>
        <div>
          <p>
            During my time in Taiwan, I became an English teacher for
            Chinese-speaking students. Through my Mandarin, I am able to easily
            and efficiently explain complex concepts. This skill has earned me
            hundreds of rave reviews from students and parents.
          </p>
        </div>
      </div>
      <div className="about-block">
        <div>
          <h3>
            Adventurer
            <span role="img" aria-label="Globe emoji">
              🌏
            </span>
          </h3>
        </div>
        <div>
          <p>
            I learned to ski at 6 years old and never looked back. I have been
            traveling, skiing, snowboarding, kitesurfing, wakeboarding, SCUBA
            diving, cliff diving, free climbing, hiking, racing, exploring, and
            loving every minute of it.
          </p>
          <table>
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
                  <p>Vale, Park City, Winterplace, Stubai Glacier</p>
                </td>
              </tr>
              <tr>
                <th>Walls Climbed</th>
                <td>
                  <p>Taiwan, Vietnam, The Netherlands</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="about-block">
        <div>
          <h3>
            IT&nbsp;
            <span role="img" aria-label="Globe emoji">
              🕴️
            </span>{" "}
            Operations Manager
          </h3>
        </div>
        <div>
          <p>
            After graduation from university, I had the opportunity to lead an
            IT department for 3 years in a healthcare management startup. In the
            beginning, the company had one outsourced IT support specialist for
            more than 50 employees and scattered, outdated, physical servers on
            tape backups. By the end, I was truly working as a CIO, overseeing
            an in-house team of 4 IT field technicians, a network engineer, and
            a sysadmin. By utilizing an MSP for level 2 and 3 tickets that were
            beyond our field techs' abilties, we effectively managed costs and
            quality-of-service. With a dedicated "firefighting" team, the
            sysadmin, network engineer, and myself were free to put our thoughts
            on projects first and accomplish amazing feats, even though we were
            "building the plane while flying".
          </p>
        </div>
      </div>
    </div>
  );
};

const About = AnimatedWrapper(AboutComponent);
export default About;
